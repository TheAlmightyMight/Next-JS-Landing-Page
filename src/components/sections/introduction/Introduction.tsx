'use client'
import React, { useState, useRef } from 'react'

import Image from 'next/image'

import { Heading } from './Heading'
import { SliderControls } from './SliderControls'

import { SliderImages } from '@/constants'

export const Introduction: React.FC = () => {
	const [currentItem, setCurrentItem] = useState<number>(0)
	const ref = useRef<HTMLImageElement>(null)

	const goForward = () => {
		if (ref.current) {
			ref.current.classList.add('fade-out')
			ref.current.addEventListener('animationend', e => {
				//@ts-ignore
				ref.current.classList.remove('fade-out')
				if (currentItem + 1 === 12) {
					return setCurrentItem(0)
				}
				setCurrentItem(prev => prev + 1)
			})
		}
	}

	const goBackwards = () => {
		if (ref.current) {
			ref.current.classList.add('fade-out')
			ref.current.addEventListener('animationend', e => {
				//@ts-ignore
				ref.current.classList.remove('fade-out')
				if (currentItem - 1 === -1) {
					return setCurrentItem(SliderImages.length - 1)
				}

				setCurrentItem((prev: number) => prev - 1)
			})
		}
	}

	return (
		<section
			id='Home'
			className='introduction'
		>
			<div className='introduction__wrapper'>
				<Heading />
				<Image
					ref={ref}
					className={'fade-in'}
					blurDataURL={SliderImages[currentItem].image.blurDataURL}
					placeholder='blur'
					priority={true}
					alt='Slider image'
					fill={true}
					src={SliderImages[currentItem].image.src}
					key={SliderImages[currentItem].image.src}
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
