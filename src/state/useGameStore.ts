import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

import { type MapName } from '~/generated/MAP'
import Router from '~/routes/router'
import getRandomLocation, { type Location } from '~/utils/getRandomLocation'

import { createActionName, persistStoreName, type Slice } from './storeTypes'

type GameState = {
	location: Location | null
	currentMap: MapName
}

const gameState: GameState = {
	location: null,
	currentMap: 'farm'
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
		set({ ...gameState }, ...actionName('startGame'))

		const location = getRandomLocation()
		get().changeLocation(location)
	},

	finishGame: () => {
		Router.push('home')
		get().changeLocation(null)
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
