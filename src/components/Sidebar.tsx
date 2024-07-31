import { Image, Stack, Title } from '@mantine/core'
import { type Location } from 'src/utils/getRandomLocation'

type SidebarProps = {
	location: Location
}

export default function Sidebar({ location }: SidebarProps) {
	return (
		<Stack gap='md'>
			<Title style={{ textAlign: 'center' }}>Valley Guessr</Title>
			<Image src={`/locations/${location.image}.png`} />
		</Stack>
	)
}
