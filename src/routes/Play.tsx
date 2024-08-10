import { AppShell } from '@mantine/core'
import { createRoute } from '@tanstack/react-router'

import EndModal from '~/components/EndModal'
import Map from '~/components/Map'
import PlaySidebar from '~/components/PlaySidebar'
import { getValleyMapData } from '~/data/maps'
import useImagePreloader from '~/hooks/useImagePreload'
import { useGameStore } from '~/state/useGameStore'
import { publicPath } from '~/utils/publicPath'

import { rootRoute } from './Root'

export const playRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/play',
	component: Play
})

function Play() {
	const location = useGameStore(state => state.location)

	const currentMap = useGameStore(state => state.currentMap)
	useImagePreloader(getValleyMapData(currentMap).links.map(({ name }) => `${publicPath}/map/${name}.png`))

	return location ? (
		<>
			<AppShell navbar={{ width: 300, breakpoint: 'sm' }}>
				<AppShell.Navbar>
					<PlaySidebar />
				</AppShell.Navbar>
				<AppShell.Main>
					<Map />
				</AppShell.Main>
			</AppShell>

			<EndModal />
		</>
	) : null
}
