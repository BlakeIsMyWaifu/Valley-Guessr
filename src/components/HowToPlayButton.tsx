import { Button, Group, Modal, Stack, Stepper, Text } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { type ReactNode } from '@tanstack/react-router'
import { useState } from 'react'

import LocationImage from '~/components/LocationImage'
import Totems from '~/components/Totems'
import useIsDesktop from '~/hooks/useIsDesktop'

type HowToPlayButtonProps = {
	compact?: boolean
}

export default function HowToPlayButton({ compact }: HowToPlayButtonProps) {
	const [opened, { open, close }] = useDisclosure(false)

	const [active, setActive] = useState(0)
	const nextStep = () => setActive(current => (current < 3 ? current + 1 : current))
	const prevStep = () => setActive(current => (current > 0 ? current - 1 : current))

	const cleanUp = () => {
		close()
		setActive(0)
	}

	const input = useIsDesktop() ? 'Click' : 'Tap'

	return (
		<>
			<Button m='md' onClick={open} size={compact ? 'compact-md' : 'md'}>
				How to play
			</Button>

			<Modal opened={opened} onClose={cleanUp} title='How to play'>
				<Stepper active={active} h={350}>
					<Stepper.Step>
						<Step>
							<Text ta='center'>The sidebar shows the location you must find</Text>
							<LocationImage canvasSize={200} />
						</Step>
					</Stepper.Step>
					<Stepper.Step>
						<Step>
							<Text ta='center'>{input} the warp totems to quickly travel around</Text>
							<Totems active={false} />
							<Text ta='center'>{input} on the green and white zones to move to the next area</Text>
						</Step>
					</Stepper.Step>
					<Stepper.Step>
						<Step>
							<Text ta='center'>Drag, zoom and look around</Text>
							<Text ta='center'>
								Once you{"'"}ve found the correct location, double {input.toLowerCase()} it
							</Text>
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
		</>
	)
}

function Step({ children }: { children: ReactNode }) {
	return (
		<Stack align='center' justify='center' h={280}>
			{children}
		</Stack>
	)
}
