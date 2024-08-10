import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

import { type Location } from '~/data/locations'
import { type MapName } from '~/generated/MAP'

import { createActionName, persistStoreName, type Slice } from './storeTypes'
import { useProgressStore } from './useProgressStore'

type GameState = {
	location: Location | null
	currentMap: MapName
	startTime: number
	finishTime: number
}

const gameState: GameState = {
	location: null,
	currentMap: 'farm',
	startTime: 0,
	finishTime: 0
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
				startTime: +new Date(),
				finishTime: 0
			},
			...actionName('startGame')
		)

		const { incomplete, completed } = useProgressStore.getState()

		const randomLocation = (locations: Location[]) => {
			const random = ~~(Math.random() * locations.length)
			get().changeLocation(locations[random])
		}

		randomLocation(incomplete.length ? incomplete : completed)
	},

	finishGame: () => {
		const { location } = get()
		if (!location) return

		const timeTaken = +new Date() - get().startTime

		useProgressStore.getState().addCompleted(location, timeTaken)

		set({ finishTime: timeTaken }, ...actionName('finishGame'))
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
