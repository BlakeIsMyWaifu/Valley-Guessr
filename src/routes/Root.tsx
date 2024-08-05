import { createRootRoute, Outlet } from '@tanstack/react-router'

import Mantine from '~/components/Mantine.tsx'

export const rootRoute = createRootRoute({
	component: RootComponent
})

function RootComponent() {
	return (
		<Mantine>
			<Outlet />
		</Mantine>
	)
}
