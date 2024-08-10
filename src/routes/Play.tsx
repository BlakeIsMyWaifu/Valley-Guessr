import { AppShell, Burger, Group, ScrollArea, Stack, Title } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { createRoute } from '@tanstack/react-router'

import EndModal from '~/components/EndModal'
import HowToPlayButton from '~/components/HowToPlayButton'
import LocationImage from '~/components/LocationImage'
import Map from '~/components/Map'
import Timer from '~/components/Timer'
import Totems from '~/components/Totems'
import { getValleyMapData } from '~/data/maps'
import useImagePreloader from '~/hooks/useImagePreload'
import useIsDesktop from '~/hooks/useIsDesktop'
import { useGameStore } from '~/state/useGameStore'
import { publicPath } from '~/utils/publicPath'

import { rootRoute } from './Root'

export const playRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/play',
	component: Play
})

function Play() {
	const currentMap = useGameStore(state => state.currentMap)
	const linkedMaps = getValleyMapData(currentMap).links.map(({ name }) => `${publicPath}/map/${name}.png`)
	useImagePreloader(linkedMaps)

	const isDesktop = useIsDesktop()

	const location = useGameStore(state => state.location)
	if (!location) return null

	return (
		<>
			{isDesktop ? <DesktopPlay /> : <MobilePlay />}

			<EndModal />
		</>
	)
}

function DesktopPlay() {
	return (
		<AppShell navbar={{ width: 300, breakpoint: 'sm' }}>
			<AppShell.Navbar>
				<ScrollArea scrollbars='y'>
					<Stack gap='md' mt='md' mb='md'>
						<Title ta='center'>Valley Guessr</Title>
						<Timer />
						<LocationImage />
						<Totems />
						<HowToPlayButton />
					</Stack>
				</ScrollArea>
			</AppShell.Navbar>
			<AppShell.Main>
				<Map />
			</AppShell.Main>
		</AppShell>
	)
}

function MobilePlay() {
	const [opened, { toggle }] = useDisclosure()

	return (
		<AppShell
			header={{ height: 60 }}
			navbar={{ width: 300, breakpoint: 'lg', collapsed: { mobile: !opened } }}
			footer={{ height: 72 }}
		>
			<AppShell.Header>
				<Group h={60} justify='space-between'>
					<Burger opened={opened} onClick={toggle} ml='sm' />
					<Timer />
					<HowToPlayButton compact />
				</Group>
			</AppShell.Header>
			<AppShell.Navbar style={{ justifyContent: 'center' }}>
				<LocationImage />
			</AppShell.Navbar>
			<AppShell.Main>
				<Map />
			</AppShell.Main>
			<AppShell.Footer>
				<Totems />
			</AppShell.Footer>
		</AppShell>
	)
}
