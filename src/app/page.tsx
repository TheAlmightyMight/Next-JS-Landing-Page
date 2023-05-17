import Image from 'next/image'
import { Introduction } from '../components/sections/introduction/Introduction'
import { Button } from '@/components/shared/SliderButton'

export default function Home() {
	return (
		<main>
			<Introduction />
		</main>
	)
}
