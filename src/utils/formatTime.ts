export function formatTime(time: number) {
	const hours = ~~((time / (1000 * 60 * 60)) % 24)
	const minutes = ~~((time / 1000 / 60) % 60)
	const seconds = ~~((time / 1000) % 60)
	const microseconds = time % 60

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
}
