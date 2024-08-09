import { AppShell } from '@mantine/core'
import { createRoute } from '@tanstack/react-router'

import Map from '~/components/Map'
import PlaySidebar from '~/components/PlaySidebar'
import { useGameStore } from '~/state/useGameStore'

import { rootRoute } from './Root'

export const playRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/play',
	component: Play
})

function Play() {
	const location = useGameStore(state => state.location)

	return location ? (
		<AppShell navbar={{ width: 300, breakpoint: 'sm' }}>
			<AppShell.Navbar>
				<PlaySidebar />
			</AppShell.Navbar>
			<AppShell.Main>
				<Map />
			</AppShell.Main>
		</AppShell>
	) : null
}
