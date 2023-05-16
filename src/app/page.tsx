import Image from 'next/image'
import { Introduction } from '../components/sections/introduction/Introduction'
import { Button } from '@/components/shared/SliderButton'
// import React, { useState } from 'react'

import { ElectricIcon } from '@/components/icons/ElectricIcon'

export default function Home() {
	return (
		<main>
			{/* <Introduction />
			<Button
				type='right'
				size='large'
			/>
			<p>hello</p> */}

			<ElectricIcon />
		</main>
	)
}
