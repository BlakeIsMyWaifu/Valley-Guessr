import { Box } from '@mantine/core'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch'

type MapProps = {
	/** Must be a file from /public/maps/*.png */
	mapName: string
}

export default function Map({ mapName }: MapProps) {
	const src = `/public/maps/${mapName}.png`

	const [container, setContainer] = useState<HTMLDivElement | null>(null)

	const [containerWidth, setContainerWidth] = useState(0)
	const [containerHeight, setContainerHeight] = useState(0)

	const [imageNaturalWidth, setImageNaturalWidth] = useState(0)
	const [imageNaturalHeight, setImageNaturalHeight] = useState(0)

	const imageScale = useMemo(() => {
		if (!containerWidth || !containerHeight || !imageNaturalWidth || !imageNaturalHeight) return 0
		return Math.min(containerWidth / imageNaturalWidth, containerHeight / imageNaturalHeight)
	}, [containerWidth, containerHeight, imageNaturalWidth, imageNaturalHeight])

	const handleResize = useCallback(() => {
		if (container) {
			const rect = container.getBoundingClientRect()
			setContainerWidth(rect.width)
			setContainerHeight(rect.height)
		} else {
			setContainerWidth(0)
			setContainerHeight(0)
		}
	}, [container])

	useEffect(() => {
		handleResize()
		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [handleResize])

	useEffect(() => {
		const image = new Image()
		image.onload = () => {
			setImageNaturalWidth(image.naturalWidth)
			setImageNaturalHeight(image.naturalHeight)
		}
		image.src = src
	}, [src])

	return (
		<Box
			style={{
				width: '100vw',
				height: '100vh'
			}}
			ref={setContainer}
		>
			{imageScale > 0 && (
				<TransformWrapper
					initialScale={imageScale}
					minScale={imageScale}
					maxScale={imageScale * 8}
					centerOnInit
				>
					<TransformComponent
						wrapperStyle={{
							width: '100%',
							height: '100%'
						}}
					>
						<img alt={`Map of ${mapName}`} src={src} />
						<Pin x={640} y={0} width={32} height={32} />
					</TransformComponent>
				</TransformWrapper>
			)}
		</Box>
	)
}

type PinProps = {
	x: number
	y: number
	width: number
	height: number
}

function Pin({ x, y, width, height }: PinProps) {
	return (
		<Box
			style={{
				backgroundColor: 'green',
				opacity: '0.5',
				position: 'absolute',
				zIndex: 2,
				width: `${width}px`,
				height: `${height}px`,
				marginLeft: `${x}px`,
				marginTop: `${y}px`
			}}
		/>
	)
}
