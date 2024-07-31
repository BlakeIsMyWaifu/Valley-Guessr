import { Box, Button, Stack, Title } from '@mantine/core'
import { Link } from '@swan-io/chicane'

import Router from './router'

export default function Home() {
	return (
		<Box component={Stack} align='center' justify='center' style={{ height: '100vh' }}>
			<Title>Valley Guessr</Title>
			<Button component={Link} to={Router.play()}>
				Play
			</Button>
		</Box>
	)
}
