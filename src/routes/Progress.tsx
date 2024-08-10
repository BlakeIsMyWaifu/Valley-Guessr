import { AppShell, Button, Card, Group, Image, Modal, Stack, Text, Title } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { createRoute, Link } from '@tanstack/react-router'

import LocationImage from '~/components/LocationImage'
import { type LocationTime, useProgressStore } from '~/state/useProgressStore'
import { formatTime } from '~/utils/formatTime'
import { publicPath } from '~/utils/publicPath'

import { rootRoute } from './Root'

export const progressRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/progress',
	component: Progress
})

function Progress() {
	return (
		<AppShell navbar={{ width: 300, breakpoint: 'sm' }}>
			<AppShell.Navbar>
				<Sidebar />
			</AppShell.Navbar>
			<AppShell.Main>
				<Locations />
			</AppShell.Main>
		</AppShell>
	)
}

function Sidebar() {
	const completed = useProgressStore(state => state.completed)
	const incomplete = useProgressStore(state => state.incomplete)

	const [opened, { open, close }] = useDisclosure(false)

	return (
		<>
			<Stack justify='space-between' style={{ height: '100%' }}>
				<Stack gap='md' mt='md' mb='md'>
					<Title ta='center'>Progress</Title>
					<Title ta='center' order={2}>
						{completed.length} / {completed.length + incomplete.length}
					</Title>
				</Stack>
				<Stack gap={0}>
					<Button onClick={open} m='md' color='red'>
						Reset Progress
					</Button>
					<Button component={Link} to='/' m='md'>
						Home
					</Button>
				</Stack>
			</Stack>

			<ResetProgressModal opened={opened} close={close} />
		</>
	)
}

type ResetProgressModalProps = {
	opened: boolean
	close: () => void
}

function ResetProgressModal({ opened, close }: ResetProgressModalProps) {
	const resetProgress = useProgressStore(state => state.resetProgress)

	return (
		<Modal opened={opened} onClose={close} title="Are you sure you want to reset all you're progress?">
			<Group justify='center'>
				<Button
					color='red'
					onClick={() => {
						resetProgress()
						close()
					}}
				>
					Confirm
				</Button>
				<Button onClick={close}>Cancel</Button>
			</Group>
		</Modal>
	)
}

function Locations() {
	const completed = useProgressStore(state => state.completed)
	const incomplete = useProgressStore(state => state.incomplete)

	return (
		<Group m='md'>
			{completed.map(location => (
				<CompleteLocation key={location.map + location.cords[0]} location={location} />
			))}
			{incomplete.map((_, i) => (
				<IncompleteLocation key={i} />
			))}
		</Group>
	)
}

type CompleteLocationProps = {
	location: LocationTime
}

function CompleteLocation({ location }: CompleteLocationProps) {
	return (
		<Card style={{ width: 150 }}>
			<LocationImage location={location} />
			<Text ta='center'>{formatTime(location.time)}</Text>
		</Card>
	)
}

function IncompleteLocation() {
	return (
		<Card style={{ width: 150 }}>
			<Image src={`${publicPath}/mystery.png`} onMouseDown={event => event.preventDefault()} />
			<Text ta='center'>Unknown</Text>
		</Card>
	)
}
