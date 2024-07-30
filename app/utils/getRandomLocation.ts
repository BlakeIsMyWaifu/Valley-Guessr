export type Location = {
	image: string
	map: string
	x: number
	y: number
}

const locations = new Set<Location>()
locations.add({ image: 'one', map: 'farm', x: 0, y: 0 })
locations.add({ image: 'two', map: 'farm', x: 0, y: 0 })
locations.add({ image: 'three', map: 'farm', x: 0, y: 0 })

export default function getRandomLocation() {
	const random = ~~(Math.random() * locations.size)
	return [...locations][random]
}
