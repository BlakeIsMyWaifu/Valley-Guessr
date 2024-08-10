import { AppShell, Button, Card, Group, Image, Modal, Stack, Text, Title } from '@mantine/core'
import { useDisclosure, useViewportSize } from '@mantine/hooks'
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
	const { width } = useViewportSize()

	return width >= 768 ? <DesktopProgress /> : <MobileProgress />
}

function DesktopProgress() {
	return (
		<AppShell navbar={{ width: 200, breakpoint: 0 }}>
			<AppShell.Navbar>
				<Stack justify='space-between' style={{ height: '100%' }}>
					<Stack gap='md' mt='md' mb='md'>
						<ProgressTitle />
					</Stack>
					<Stack gap={0}>
						<ProgressButtons />
					</Stack>
				</Stack>
			</AppShell.Navbar>
			<AppShell.Main>
				<Locations />
			</AppShell.Main>
		</AppShell>
	)
}

function MobileProgress() {
	return (
		<AppShell header={{ height: 60 }} footer={{ height: 60 }}>
			<AppShell.Header>
				<Group justify='center'>
					<ProgressTitle />
				</Group>
			</AppShell.Header>
			<AppShell.Main>
				<Locations />
			</AppShell.Main>
			<AppShell.Footer>
				<Group justify='center'>
					<ProgressButtons />
				</Group>
			</AppShell.Footer>
		</AppShell>
	)
}

function ProgressTitle() {
	const completed = useProgressStore(state => state.completed)
	const incomplete = useProgressStore(state => state.incomplete)

	return (
		<>
			<Title ta='center'>Progress</Title>
			<Title ta='center' order={2}>
				{completed.length} / {completed.length + incomplete.length}
			</Title>
		</>
	)
}

function ProgressButtons() {
	const [opened, { open, close }] = useDisclosure(false)

	return (
		<>
			<Button onClick={open} m='sm' color='red'>
				Reset Progress
			</Button>
			<Button component={Link} to='/' m='sm'>
				Home
			</Button>

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
