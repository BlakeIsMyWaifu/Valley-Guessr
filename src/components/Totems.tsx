import { Group, Image, Tooltip, UnstyledButton } from '@mantine/core'

import { type TotemName } from '~/generated/TOTEM'
import { useGameStore } from '~/state/useGameStore'
import { publicPath } from '~/utils/publicPath'

type TotemsProps = {
	active?: boolean
}

export default function Totems({ active = true }: TotemsProps) {
	return (
		<Group justify='center'>
			<Totem active={active} name='farm' />
			<Totem active={active} name='mountain' />
			<Totem active={active} name='beach' />
			<Totem active={active} name='desert' />
			<Totem active={active} name='islandResort' />
		</Group>
	)
}

type TotemProps = {
	name: TotemName
	active: boolean
}

function Totem({ name, active }: TotemProps) {
	const changeMap = useGameStore(state => state.changeMap)

	const image = (
		<Tooltip
			label={name.split('Resort')[0]}
			styles={{
				tooltip: {
					textTransform: 'capitalize'
				}
			}}
			color='dark.5'
			withArrow
		>
			<Image src={`${publicPath}/totem/${name}.png`} h={64} w={64} />
		</Tooltip>
	)

	return active ? <UnstyledButton onClick={() => changeMap(name)}>{image}</UnstyledButton> : image
}
