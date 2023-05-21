import { Introduction } from '../components/sections/introduction/Introduction'
import { Reputation } from '@/components/sections/reputation/Reputation'
import { About } from '@/components/sections/about/About'
import { Services } from '@/components/sections/services/Services'
import { Experience } from '@/components/sections/experience/Experience'

export default function Home() {
	return (
		<main>
			<Introduction />
			<Reputation />
			{/* <About /> */}
			<Services />
			<Experience />
		</main>
	)
}
