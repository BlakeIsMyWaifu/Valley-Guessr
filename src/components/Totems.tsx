import { Group, Image, UnstyledButton } from '@mantine/core'

import { type TotemName } from '~/generated/TOTEM'
import { useGameStore } from '~/state/useGameStore'

export default function Totems() {
	return (
		<Group justify='center'>
			<Totem name='farm' />
			<Totem name='mountain' />
			<Totem name='beach' />
			<Totem name='desert' />
			<Totem name='island' />
		</Group>
	)
}

type TotemProps = {
	name: TotemName
}

function Totem({ name }: TotemProps) {
	const changeMap = useGameStore(state => state.changeMap)

	return (
		<UnstyledButton onClick={() => changeMap(name)}>
			<Image src={`/totem/${name}.png`} h={64} />
		</UnstyledButton>
	)
}