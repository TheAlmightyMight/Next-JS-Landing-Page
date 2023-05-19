import React from 'react'

import { ArrowLeftIcon } from '../icons/ArrowLeft'
import { ArrowRightIcon } from '../icons/ArrowRight'

interface Props {
	type: 'left' | 'right'
	size: 'normal' | 'large'
	clickHandler: (...args: any) => void
}
export const SliderButton: React.FC<Props> = ({ type, size, clickHandler }) => {
	return (
		<button
			onClick={clickHandler}
			className={
				size === 'normal' ? 'SliderButton--normal' : 'SliderButton--large'
			}
		>
			{type === 'left' ? <ArrowLeftIcon /> : <ArrowRightIcon />}
			{type === 'left' ? (
				<span className='SliderButton__text'>Back</span>
			) : (
				<span className='SliderButton__text'>Next</span>
			)}
		</button>
	)
}
