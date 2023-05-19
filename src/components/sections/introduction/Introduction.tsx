'use client'
import React from 'react'

import { usePrevState } from '@/hooks/usePrevState'

import { Heading } from './Heading'
import { Slider } from './Slider'
import { SliderControls } from './SliderControls'

import { SliderImages } from '@/constants'

export const Introduction: React.FC = () => {
	const [currentItem, setCurrentItem, getPrevState] = usePrevState<number>(0)

	const goForward = () => {
		if (currentItem + 1 === 12) {
			return setCurrentItem(0)
		}

		setCurrentItem((prev: number) => prev + 1)
	}

	const goBackwards = () => {
		if (currentItem - 1 === -1) {
			return setCurrentItem(SliderImages.length - 1)
		}

		setCurrentItem((prev: number) => prev - 1)
	}

	const getPrevSrc = () => {
		return SliderImages[getPrevState()].image.src
	}

	return (
		<section className='introduction'>
			<div className='introduction__wrapper'>
				<Heading />
				<Slider
					prevSrc={getPrevSrc()}
					{...SliderImages[currentItem]}
				/>
				<SliderControls
					nextHandler={goForward}
					backHandler={goBackwards}
					{...SliderImages[currentItem]}
				/>
			</div>
		</section>
	)
}
