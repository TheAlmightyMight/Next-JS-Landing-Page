import React from 'react'

import Project1 from '../../../assets/other/Project-1.jpg'
import Project2 from '../../../assets/other/Project-2.jpg'
import Project3 from '../../../assets/other/Project-3.jpg'

import { Heading } from './Heading'
import { Slider } from './Slider'
import { SliderControls } from './SliderControls'

export const Introduction: React.FC = () => {
	return (
		<section className='introduction'>
			<div className='introduction__wrapper'>
				<Heading />
				<Slider
					urls={[
						{ src: Project1.src, blurDataURL: Project1.blurDataURL as string },

						{ src: Project2.src, blurDataURL: Project2.blurDataURL as string },

						{ src: Project3.src, blurDataURL: Project3.blurDataURL as string },
					]}
				/>
				<SliderControls />
			</div>
		</section>
	)
}
