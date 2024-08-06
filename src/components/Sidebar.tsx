import { ScrollArea, Stack, Title } from '@mantine/core'

import Location from './Location'
import Timer from './Timer'
import Totems from './Totems'

export default function Sidebar() {
	return (
		<ScrollArea scrollbars='y'>
			<Stack gap='md' mt='md' mb='md'>
				<Title ta='center'>Valley Guessr</Title>
				<Timer />
				<Location />
				<Totems />
			</Stack>
		</ScrollArea>
	)
}
