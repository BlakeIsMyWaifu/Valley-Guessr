import { AppShell } from '@mantine/core'
import { createRoute } from '@tanstack/react-router'
import Map from 'src/components/Map'
import Sidebar from 'src/components/Sidebar'

import { rootRoute } from '~/routes/Root'
import { useGameStore } from '~/state/useGameStore'

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
				<Sidebar />
			</AppShell.Navbar>
			<AppShell.Main>
				<Map />
			</AppShell.Main>
		</AppShell>
	) : null
}
