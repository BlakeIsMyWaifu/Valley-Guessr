import { Button, Group, Modal, ScrollArea, Stack, Stepper, Text, Title } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { type ReactNode } from '@tanstack/react-router'
import { useState } from 'react'

import LocationImage from '~/components/LocationImage'
import Timer from '~/components/Timer'
import Totems from '~/components/Totems'
import { useGameStore } from '~/state/useGameStore'

export default function PlaySidebar() {
	const location = useGameStore(state => state.location)!

	const [opened, { open, close }] = useDisclosure(false)

	return (
		<>
			<ScrollArea scrollbars='y'>
				<Stack gap='md' mt='md' mb='md'>
					<Title ta='center'>Valley Guessr</Title>
					<Timer />
					<LocationImage location={location} />
					<Totems />
					<Button m='md' onClick={open}>
						How to play
					</Button>
				</Stack>
			</ScrollArea>

			<HowToPlayModal opened={opened} close={close} />
		</>
	)
}

type HowToPlayModalProps = {
	opened: boolean
	close: () => void
}

function HowToPlayModal({ opened, close }: HowToPlayModalProps) {
	const [active, setActive] = useState(0)
	const nextStep = () => setActive(current => (current < 3 ? current + 1 : current))
	const prevStep = () => setActive(current => (current > 0 ? current - 1 : current))

	const location = useGameStore(state => state.location)!

	const cleanUp = () => {
		close()
		setActive(0)
	}

	return (
		<Modal opened={opened} onClose={cleanUp} title='How to play'>
			<Stepper active={active} h={350}>
				<Stepper.Step>
					<Step>
						<Text ta='center'>The sidebar shows the location you must find</Text>
						<LocationImage location={location} canvasSize={200} />
					</Step>
				</Stepper.Step>
				<Stepper.Step>
					<Step>
						<Text ta='center'>Click the warp totems to quickly travel around</Text>
						<Totems active={false} />
						<Text ta='center'>Click on the green and white zones to move to the next area</Text>
					</Step>
				</Stepper.Step>
				<Stepper.Step>
					<Step>
						<Text ta='center'>Drag, zoom and look around</Text>
						<Text ta='center'>Once you{"'"}ve found the correct location, double click it</Text>
					</Step>
				</Stepper.Step>
			</Stepper>

			<Group justify='center'>
				<Button onClick={prevStep} variant='default'>
					Back
				</Button>
				{active === 2 ? <Button onClick={cleanUp}>Close</Button> : <Button onClick={nextStep}>Next</Button>}
			</Group>
		</Modal>
	)
}

function Step({ children }: { children: ReactNode }) {
	return (
		<Stack align='center' justify='center' h={280}>
			{children}
		</Stack>
	)
}
