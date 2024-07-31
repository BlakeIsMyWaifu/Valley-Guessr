import { AppShell } from '@mantine/core'
import { useMemo } from 'react'
import Map from 'src/components/Map'
import Sidebar from 'src/components/Sidebar'
import getRandomLocation from 'src/utils/getRandomLocation'

export default function Play() {
	const location = useMemo(() => {
		return getRandomLocation()
	}, [])

	return (
		<AppShell navbar={{ width: 300, breakpoint: 'sm' }}>
			<AppShell.Navbar>
				<Sidebar location={location} />
			</AppShell.Navbar>
			<AppShell.Main>
				<Map mapName='farm' location={location} />
			</AppShell.Main>
		</AppShell>
	)
}
