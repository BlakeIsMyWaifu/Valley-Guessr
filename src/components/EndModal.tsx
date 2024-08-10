import { Button, Group, Modal, Stack, Text, Title } from '@mantine/core'
import { Link } from '@tanstack/react-router'

import { useGameStore } from '~/state/useGameStore'
import { formatTime } from '~/utils/formatTime'

export default function EndModal() {
	const finishTime = useGameStore(state => state.finishTime)
	const startGame = useGameStore(state => state.startGame)

	return (
		<Modal opened={!!finishTime} onClose={() => null} withCloseButton={false}>
			<Stack align='center'>
				<Title order={2}>Congratulations</Title>
				<Text>You finished with a time of {formatTime(finishTime)}</Text>
				<Group>
					<Button component={Link} to='/' variant='default'>
						Home
					</Button>
					<Button onClick={startGame}>Play Again</Button>
				</Group>
			</Stack>
		</Modal>
	)
}
