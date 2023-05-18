'use client'
import React, { useState } from 'react'

import { Heading } from './Heading'
import { Slider } from './Slider'
import { SliderControls } from './SliderControls'

import { SliderImages } from '@/constants'

export const Introduction: React.FC = () => {
	const [currentItem, setCurrentItem] = useState(0)

	const goForward = () => {
		if (currentItem + 1 === 12) {
			return setCurrentItem(0)
		}

		setCurrentItem(prev => prev + 1)
	}

	const goBackwards = () => {
		if (currentItem - 1 === -1) {
			return setCurrentItem(SliderImages.length - 1)
		}

		setCurrentItem(prev => prev - 1)
	}

	return (
		<section className='introduction'>
			<div className='introduction__wrapper'>
				<Heading />
				<Slider {...SliderImages[currentItem]} />
				<SliderControls
					nextHandler={goForward}
					backHandler={goBackwards}
					{...SliderImages[currentItem]}
				/>
			</div>
		</section>
	)
}
