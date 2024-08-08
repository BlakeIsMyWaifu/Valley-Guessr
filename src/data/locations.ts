import { type MapName } from '~/generated/MAP'

export type Location = {
	map: MapName
	cords: [x: number, y: number]
	/** Defaults to 32x32, Should be minimum of 32 */
	size: number
}

type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>

export const locationData = (
	[
		{ map: 'adventureGuild', cords: [103, 154] },
		{ map: 'adventureGuild', cords: [63, 125] },
		{ map: 'adventureGuild', cords: [74, 226], size: 48 },
		{ map: 'adventureGuild', cords: [41, 198] },

		{ map: 'backwoods', cords: [456, 160], size: 128 },

		{ map: 'beach', cords: [310, 29], size: 36 },
		{ map: 'beach', cords: [1332, 34], size: 56 },
		{ map: 'beach', cords: [1312, 309] },
		{ map: 'beach', cords: [691, 143], size: 44 },

		{ map: 'blacksmith', cords: [30, 43], size: 36 },
		{ map: 'blacksmith', cords: [87, 125] },

		{ map: 'boat', cords: [129, 28] },
		{ map: 'boat', cords: [56, 129] },

		{ map: 'bus', cords: [323, 334], size: 36 },

		{ map: 'busTunnel', cords: [264, 72] },
		{ map: 'busTunnel', cords: [152, 63] },

		{ map: 'caroline', cords: [32, 50], size: 48 },
		{ map: 'caroline', cords: [80, 37], size: 48 },

		{ map: 'carpenter', cords: [152, 274], size: 48 },
		{ map: 'carpenter', cords: [336, 229], size: 33 },
		{ map: 'carpenter', cords: [119, 12] },
		{ map: 'carpenter', cords: [72, 55] },
		{ map: 'carpenter', cords: [88, 87] },
		{ map: 'carpenter', cords: [240, 24], size: 64 },
		{ map: 'carpenter', cords: [432, 96], size: 64 },

		{ map: 'casino', cords: [40, 35], size: 48 },
		{ map: 'casino', cords: [384, 16], size: 49 },
		{ map: 'casino', cords: [280, 134], size: 32 },

		{ map: 'cindersap', cords: [790, 1570], size: 96 },
		{ map: 'cindersap', cords: [12, 1170], size: 72 },

		{ map: 'clinic', cords: [16, 17], size: 48 },

		{ map: 'communityCenter', cords: [208, 31], size: 48 },
		{ map: 'communityCenter', cords: [142, 419] },
		{ map: 'communityCenter', cords: [248, 272] },
		{ map: 'communityCenter', cords: [616, 80] },
		{ map: 'communityCenter', cords: [1024, 195] },

		{ map: 'crystalPuzzle', cords: [89, 16] },
		{ map: 'crystalPuzzle', cords: [88, 89] },

		{ map: 'desert', cords: [581, 309] },
		{ map: 'desert', cords: [144, 560] },

		{ map: 'elliot', cords: [120, 32], size: 48 },

		// farm

		{ map: 'fieldOffice', cords: [62, 30], size: 36 },

		{ map: 'fishShop', cords: [128, 47] },

		{ map: 'generalStore', cords: [176, 16] },
		{ map: 'generalStore', cords: [32, 16] },
		{ map: 'generalStore', cords: [252, 191] },
		{ map: 'generalStore', cords: [288, 431] },
		{ map: 'generalStore', cords: [96, 224] },
		{ map: 'generalStore', cords: [576, 241] },

		{ map: 'gourmandFrog', cords: [64, 45] },

		{ map: 'greenhouse', cords: [240, 94] },

		{ map: 'harvey', cords: [64, 41] },
		{ map: 'harvey', cords: [96, 18] },

		// home

		{ map: 'islandEast', cords: [328, 146] },
		{ map: 'islandEast', cords: [240, 384], size: 48 },

		{ map: 'islandFarm', cords: [304, 865] },
		{ map: 'islandFarm', cords: [648, 1367] },

		{ map: 'islandHome', cords: [192, 109] },

		{ map: 'islandNorth', cords: [127, 698] },
		{ map: 'islandNorth', cords: [216, 187] },
		{ map: 'islandNorth', cords: [544, 1113] },

		{ map: 'islandResort', cords: [339, 318] },

		{ map: 'islandSouthEast', cords: [608, 389] },

		{ map: 'leah', cords: [16, 97] },

		{ map: 'leo', cords: [129, 79], size: 64 },

		{ map: 'masteryCave', cords: [63, 80] },
		{ map: 'masteryCave', cords: [104, 117] },
		{ map: 'masteryCave', cords: [152, 135] },

		{ map: 'mayorManor', cords: [32, 63] },

		{ map: 'mine', cords: [1080, 146] },

		{ map: 'mountain', cords: [105, 352] },
		{ map: 'mountain', cords: [1571, 470] },
		{ map: 'mountain', cords: [1941, 160] },
		{ map: 'mountain', cords: [1072, 511], size: 64 },

		{ map: 'museum', cords: [255, 143], size: 64 },
		{ map: 'museum', cords: [312, 135] },

		{ map: 'mushroomCave', cords: [120, 100] },

		{ map: 'mutantBugLair', cords: [385, 767] },
		{ map: 'mutantBugLair', cords: [792, 113] },

		{ map: 'oasis', cords: [240, 14] },
		{ map: 'oasis', cords: [87, 16] },

		{ map: 'oneRiverRoad', cords: [247, 13] },
		{ map: 'oneRiverRoad', cords: [215, 55] },
		{ map: 'oneRiverRoad', cords: [239, 306] },

		{ map: 'oneWillowLane', cords: [177, 336] },
		{ map: 'oneWillowLane', cords: [240, 255] },

		{ map: 'pelican', cords: [304, 135] },
		{ map: 'pelican', cords: [305, 184] },

		{ map: 'pelican', cords: [1065, 299] },
		{ map: 'pelican', cords: [1399, 1448] },
		{ map: 'pelican', cords: [744, 1363] },
		{ map: 'pelican', cords: [1608, 1378] },

		{ map: 'pirateCove', cords: [463, 65] },

		{ map: 'railroad', cords: [448, 128] },
		{ map: 'railroad', cords: [229, 434], size: 40 },
		{ map: 'railroad', cords: [504, 161] },

		{ map: 'ranch', cords: [336, 79] },
		{ map: 'ranch', cords: [96, 10] },
		{ map: 'ranch', cords: [377, 198] },

		{ map: 'saloon', cords: [48, 234] },
		{ map: 'saloon', cords: [399, 224] },

		{ map: 'sebastian', cords: [34, 105], size: 60 },

		{ map: 'secretWoods', cords: [72, 126] },

		{ map: 'sewer', cords: [112, 303] },

		{ map: 'skullCavern', cords: [178, 27], size: 42 },

		{ map: 'spaLobby', cords: [63, 17] },

		{ map: 'spaMen', cords: [48, 47], size: 48 },

		{ map: 'spaPool', cords: [200, 77], size: 48 },

		{ map: 'spaWomen', cords: [141, 51], size: 72 },

		{ map: 'tent', cords: [49, 45] },

		{ map: 'trailer', cords: [208, 50] },

		{ map: 'twoWillowLane', cords: [112, 16] },
		{ map: 'twoWillowLane', cords: [240, 16] },
		{ map: 'twoWillowLane', cords: [256, 352] },

		{ map: 'volcano', cords: [536, 478] },

		{ map: 'volcanoTop', cords: [343, 187], size: 50 },
		{ map: 'volcanoTop', cords: [344, 321], size: 48 },

		{ map: 'walnutRoom', cords: [98, 9], size: 36 },

		{ map: 'witchHut', cords: [96, 48], size: 48 },
		{ map: 'witchHut', cords: [57, 163] },

		{ map: 'witchLairEntrance', cords: [281, 302] },

		{ map: 'wizard', cords: [24, 196] },

		{ map: 'wizardBasement', cords: [176, 31], size: 48 }
	] satisfies Optional<Location, 'size'>[]
).map(location => ({ ...location, size: location.size ?? 32 }))
