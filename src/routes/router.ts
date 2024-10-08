import { createMemoryHistory, createRouter } from '@tanstack/react-router'

import { indexRoute } from '~/routes/Home'
import { playRoute } from '~/routes/Play'
import { rootRoute } from '~/routes/Root'

import { progressRoute } from './Progress'

const routeTree = rootRoute.addChildren([indexRoute, playRoute, progressRoute])

const memoryHistory = createMemoryHistory({
	initialEntries: ['/']
})

export const router = createRouter({ routeTree, history: memoryHistory })

declare module '@tanstack/react-router' {
	interface Register {
		router: typeof router
	}
}
