import { Introduction } from '../components/sections/introduction/Introduction'
import { Reputation } from '@/components/sections/reputation/Reputation'
import { About } from '@/components/sections/about/About'
import { Services } from '@/components/sections/services/Services'
import { Experience } from '@/components/sections/experience/Experience'
import { Consultation } from '@/components/sections/consultation/Consultation'
import { ReachOut } from '@/components/sections/reach-out/ReachOut'
import { Projects } from '@/components/sections/projects/Projects'

export default function Home() {
	return (
		<main>
			<Introduction />
			<Reputation />
			<About />
			<Services />
			<Experience />
			<Consultation />
			<Projects />
			<ReachOut />
		</main>
	)
}
