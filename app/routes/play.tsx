import { type MetaFunction } from '@remix-run/node'

import Map from '~/components/Map'

export const meta: MetaFunction = () => {
	return [{ title: 'Valley Guessr' }, { name: '_', content: '_' }]
}

export default function Play() {
	return <Map mapName='farm' />
}
