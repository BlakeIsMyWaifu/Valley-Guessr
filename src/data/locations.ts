import { type LocationName } from '~/generated/LOCATION'
import { type MapName } from '~/generated/MAP'
import { typedObject } from '~/utils/typedObject'

export type Location = {
	name: LocationName
	map: MapName
	cords: [x: number, y: number]
	/** Defaults to 32x32, Should be minimum of 32 */
	size?: number
}

const locationData: Record<LocationName, Omit<Location, 'name'>> = {
	adventureSword: { map: 'adventureGuild', cords: [103, 154] },
	adventureMap: { map: 'adventureGuild', cords: [63, 125] },
	adventureRug: { map: 'adventureGuild', cords: [74, 226], size: 48 },
	adventureBoots: { map: 'adventureGuild', cords: [41, 198] },

	backwoodsTree: { map: 'backwoods', cords: [456, 160], size: 128 },

	beachTotem: { map: 'beach', cords: [310, 29], size: 36 },
	beachTree: { map: 'beach', cords: [1332, 34], size: 56 },
	beachPool: { map: 'beach', cords: [1312, 309] },
	beachBoat: { map: 'beach', cords: [691, 143], size: 44 },

	clintTable: { map: 'blacksmith', cords: [30, 43], size: 36 },
	blacksmithTools: { map: 'blacksmith', cords: [87, 125] },

	boatChimney: { map: 'boat', cords: [129, 28] },
	boatTicket: { map: 'boat', cords: [56, 129] },

	busSign: { map: 'bus', cords: [323, 334], size: 36 },

	tunnelPanel: { map: 'busTunnel', cords: [264, 72] },
	tunnelLight: { map: 'busTunnel', cords: [152, 63] },

	carolinePool: { map: 'caroline', cords: [32, 50], size: 48 },
	carolinePlants: { map: 'caroline', cords: [80, 37], size: 48 },

	carpenterSupplies: { map: 'carpenter', cords: [152, 274], size: 48 },
	demetriusPeriodicTable: { map: 'carpenter', cords: [336, 229], size: 33 },
	maruWall: { map: 'carpenter', cords: [119, 12] },
	maruRobotOne: { map: 'carpenter', cords: [72, 55] },
	maruRobotTwo: { map: 'carpenter', cords: [88, 87] },
	robinBookcase: { map: 'carpenter', cords: [240, 24], size: 64 },
	robinKitchen: { map: 'carpenter', cords: [532, 96], size: 64 },

	casinoBear: { map: 'casino', cords: [40, 35], size: 48 },
	casinoShop: { map: 'casino', cords: [384, 16], size: 49 },
	casinoGuy: { map: 'casino', cords: [280, 134], size: 32 },

	cindersapWaterfall: { map: 'cindersap', cords: [790, 1570], size: 96 },
	cindersapFlowerDance: { map: 'cindersap', cords: [12, 1170], size: 72 },

	clinicPoster: { map: 'clinic', cords: [16, 17], size: 48 },

	ccPantry: { map: 'communityCenter', cords: [208, 31], size: 48 },
	ccLoom: { map: 'communityCenter', cords: [142, 419] },
	ccEasel: { map: 'communityCenter', cords: [248, 272] },
	ccAnchor: { map: 'communityCenter', cords: [616, 80] },
	ccCoal: { map: 'communityCenter', cords: [1024, 195] },

	crystalGorilla: { map: 'crystalPuzzle', cords: [89, 16] },
	crystalRed: { map: 'crystalPuzzle', cords: [88, 89] },

	desertPots: { map: 'desert', cords: [581, 309] },
	desertSkull: { map: 'desert', cords: [144, 560] },

	elliotPiano: { map: 'elliot', cords: [120, 32], size: 48 },

	// farm

	fieldBoard: { map: 'fieldOffice', cords: [62, 30], size: 36 },

	willyTable: { map: 'fishShop', cords: [128, 47] },

	abigailPainting: { map: 'generalStore', cords: [176, 16] },
	abigailPosters: { map: 'generalStore', cords: [32, 16] },
	pierreTable: { map: 'generalStore', cords: [252, 191] },
	generalDropOff: { map: 'generalStore', cords: [288, 431] },
	generalPoster: { map: 'generalStore', cords: [96, 224] },
	generalChurch: { map: 'generalStore', cords: [576, 241] },

	frogFrog: { map: 'gourmandFrog', cords: [64, 45] },

	greenPlant: { map: 'greenhouse', cords: [240, 94] },

	harveyTable: { map: 'harvey', cords: [64, 41] },
	harveyPlanes: { map: 'harvey', cords: [96, 18] },

	// home

	leoFront: { map: 'islandEast', cords: [328, 146] },
	islandGorillaStand: { map: 'islandEast', cords: [240, 384], size: 48 },

	islandBirdieDoor: { map: 'islandFarm', cords: [304, 865] },
	islandPickle: { map: 'islandFarm', cords: [648, 1367] },

	islandHomeHeating: { map: 'islandHome', cords: [192, 109] },

	islandFossil: { map: 'islandNorth', cords: [127, 698] },
	islandJojaBird: { map: 'islandNorth', cords: [216, 187] },
	islandTrader: { map: 'islandNorth', cords: [544, 1113] },

	islandResort: { map: 'islandResort', cords: [339, 318] },

	islandCove: { map: 'islandSouthEast', cords: [608, 389] },

	leahSculpture: { map: 'leah', cords: [16, 97] },

	leoPlant: { map: 'leo', cords: [129, 79], size: 64 },

	masteryStump: { map: 'masteryCave', cords: [63, 80] },
	masteryPillar: { map: 'masteryCave', cords: [104, 117] },
	masteryPaper: { map: 'masteryCave', cords: [152, 135] },

	mayorTable: { map: 'mayorManor', cords: [32, 63] },

	mineQuarry: { map: 'mine', cords: [1080, 146] },

	maruTelescope: { map: 'mountain', cords: [105, 352] },
	bridgeBones: { map: 'mountain', cords: [1571, 470] },
	quarryBarrel: { map: 'mountain', cords: [1941, 160] },
	mountainWaterLog: { map: 'mountain', cords: [1072, 511], size: 64 },

	museumTable: { map: 'museum', cords: [255, 143], size: 64 },
	museumBear: { map: 'museum', cords: [312, 135] },

	cavePot: { map: 'mushroomCave', cords: [120, 100] },

	mutantEgg: { map: 'mutantBugLair', cords: [385, 767] },
	mutantRock: { map: 'mutantBugLair', cords: [792, 113] },

	oasisCamera: { map: 'oasis', cords: [240, 14] },
	oasisPalmTree: { map: 'oasis', cords: [87, 16] },

	alexPoster: { map: 'oneRiverRoad', cords: [247, 13] },
	alexWeight: { map: 'oneRiverRoad', cords: [215, 55] },
	georgeTV: { map: 'oneRiverRoad', cords: [239, 306] },

	vincentToys: { map: 'oneWillowLane', cords: [177, 336] },
	samDrums: { map: 'oneWillowLane', cords: [240, 255] },

	pelicanPlaygroundTop: { map: 'pelican', cords: [304, 135] },
	pelicanPlayground: { map: 'pelican', cords: [305, 184] },

	pelicanShovel: { map: 'pelican', cords: [1065, 299] },
	pelicanIceCream: { map: 'pelican', cords: [1399, 1448] },
	pelicanGrave: { map: 'pelican', cords: [744, 1363] },
	pelicanMuseum: { map: 'pelican', cords: [1608, 1378] },

	pirateTable: { map: 'pirateCove', cords: [463, 65] },

	railBin: { map: 'railroad', cords: [448, 128] },
	railSpaWater: { map: 'railroad', cords: [229, 434], size: 40 },
	railBox: { map: 'railroad', cords: [504, 161] },

	shaneStuff: { map: 'ranch', cords: [336, 79] },
	jasDolls: { map: 'ranch', cords: [96, 10] },
	marnieMicrowave: { map: 'ranch', cords: [377, 198] },

	saloonDoors: { map: 'saloon', cords: [48, 234] },
	saloonBear: { map: 'saloon', cords: [399, 224] },

	sebastianTable: { map: 'sebastian', cords: [34, 105], size: 60 },

	secretPillar: { map: 'secretWoods', cords: [72, 126] },

	sewerStatue: { map: 'sewer', cords: [112, 303] },

	skullSkull: { map: 'skullCavern', cords: [178, 27], size: 42 },

	spaSign: { map: 'spaLobby', cords: [63, 17] },

	spaGym: { map: 'spaMen', cords: [48, 47], size: 48 },

	spaTiles: { map: 'spaPool', cords: [200, 77], size: 48 },

	spaMirror: { map: 'spaWomen', cords: [141, 51], size: 72 },

	tentBed: { map: 'tent', cords: [49, 45] },

	trailerSofa: { map: 'trailer', cords: [208, 50] },

	haleyWall: { map: 'twoWillowLane', cords: [112, 16] },
	emilyPainting: { map: 'twoWillowLane', cords: [240, 16] },
	emilyWool: { map: 'twoWillowLane', cords: [256, 352] },

	volcanoDrip: { map: 'volcano', cords: [536, 478] },

	volcanoPattern: { map: 'volcanoTop', cords: [343, 187], size: 50 },
	volcanoForge: { map: 'volcanoTop', cords: [344, 321], size: 48 },

	walnutComputer: { map: 'walnutRoom', cords: [98, 9], size: 36 },

	witchGreen: { map: 'witchHut', cords: [96, 48], size: 48 },
	witchPotion: { map: 'witchHut', cords: [57, 163] },

	witchWall: { map: 'witchLairEntrance', cords: [281, 302] },

	wizardLectern: { map: 'wizard', cords: [24, 196] },

	wizardDove: { map: 'wizardBasement', cords: [176, 31], size: 48 }
}

const locations = typedObject.entries(locationData).map<Location>(([name, data]) => ({ name, ...data }))

export function getRandomLocation() {
	const random = ~~(Math.random() * locations.length)
	return locations[random]
}
