import { Box, Button, Stack, Title } from '@mantine/core'
import { Link } from '@swan-io/chicane'

import { useGameStore } from '~/state/useGameStore'

import Router from './router'

export default function Home() {
	const startGame = useGameStore(state => state.startGame)

	return (
		<Box component={Stack} align='center' justify='center' style={{ height: '100vh' }}>
			<Title>Valley Guessr</Title>
			<Button component={Link} to={Router.play()} onClick={startGame}>
				Play
			</Button>
		</Box>
	)
}
