import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

import Router from '~/routes/router'
import getRandomLocation, { type Location } from '~/utils/getRandomLocation'

import { createActionName, persistStoreName, type Slice } from './storeTypes'

type GameState = {
	location: Location | null
}

const gameState: GameState = {
	location: null
}

type GameAction = {
	startGame: () => void
	finishGame: () => void
	changeLocation: (location: Location | null) => void
}

const actionName = createActionName<GameAction>('game')

const createGameAction: Slice<GameStore, GameAction> = (set, get) => ({
	startGame: () => {
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
