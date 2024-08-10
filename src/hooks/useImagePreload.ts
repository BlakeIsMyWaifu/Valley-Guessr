import { useSet } from '@mantine/hooks'
import { useEffect, useState } from 'react'

function preloadImage<T extends string>(src: T, preloaded: Set<T>) {
	return new Promise((resolve, reject) => {
		const image = new Image()
		image.onload = () => {
			preloaded.add(src)
			resolve(image)
		}
		image.onerror = image.onabort = () => {
			reject(src)
		}
		image.src = src
	})
}

export default function useImagePreloader<T extends string>(imageList: T[], cancellable?: boolean) {
	const preloaded = useSet<T>()
	const [imagesPreloaded, setImagesPreloaded] = useState(false)

	useEffect(() => {
		let isCancelled = false
		setImagesPreloaded(false)

		async function effect() {
			if (isCancelled && cancellable) return

			const imagesPromiseList: Promise<unknown>[] = []
			for (const image of imageList) {
				if (preloaded.has(image)) return
				imagesPromiseList.push(preloadImage(image, preloaded))
			}

			await Promise.all(imagesPromiseList)

			if (isCancelled && cancellable) return

			setImagesPreloaded(true)
		}

		void effect()

		return () => {
			isCancelled = true
		}
	}, [cancellable, imageList, preloaded])

	return { imagesPreloaded, preloaded }
}
