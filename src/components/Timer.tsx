import { Text } from '@mantine/core'
import { useInterval } from '@mantine/hooks'
import { useState } from 'react'

import { useMountEffect } from '~/hooks/useMountEffect'
import { useGameStore } from '~/state/useGameStore'

export default function Timer() {
	const startTime = useGameStore(state => state.startTime)

	const [time, setTime] = useState('')

	const { start, stop } = useInterval(() => {
		const currentTime = +new Date()
		const difference = currentTime - startTime
		setTime(() => {
			const hours = ~~((difference / (1000 * 60 * 60)) % 24)
			const minutes = ~~((difference / 1000 / 60) % 60)
			const seconds = ~~((difference / 1000) % 60)
			const microseconds = difference % 60
			return [hours, minutes, seconds, microseconds]
				.map(value => value.toString().padStart(2, '0'))
				.reduce(
					(accumulator, currentValue) =>
						currentValue === '00' && !accumulator
							? ''
							: accumulator
								? `${accumulator}:${currentValue}`
								: currentValue,
					''
				)
		})
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
