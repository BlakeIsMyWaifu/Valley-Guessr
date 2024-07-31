import { AppShell } from '@mantine/core'
import Map from 'src/components/Map'
import Sidebar from 'src/components/Sidebar'

import { useGameStore } from '~/state/useGameStore'

export default function Play() {
	const location = useGameStore(state => state.location)

	return location ? (
		<AppShell navbar={{ width: 300, breakpoint: 'sm' }}>
			<AppShell.Navbar>
				<Sidebar />
			</AppShell.Navbar>
			<AppShell.Main>
				<Map mapName='farm' />
			</AppShell.Main>
		</AppShell>
	) : null
}
