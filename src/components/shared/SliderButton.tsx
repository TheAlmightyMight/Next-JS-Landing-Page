import React from 'react'

import { ArrowLeftIcon } from '../icons/ArrowLeft'
import { ArrowRightIcon } from '../icons/ArrowRight'

interface Props {
	type: 'left' | 'right'
	size: 'normal' | 'large'
	clickHandler: (...args: any) => void
	noText?: boolean
	style?: React.CSSProperties
}
export const SliderButton: React.FC<Props> = ({
	type,
	size,
	clickHandler,
	noText = false,
	style,
}) => {
	return (
		<button
			onClick={clickHandler}
			style={{
				padding: noText ? '0' : '0 1rem',
				...style,
			}}
			className={
				size === 'normal' ? 'SliderButton--normal' : 'SliderButton--large'
			}
		>
			{type === 'left' ? <ArrowLeftIcon /> : <ArrowRightIcon />}
			{noText ? (
				<>
					{type === 'left' ? (
						<span className='SliderButton__text'>Back</span>
					) : (
						<span className='SliderButton__text'>Next </span>
					)}
				</>
			) : (
				''
			)}
		</button>
	)
}
