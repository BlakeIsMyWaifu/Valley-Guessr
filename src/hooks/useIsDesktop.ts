import { useViewportSize } from '@mantine/hooks'

export default function useIsDesktop() {
	const { width } = useViewportSize()
	return width >= 768
}
