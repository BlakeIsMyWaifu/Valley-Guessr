import { Image, Stack, Title } from '@mantine/core'

import { useGameStore } from '~/state/useGameStore'

export default function Sidebar() {
	const location = useGameStore(state => state.location)!

	return (
		<Stack gap='md'>
			<Title style={{ textAlign: 'center' }}>Valley Guessr</Title>
			<Image src={`/location/${location.image}.png`} />
		</Stack>
	)
}
