import { type MapName } from '~/generated/MAP'
import { typedObject } from '~/utils/typedObject'

export type ValleyMap = {
	name: MapName
	links: {
		name: MapName
		cords: [x: number, y: number]
		/** Defaults to [32, 32] */
		size?: [width: number, height: number]
	}[]
}

const valleyMapsData: Record<MapName, ValleyMap['links']> = {
	backwoods: [
		{ name: 'farm', cords: [206, 608], size: [52, 32] },
		{ name: 'mountain', cords: [768, 175], size: [32, 96] }
	],

	beach: [{ name: 'pelican', cords: [608, 0] }],

	bus: [
		{ name: 'farm', cords: [0, 348], size: [192, 64] },
		{ name: 'pelican', cords: [620, 348], size: [128, 64] },
		{ name: 'desert', cords: [344, 116], size: [32, 48] }
	],

	cindersap: [
		{ name: 'farm', cords: [1068, 0], size: [102, 32] },
		{ name: 'pelican', cords: [1888, 365], size: [32, 80] }
	],

	desert: [{ name: 'bus', cords: [280, 404], size: [32, 48] }],

	farm: [
		{ name: 'backwoods', cords: [640, 0] },
		{ name: 'home', cords: [1016, 201], size: [32, 48] },
		{ name: 'bus', cords: [1248, 236], size: [32, 64] },
		{ name: 'cindersap', cords: [638, 1008] }
	],

	home: [{ name: 'farm', cords: [48, 169], size: [16, 16] }],

	mine: [{ name: 'mountain', cords: [282, 202], size: [26, 26] }],

	mountain: [
		{ name: 'backwoods', cords: [0, 188], size: [32, 42] },
		{ name: 'pelican', cords: [220, 624], size: [78, 32] },
		{ name: 'mine', cords: [864, 60], size: [16, 32] }
	],

	pelican: [
		{ name: 'bus', cords: [0, 845], size: [32, 48] },
		{ name: 'mountain', cords: [1259, 0], size: [89, 32] },
		{ name: 'beach', cords: [847, 1728], size: [50, 32] }
	]
}

const valleyMapMap = new Map<MapName, ValleyMap>()
typedObject.entries(valleyMapsData).forEach(([name, links]) => valleyMapMap.set(name, { name, links }))

export function getValleyMapData(mapName: MapName) {
	if (!valleyMapMap.has(mapName)) throw Error(`Missing Map Data: ${mapName}`)
	return valleyMapMap.get(mapName)!
}
