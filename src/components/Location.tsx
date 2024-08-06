import { useEffect, useRef } from 'react'

import { useGameStore } from '~/state/useGameStore'
import { publicPath } from '~/utils/publicPath'

export default function Location() {
	const {
		map,
		cords: [x, y],
		size = 32
	} = useGameStore(state => state.location)!

	const canvasRef = useRef<HTMLCanvasElement>(null)

	const CANVAS_SIZE = 300

	useEffect(() => {
		const canvas = canvasRef.current
		if (!canvas) return

		const context = canvas.getContext('2d')!

		const img = new Image()
		img.src = `${publicPath}/map/${map}.png`
		img.onload = () => {
			context.drawImage(img, x, y, size, size, 0, 0, canvas.width, canvas.height)
		}
	}, [map, size, x, y])

	return <canvas ref={canvasRef} width={CANVAS_SIZE} height={CANVAS_SIZE} />
}
