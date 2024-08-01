import { Image, ScrollArea, Stack, Title } from '@mantine/core'

import { useGameStore } from '~/state/useGameStore'

import Timer from './Timer'
import Totems from './Totems'

export default function Sidebar() {
	const location = useGameStore(state => state.location)!

	return (
		<ScrollArea>
			<Stack gap='md' mt='md' mb='md'>
				<Title ta='center'>Valley Guessr</Title>
				<Timer />
				<Image src={`/location/${location.image}.png`} />
				<Totems />
			</Stack>
		</ScrollArea>
	)
}
