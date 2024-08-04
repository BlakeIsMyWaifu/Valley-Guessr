import { type MapName } from '~/generated/MAP'
import { typedObject } from '~/utils/typedObject'

export type ValleyMap = {
	name: MapName
	links: {
		name: MapName
		cords: [x: number, y: number]
		size: [width: number, height: number]
	}[]
}

const valleyMapsData: Record<MapName, ValleyMap['links']> = {
	adventureGuild: [{ name: 'mountain', cords: [96, 296], size: [16, 24] }],

	backwoods: [
		{ name: 'bus', cords: [768, 457], size: [32, 64] },
		{ name: 'busTunnel', cords: [358, 419], size: [26, 115] },
		{ name: 'farm', cords: [206, 608], size: [52, 32] },
		{ name: 'mountain', cords: [768, 175], size: [32, 96] }
	],

	beach: [
		{ name: 'elliot', cords: [784, 141], size: [16, 32] },
		{ name: 'fishShop', cords: [481, 511], size: [15, 33] },
		{ name: 'pelican', cords: [608, 0], size: [32, 32] }
	],

	blacksmith: [{ name: 'pelican', cords: [80, 296], size: [16, 16] }],

	boat: [
		{ name: 'fishShop', cords: [96, 180], size: [16, 16] },
		{ name: 'islandResort', cords: [96, 120], size: [16, 21] }
	],

	bus: [
		{ name: 'backwoods', cords: [0, 96], size: [200, 64] },
		{ name: 'desert', cords: [353, 124], size: [14, 36] },
		{ name: 'farm', cords: [0, 348], size: [192, 64] },
		{ name: 'pelican', cords: [620, 348], size: [128, 64] }
	],

	busTunnel: [{ name: 'backwoods', cords: [608, 111], size: [32, 82] }],

	caroline: [{ name: 'generalStore', cords: [80, 200], size: [16, 16] }],

	carpenter: [
		{ name: 'mountain', cords: [48, 136], size: [16, 32] },
		{ name: 'mountain', cords: [96, 376], size: [16, 24] },
		{ name: 'sebastian', cords: [192, 330], size: [32, 24] }
	],

	casino: [{ name: 'oasis', cords: [128, 192], size: [16, 16] }],

	cindersap: [
		{ name: 'farm', cords: [1068, 0], size: [102, 32] },
		{ name: 'leah', cords: [1660, 492], size: [24, 36] },
		{ name: 'masteryCave', cords: [1616, 1120], size: [18, 42] },
		{ name: 'pelican', cords: [1888, 365], size: [32, 80] },
		{ name: 'ranch', cords: [1436, 221], size: [24, 36] },
		{ name: 'secretWoods', cords: [0, 91], size: [16, 27] },
		{ name: 'sewer', cords: [1488, 1552], size: [48, 48] },
		{ name: 'wizard', cords: [73, 387], size: [32, 48] }
	],

	clinic: [
		{ name: 'harvey', cords: [144, 31], size: [32, 32] },
		{ name: 'pelican', cords: [160, 296], size: [16, 24] }
	],

	communityCenter: [{ name: 'pelican', cords: [512, 344], size: [32, 32] }],

	crystalPuzzle: [{ name: 'islandFarm', cords: [94, 160], size: [24, 16] }],

	desert: [
		{ name: 'bus', cords: [289, 412], size: [14, 36] },
		{ name: 'oasis', cords: [96, 800], size: [16, 31] },
		{ name: 'skullCavern', cords: [125, 64], size: [22, 38] }
	],

	elliot: [{ name: 'beach', cords: [48, 140], size: [16, 20] }],

	farm: [
		{ name: 'backwoods', cords: [640, 0], size: [32, 32] },
		{ name: 'bus', cords: [1248, 236], size: [32, 64] },
		{ name: 'cindersap', cords: [638, 1008], size: [32, 32] },
		{ name: 'greenhouse', cords: [446, 229], size: [20, 27] },
		{ name: 'home', cords: [1024, 210], size: [16, 31] },
		{ name: 'mushroomCave', cords: [540, 78], size: [24, 48] }
	],

	fieldOffice: [{ name: 'islandNorth', cords: [64, 155], size: [16, 8] }],

	fishShop: [
		{ name: 'beach', cords: [80, 136], size: [16, 24] },
		{ name: 'boat', cords: [64, 32], size: [16, 32] }
	],

	generalStore: [
		{ name: 'caroline', cords: [512, 32], size: [16, 32] },
		{ name: 'pelican', cords: [96, 440], size: [16, 32] }
	],

	gourmandFrog: [{ name: 'islandFarm', cords: [57, 165], size: [45, 12] }],

	greenhouse: [{ name: 'farm', cords: [160, 360], size: [16, 16] }],

	harvey: [{ name: 'clinic', cords: [96, 184], size: [16, 24] }],

	home: [{ name: 'farm', cords: [48, 169], size: [16, 16] }],

	islandEast: [
		{ name: 'islandResort', cords: [0, 714], size: [24, 64] },
		{ name: 'leo', cords: [353, 143], size: [15, 32] }
	],

	islandFarm: [
		{ name: 'crystalPuzzle', cords: [976, 49], size: [16, 40] },
		{ name: 'gourmandFrog', cords: [1536, 496], size: [16, 40] },
		{ name: 'islandHome', cords: [1232, 608], size: [16, 32] },
		{ name: 'islandResort', cords: [1655, 624], size: [32, 56] },
		{ name: 'walnutRoom', cords: [320, 329], size: [16, 39] }
	],

	islandHome: [{ name: 'islandFarm', cords: [224, 256], size: [16, 24] }],

	islandNorth: [
		{ name: 'fieldOffice', cords: [738, 723], size: [16, 28] },
		{ name: 'islandResort', cords: [558, 1408], size: [50, 32] },
		{ name: 'volcano', cords: [622, 317], size: [69, 36] },
		{ name: 'volcano', cords: [192, 464], size: [16, 36] }
	],

	islandResort: [
		{ name: 'boat', cords: [300, 688], size: [28, 16] },
		{ name: 'islandEast', cords: [487, 172], size: [64, 42] },
		{ name: 'islandFarm', cords: [0, 155], size: [24, 60] },
		{ name: 'islandNorth', cords: [272, 0], size: [48, 32] },
		{ name: 'islandSouthEast', cords: [656, 443], size: [32, 48] }
	],

	islandSouthEast: [
		{ name: 'islandResort', cords: [0, 445], size: [24, 46] },
		{ name: 'pirateCove', cords: [464, 289], size: [21, 30] }
	],

	leah: [{ name: 'cindersap', cords: [112, 136], size: [16, 32] }],

	leo: [{ name: 'islandEast', cords: [112, 191], size: [16, 16] }],

	masteryCave: [{ name: 'cindersap', cords: [105, 165], size: [30, 32] }],

	mayorManor: [{ name: 'pelican', cords: [64, 168], size: [32, 24] }],

	mine: [
		{ name: 'mountain', cords: [282, 202], size: [26, 26] },
		{ name: 'mountain', cords: [1065, 245], size: [30, 32] }
	],

	mountain: [
		{ name: 'adventureGuild', cords: [1215, 109], size: [18, 33] },
		{ name: 'backwoods', cords: [0, 188], size: [32, 42] },
		{ name: 'carpenter', cords: [128, 304], size: [16, 29] },
		{ name: 'carpenter', cords: [192, 384], size: [16, 29] },
		{ name: 'mine', cords: [1648, 240], size: [16, 36] },
		{ name: 'mine', cords: [864, 60], size: [16, 32] },
		{ name: 'pelican', cords: [220, 624], size: [78, 32] },
		{ name: 'railroad', cords: [139, 0], size: [42, 24] },
		{ name: 'tent', cords: [464, 94], size: [16, 32] }
	],

	museum: [{ name: 'pelican', cords: [48, 216], size: [16, 32] }],

	mushroomCave: [{ name: 'farm', cords: [123, 171], size: [24, 24] }],

	mutantBugLair: [{ name: 'sewer', cords: [208, 836], size: [64, 16] }],

	oasis: [
		{ name: 'casino', cords: [272, 16], size: [16, 16] },
		{ name: 'desert', cords: [64, 136], size: [16, 24] }
	],

	oneRiverRoad: [{ name: 'pelican', cords: [144, 376], size: [16, 24] }],

	oneWillowLane: [{ name: 'pelican', cords: [64, 344], size: [16, 32] }],

	pelican: [
		{ name: 'beach', cords: [847, 1728], size: [50, 32] },
		{ name: 'blacksmith', cords: [1505, 1282], size: [14, 30] },
		{ name: 'bus', cords: [0, 845], size: [32, 48] },
		{ name: 'cindersap', cords: [0, 1421], size: [32, 64] },
		{ name: 'clinic', cords: [575, 864], size: [19, 32] },
		{ name: 'communityCenter', cords: [834, 288], size: [30, 34] },
		{ name: 'generalStore', cords: [689, 881], size: [31, 31] },
		{ name: 'mayorManor', cords: [928, 1345], size: [32, 30] },
		{ name: 'mountain', cords: [1259, 0], size: [89, 32] },
		{ name: 'museum', cords: [1615, 1409], size: [18, 31] },
		{ name: 'oneRiverRoad', cords: [913, 992], size: [15, 31] },
		{ name: 'oneWillowLane', cords: [161, 1344], size: [15, 31] },
		{ name: 'saloon', cords: [720, 1104], size: [16, 32] },
		{ name: 'sewer', cords: [545, 1520], size: [31, 32] },
		{ name: 'trailer', cords: [1152, 1072], size: [17, 28] },
		{ name: 'twoWillowLane', cords: [321, 1393], size: [15, 30] }
	],

	pirateCove: [{ name: 'islandSouthEast', cords: [31, 114], size: [16, 28] }],

	railroad: [
		{ name: 'mountain', cords: [416, 528], size: [80, 32] },
		{ name: 'spaLobby', cords: [160, 446], size: [16, 32] },
		{ name: 'witchLairEntrance', cords: [864, 98], size: [16, 46] }
	],

	ranch: [{ name: 'cindersap', cords: [208, 296], size: [16, 24] }],

	saloon: [{ name: 'pelican', cords: [224, 376], size: [16, 24] }],

	sebastian: [{ name: 'carpenter', cords: [16, 0], size: [16, 16] }],

	secretWoods: [{ name: 'cindersap', cords: [928, 235], size: [32, 32] }],

	sewer: [
		{ name: 'cindersap', cords: [48, 757], size: [16, 16] },
		{ name: 'mutantBugLair', cords: [46, 267], size: [20, 48] },
		{ name: 'pelican', cords: [258, 135], size: [12, 40] }
	],

	skullCavern: [{ name: 'desert', cords: [108, 121], size: [24, 12] }],

	spaLobby: [
		{ name: 'railroad', cords: [80, 137], size: [16, 16] },
		{ name: 'spaMen', cords: [112, 32], size: [16, 32] },
		{ name: 'spaWomen', cords: [32, 32], size: [16, 32] }
	],

	spaMen: [
		{ name: 'spaLobby', cords: [48, 425], size: [16, 16] },
		{ name: 'spaPool', cords: [240, 425], size: [16, 16] }
	],

	spaPool: [
		{ name: 'spaMen', cords: [318, 16], size: [52, 32] },
		{ name: 'spaWomen', cords: [78, 16], size: [52, 32] }
	],

	spaWomen: [
		{ name: 'spaLobby', cords: [208, 425], size: [16, 16] },
		{ name: 'spaPool', cords: [32, 425], size: [16, 16] }
	],

	tent: [{ name: 'mountain', cords: [32, 80], size: [16, 16] }],

	trailer: [{ name: 'pelican', cords: [192, 136], size: [16, 32] }],

	twoWillowLane: [{ name: 'pelican', cords: [32, 376], size: [16, 16] }],

	volcano: [
		{ name: 'islandNorth', cords: [495, 836], size: [18, 36] },
		{ name: 'islandNorth', cords: [94, 768], size: [20, 32] },
		{ name: 'volcanoTop', cords: [702, 762], size: [20, 52] }
	],

	volcanoTop: [{ name: 'volcano', cords: [176, 554], size: [16, 28] }],

	walnutRoom: [{ name: 'islandFarm', cords: [112, 112], size: [16, 16] }],

	witchHut: [
		{ name: 'witchLairEntrance', cords: [112, 233], size: [16, 16] },
		{ name: 'wizardBasement', cords: [176, 176], size: [16, 16] }
	],

	witchLairEntrance: [
		{ name: 'railroad', cords: [320, 672], size: [16, 16] },
		{ name: 'witchHut', cords: [319, 304], size: [18, 32] }
	],

	wizard: [
		{ name: 'cindersap', cords: [128, 376], size: [16, 24] },
		{ name: 'wizardBasement', cords: [64, 64], size: [16, 16] }
	],

	wizardBasement: [
		{ name: 'witchHut', cords: [32, 80], size: [16, 16] },
		{ name: 'wizard', cords: [66, 16], size: [12, 48] }
	]
}

const valleyMapMap = new Map<MapName, ValleyMap>()
typedObject.entries(valleyMapsData).forEach(([name, links]) => valleyMapMap.set(name, { name, links }))

export function getValleyMapData(mapName: MapName) {
	if (!valleyMapMap.has(mapName)) throw Error(`Missing Map Data: ${mapName}`)
	return valleyMapMap.get(mapName)!
}
