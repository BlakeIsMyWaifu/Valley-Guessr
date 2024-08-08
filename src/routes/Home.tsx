import { Button, Image, Modal, Stack, Title } from '@mantine/core'
import { createRoute, Link } from '@tanstack/react-router'

import { useGameStore } from '~/state/useGameStore'
import { publicPath } from '~/utils/publicPath'

import { rootRoute } from './Root'

export const indexRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/',
	component: Home
})

function Home() {
	const startGame = useGameStore(state => state.startGame)

	return (
		<>
			<Modal opened onClose={() => null} centered withCloseButton={false} overlayProps={{ blur: 3 }}>
				<Stack align='center' justify='center' p='xl'>
					<Title>Valley Guessr</Title>
					<Button component={Link} to='/play' fullWidth onClick={startGame}>
						Play
					</Button>
					<Button component={Link} to='/progress' fullWidth>
						Progress
					</Button>
				</Stack>
			</Modal>

			<Image
				src={`${publicPath}/map/pelican.png`}
				style={{ position: 'absolute', inset: 0, height: '100vh', overflow: 'hidden' }}
			/>
		</>
	)
}
