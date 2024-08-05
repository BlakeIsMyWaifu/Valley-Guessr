import { Image, ScrollArea, Stack, Title } from '@mantine/core'

import { useGameStore } from '~/state/useGameStore'
import { publicPath } from '~/utils/publicPath'

import Timer from './Timer'
import Totems from './Totems'

export default function Sidebar() {
	const location = useGameStore(state => state.location)!

	return (
		<ScrollArea>
			<Stack gap='md' mt='md' mb='md'>
				<Title ta='center'>Valley Guessr</Title>
				<Timer />
				<Image src={`${publicPath}/location/${location.name}.png`} />
				<Totems />
			</Stack>
		</ScrollArea>
	)
}
