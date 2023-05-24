import React from 'react'

import { SliderImage } from '@/constants'

import { SliderButton } from '../../shared/SliderButton'

interface Props extends SliderImage {
	nextHandler: () => void
	backHandler: () => void
}

export const SliderControls: React.FC<Props> = ({
	projectName,
	backHandler,
	nextHandler,
}) => {
	return (
		<div className='introduction__slider-controls'>
			<h3 className='introduction__slider-controls-heading'>
				Feature projects
			</h3>

			<p className='introduction__slider-controls-paragraph'>{projectName}</p>

			<div className='introduction__slider-controls-btn-wrapper'>
				<SliderButton
					clickHandler={backHandler}
					size='normal'
					type='left'
					noText
				/>
				<SliderButton
					clickHandler={nextHandler}
					size='normal'
					type='right'
					noText
				/>
			</div>
		</div>
	)
}
