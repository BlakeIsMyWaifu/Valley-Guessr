import { Box, Button, Stack, Title } from '@mantine/core'
import type { MetaFunction } from '@remix-run/node'
import { Link } from '@remix-run/react'

export const meta: MetaFunction = () => {
	return [{ title: 'Valley Guessr' }, { name: '_', content: '_' }]
}

export default function Index() {
	return (
		<Box component={Stack} align='center' justify='center' style={{ height: '100vh' }}>
			<Title>Valley Guessr</Title>
			<Button component={Link} to='/play'>
				Play
			</Button>
		</Box>
	)
}
