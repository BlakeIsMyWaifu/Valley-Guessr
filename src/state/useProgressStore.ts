import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

import { type Location, locationData } from '~/data/locations'

import { createActionName, persistStoreName, type Slice } from './storeTypes'

export type LocationTime = Location & { time: number }

type ProgressState = {
	completed: LocationTime[]
	incomplete: Location[]
}

const progressState: ProgressState = {
	completed: [],
	incomplete: []
}

type ProgressAction = {
	addCompleted: (location: Location, time: number) => void
	updateIncomplete: () => void
	resetProgress: () => void
}

const actionName = createActionName<ProgressAction>('progress')

const createProgressAction: Slice<ProgressStore, ProgressAction> = (set, get) => ({
	addCompleted: (location, time) => {
		const incomplete = new Set(get().incomplete)
		incomplete.delete(location)

		set(
			state => ({
				completed: [...state.completed, { ...location, time }],
				incomplete: [...incomplete]
			}),
			...actionName('addCompleted')
		)
	},

	updateIncomplete: () => {
		const completeLocation = get().completed.map<Location>(({ map, cords, size }) => ({ map, cords, size }))

		const completed = new Set<Location>(completeLocation)
		const incomplete = new Set<Location>()

		locationData.forEach(location => {
			if (!completed.has(location)) {
				incomplete.add(location)
			}
		})

		set(
			{
				incomplete: [...incomplete]
			},
			...actionName('updateIncomplete')
		)
	},

	resetProgress: () => {
		set({ completed: [], incomplete: structuredClone(locationData) }, ...actionName('resetProgress'))
	}
})

type ProgressStore = ProgressState & ProgressAction

export const useProgressStore = create<ProgressStore>()(
	devtools(
		persist(
			(...a) => ({
				...progressState,
				...createProgressAction(...a)
			}),
			{ name: persistStoreName('progress') }
		),
		{ name: 'Progress Store' }
	)
)
