import { existsSync } from 'node:fs'
import { mkdir, readdir, writeFile } from 'node:fs/promises'

const generatedFolder = './src/generated'

if (!existsSync(generatedFolder)) {
	await mkdir(generatedFolder)
}

/** @type {(folder: string) => Promise<void>} */
async function generateTypes(folder) {
	const files = await readdir(`./public/${folder}/`).catch(console.error)
	const names = files
		.filter(file => file.endsWith('.png'))
		.map(file => file.substring(0, file.length - 4))
		.map(file => `'${file}'`)
	const out = `export type ${folder.charAt(0).toUpperCase() + folder.slice(1)}Name = ${names.join(' | ')}`
	await writeFile(`${generatedFolder}/${folder.toUpperCase()}.d.ts`, out).catch(console.error)
	console.log(`✅ Create a '${folder}' type`)
}

await generateTypes('location')
await generateTypes('map')
await generateTypes('totem')