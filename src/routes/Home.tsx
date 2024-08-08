import { Box, Button, Stack, Title } from '@mantine/core'
import { createRoute, Link } from '@tanstack/react-router'

import { useGameStore } from '~/state/useGameStore'
import { useProgressStore } from '~/state/useProgressStore'

import { rootRoute } from './Root'

export const indexRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/',
	component: Home
})

function Home() {
	const startGame = useGameStore(state => state.startGame)
	const incomplete = useProgressStore(state => state.incomplete)

	return (
		<Box component={Stack} align='center' justify='center' style={{ height: '100vh' }}>
			<Title>Valley Guessr</Title>
			<Button component={Link} to='/play' onClick={startGame} disabled={!incomplete.length}>
				Play
			</Button>
			<Button component={Link} to='/progress'>
				Progress
			</Button>
		</Box>
	)
}
