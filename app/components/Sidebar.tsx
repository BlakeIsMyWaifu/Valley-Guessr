import { AppShell, Image, Stack, Title } from '@mantine/core'
import { type ReactNode } from 'react'

import { type Location } from '~/utils/getRandomLocation'

type SidebarProps = {
	location: Location
	mainSection: ReactNode
}

export default function Sidebar({ location, mainSection }: SidebarProps) {
	return (
		<AppShell navbar={{ width: 300, breakpoint: 'sm' }}>
			<AppShell.Navbar>
				<Stack gap='md'>
					<Title style={{ textAlign: 'center' }}>Valley Guessr</Title>
					<Image src={`/locations/${location.image}.png`} />
				</Stack>
			</AppShell.Navbar>
			<AppShell.Main>{mainSection}</AppShell.Main>
		</AppShell>
	)
}
