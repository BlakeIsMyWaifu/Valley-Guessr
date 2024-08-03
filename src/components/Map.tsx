import { Box, UnstyledButton } from '@mantine/core'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { TransformComponent, TransformWrapper, useControls } from 'react-zoom-pan-pinch'

import { getValleyMapData, type ValleyMap } from '~/data/maps'
import { useGameStore } from '~/state/useGameStore'

export default function Map() {
	const currentMap = useGameStore(state => state.currentMap)

	const src = `/map/${currentMap}.png`

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
				width: '100%',
				height: '100vh'
			}}
			ref={setContainer}
		>
			{imageScale > 0 && (
				<TransformWrapper
					initialScale={imageScale}
					minScale={imageScale}
					maxScale={imageScale * 8}
					doubleClick={{ disabled: true }}
					centerOnInit
				>
					<TransformComponent
						wrapperStyle={{
							width: '100%',
							height: '100%'
						}}
					>
						<img alt={`Map of ${currentMap}`} src={src} />
						<CorrectLocation />
						<MoveAreas imageScale={imageScale} />
					</TransformComponent>
				</TransformWrapper>
			)}
		</Box>
	)
}

type MoveAreasProps = {
	imageScale: number
}

function MoveAreas({ imageScale }: MoveAreasProps) {
	const currentMap = useGameStore(state => state.currentMap)
	const mapData = getValleyMapData(currentMap)

	const { centerView } = useControls()

	useEffect(() => {
		centerView(imageScale)
	}, [centerView, imageScale])

	return mapData.links.map(link => {
		return <MoveArea key={link.name + link.cords[0]} link={link} />
	})
}

type MoveAreaProps = {
	link: ValleyMap['links'][number]
}

function MoveArea({
	link: {
		name,
		cords: [x, y],
		size: [width, height]
	}
}: MoveAreaProps) {
	const changeMap = useGameStore(state => state.changeMap)

	return (
		<UnstyledButton
			style={{
				position: 'absolute',
				border: 'black solid 1px',
				zIndex: 2,
				width: `${width}px`,
				height: `${height}px`,
				marginLeft: `${x}px`,
				marginTop: `${y}px`
			}}
			onClick={() => {
				changeMap(name)
			}}
		>
			<Box
				style={{
					position: 'absolute',
					inset: 0,
					backgroundColor: 'green',
					opacity: '0.5'
				}}
			/>
		</UnstyledButton>
	)
}

function CorrectLocation() {
	const location = useGameStore(state => state.location)!
	const finishGame = useGameStore(state => state.finishGame)

	return (
		<Box
			style={{
				position: 'absolute',
				zIndex: 2,
				width: '64px',
				height: '64px',
				marginLeft: `${location.x}px`,
				marginTop: `${location.y}px`
			}}
			onDoubleClick={finishGame}
		/>
	)
}
