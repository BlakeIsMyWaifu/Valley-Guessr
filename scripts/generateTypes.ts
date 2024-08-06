import { existsSync } from 'node:fs'
import { mkdir, readdir, writeFile } from 'node:fs/promises'

const generatedFolder = './src/generated'

if (!existsSync(generatedFolder)) {
	await mkdir(generatedFolder)
}

async function generateTypes(folder: string) {
	const files = await readdir(`./public/${folder}/`).catch(console.error)
	if (!files) throw new Error(`Folder '${folder}' is empty`)
	const names = files.filter(file => file.endsWith('.png')).map(file => file.substring(0, file.length - 4))
	const out = `export const ${folder}List = ${JSON.stringify(names)} as const
export type ${folder.charAt(0).toUpperCase() + folder.slice(1)}Name = (typeof ${folder}List)[number]`
	await writeFile(`${generatedFolder}/${folder.toUpperCase()}.ts`, out).catch(console.error)
	console.log(`✅ Create a '${folder}' type`)
}

await generateTypes('map')
await generateTypes('totem')
