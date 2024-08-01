import { Image, Stack, Title } from '@mantine/core'

import { useGameStore } from '~/state/useGameStore'

import Timer from './Timer'

export default function Sidebar() {
	const location = useGameStore(state => state.location)!

	return (
		<Stack gap='md'>
			<Title ta='center'>Valley Guessr</Title>
			<Timer />
			<Image src={`/location/${location.image}.png`} />
		</Stack>
	)
}
