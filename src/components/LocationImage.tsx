import { useEffect, useRef } from 'react'

import { type Location } from '~/data/locations'
import { useGameStore } from '~/state/useGameStore'
import { publicPath } from '~/utils/publicPath'

type LocationImageProps = {
	location?: Location
	canvasSize?: number
}

export default function LocationImage({ location, canvasSize = 300 }: LocationImageProps) {
	const gameLocation = useGameStore(state => state.location)!

	const {
		map,
		cords: [x, y],
		size
	} = location ?? gameLocation ?? { map: 'farm', cords: [-1, -1], size: 0 }

	const canvasRef = useRef<HTMLCanvasElement>(null)

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

	return size ? <canvas ref={canvasRef} width={canvasSize} height={canvasSize} /> : null
}
