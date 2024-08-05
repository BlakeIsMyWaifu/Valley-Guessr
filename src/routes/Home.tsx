import { Box, Button, Stack, Title } from '@mantine/core'
import { createRoute, Link } from '@tanstack/react-router'

import { useGameStore } from '~/state/useGameStore'

import { rootRoute } from './Root'

export const indexRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/',
	component: Home
})

function Home() {
	const startGame = useGameStore(state => state.startGame)

	return (
		<Box component={Stack} align='center' justify='center' style={{ height: '100vh' }}>
			<Title>Valley Guessr</Title>
			<Button component={Link} to='/play' onClick={startGame}>
				Play
			</Button>
		</Box>
	)
}
