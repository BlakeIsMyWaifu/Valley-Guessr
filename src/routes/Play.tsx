import { AppShell, ScrollArea, Stack, Title } from '@mantine/core'
import { createRoute } from '@tanstack/react-router'
import Map from 'src/components/Map'

import LocationImage from '~/components/LocationImage'
import Timer from '~/components/Timer'
import Totems from '~/components/Totems'
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
				<Sidebar />
			</AppShell.Navbar>
			<AppShell.Main>
				<Map />
			</AppShell.Main>
		</AppShell>
	) : null
}

function Sidebar() {
	const location = useGameStore(state => state.location)!

	return (
		<ScrollArea scrollbars='y'>
			<Stack gap='md' mt='md' mb='md'>
				<Title ta='center'>Valley Guessr</Title>
				<Timer />
				<LocationImage location={location} />
				<Totems />
			</Stack>
		</ScrollArea>
	)
}
