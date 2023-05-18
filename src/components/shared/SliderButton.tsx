import React from 'react'

import { ArrowLeftIcon } from '../icons/ArrowLeft'
import { ArrowRightIcon } from '../icons/ArrowRight'

interface Props {
	type: 'left' | 'right'
	size: 'normal' | 'large'
}
export const SliderButton: React.FC<Props> = ({ type, size }) => {
	return (
		<button
			className={
				size === 'normal' ? 'SliderButton--normal' : 'SliderButton--large'
			}
		>
			{type === 'left' ? <ArrowRightIcon /> : <ArrowLeftIcon />}
			{type === 'left' ? (
				<span className='SliderButton__text'>Next</span>
			) : (
				<span className='SliderButton__text'>Back</span>
			)}
		</button>
	)
}
