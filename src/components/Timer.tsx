import { Text } from '@mantine/core'
import { useInterval } from '@mantine/hooks'
import { useState } from 'react'

import { useMountEffect } from '~/hooks/useMountEffect'
import { useGameStore } from '~/state/useGameStore'
import { formatTime } from '~/utils/formatTime'

export default function Timer() {
	const startTime = useGameStore(state => state.startTime)

	const [time, setTime] = useState('')

	const { start, stop } = useInterval(() => {
		const currentTime = +new Date()
		const difference = currentTime - startTime
		setTime(() => formatTime(difference))
	}, 50)

	useMountEffect(() => {
		start()
		return stop
	})

	return (
		<Text ta='center' size='xl'>
			Time: {time}
		</Text>
	)
}
