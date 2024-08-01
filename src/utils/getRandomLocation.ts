import { type LocationName } from '~/generated/LOCATION'
import { type MapName } from '~/generated/MAP'

export type Location = {
	image: LocationName
	map: MapName
	x: number
	y: number
}

const locations = new Set<Location>()
locations.add({ image: 'one', map: 'farm', x: 831, y: 94 })
locations.add({ image: 'two', map: 'farm', x: 1119, y: 195 })
locations.add({ image: 'three', map: 'farm', x: 520, y: 79 })

export default function getRandomLocation() {
	const random = ~~(Math.random() * locations.size)
	return [...locations][random]
}
