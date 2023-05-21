import { Introduction } from '../components/sections/introduction/Introduction'
import { Reputation } from '@/components/sections/reputation/Reputation'
import { About } from '@/components/sections/about/About'

export default function Home() {
	return (
		<main>
			<Introduction />
			<Reputation />
			<About />
		</main>
	)
}
