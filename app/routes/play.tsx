import { AppShell } from '@mantine/core'
import { type MetaFunction } from '@remix-run/node'
import { useMemo } from 'react'

import Map from '~/components/Map'
import Sidebar from '~/components/Sidebar'
import getRandomLocation from '~/utils/getRandomLocation'

export const meta: MetaFunction = () => {
	return [{ title: 'Valley Guessr' }, { name: '_', content: '_' }]
}

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
