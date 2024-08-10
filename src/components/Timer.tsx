import { Text } from '@mantine/core'
import { useInterval } from '@mantine/hooks'
import { useEffect, useState } from 'react'

import { useGameStore } from '~/state/useGameStore'
import { formatTime } from '~/utils/formatTime'

export default function Timer() {
	const startTime = useGameStore(state => state.startTime)
	const finishTime = useGameStore(state => state.finishTime)

	const [time, setTime] = useState('')

	const { start, stop } = useInterval(
		() => {
			const currentTime = +new Date()
			const difference = currentTime - startTime
			setTime(() => formatTime(difference))
		},
		50,
		{ autoInvoke: true }
	)

	useEffect(() => {
		if (finishTime) {
			stop()
			setTime(formatTime(finishTime))
		} else {
			start()
		}
	}, [finishTime, start, stop])

	return (
		<Text ta='center' size='xl'>
			Time: {time}
		</Text>
	)
}
