import { match } from 'ts-pattern'

import Home from '~/routes/Home'
import Play from '~/routes/Play'
import Router from '~/routes/router'

export default function App() {
	const route = Router.useRoute(['home', 'play'])

	return match(route)
		.with({ name: 'home' }, () => <Home />)
		.with({ name: 'play' }, () => <Play />)
		.otherwise(() => null)
}
