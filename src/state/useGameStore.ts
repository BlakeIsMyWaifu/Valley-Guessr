import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

import { type Location } from '~/data/locations'
import { type MapName } from '~/generated/MAP'
import { router } from '~/routes/router'

import { createActionName, persistStoreName, type Slice } from './storeTypes'
import { useProgressStore } from './useProgressStore'

type GameState = {
	location: Location | null
	currentMap: MapName
	startTime: number
}

const gameState: GameState = {
	location: null,
	currentMap: 'farm',
	startTime: 0
}

type GameAction = {
	startGame: () => void
	finishGame: () => void
	changeLocation: (location: Location | null) => void
	changeMap: (mapName: MapName) => void
}

const actionName = createActionName<GameAction>('game')

const createGameAction: Slice<GameStore, GameAction> = (set, get) => ({
	startGame: () => {
		set(
			{
				currentMap: 'farm',
				startTime: +new Date()
			},
			...actionName('startGame')
		)

		const { incomplete } = useProgressStore.getState()
		const random = ~~(Math.random() * incomplete.length)
		const location = incomplete[random]
		get().changeLocation(location)
	},

	finishGame: () => {
		const { location } = get()
		if (!location) return

		const timeTaken = +new Date() - get().startTime

		useProgressStore.getState().addCompleted(location, timeTaken)

		router.navigate({ to: '/' }).catch(console.error)

		set(gameState, ...actionName('finishGame'))
	},

	changeLocation: location => {
		set(
			{
				location
			},
			...actionName('changeLocation')
		)
	},

	changeMap: mapName => {
		set(
			{
				currentMap: mapName
			},
			...actionName('changeMap')
		)
	}
})

type GameStore = GameState & GameAction

export const useGameStore = create<GameStore>()(
	devtools(
		persist(
			(...a) => ({
				...gameState,
				...createGameAction(...a)
			}),
			{ name: persistStoreName('game') }
		),
		{ name: 'Game Store' }
	)
)
