import { getValleyMapData } from '../src/data/maps'
import { mapList, type MapName } from '../src/generated/MAP'

/**
 * If a map is missing a link back to it, it will fail here
 * The maps that needs links added are in brackets
 *
 * It doesn't check for the correct amount of backlinks
 * For example the mountain goes to the in two different places
 */

mapList.forEach(mapName => {
	const mapData = getValleyMapData(mapName)

	const noBacklink: MapName[] = []
	const hasAllBacklinks = mapData.links.every(({ name: linkName }) => {
		const linkedMap = getValleyMapData(linkName)
		const includesBacklinks = linkedMap.links.map(link => link.name).includes(mapName)
		if (!includesBacklinks) {
			noBacklink.push(linkName)
		}
		return includesBacklinks
	})

	console.log(hasAllBacklinks ? `✅ ${mapName}` : `❌ ${mapName} (${noBacklink.join(', ')})`)
})
