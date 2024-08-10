import { createRootRoute, Outlet } from '@tanstack/react-router'

import Mantine from '~/components/Mantine.tsx'
import useMountEffect from '~/hooks/useMountEffect'
import { useProgressStore } from '~/state/useProgressStore'

export const rootRoute = createRootRoute({
	component: RootComponent
})

function RootComponent() {
	const updateIncomplete = useProgressStore(state => state.updateIncomplete)

	useMountEffect(updateIncomplete)

	return (
		<Mantine>
			<Outlet />
		</Mantine>
	)
}
