import React from 'react'

import { SliderButton } from '../../shared/SliderButton'

interface Props {}
export const SliderControls: React.FC<Props> = () => {
	return (
		<div className='introduction__slider-controls'>
			<h3 className='introduction__slider-controls-heading'>
				Feature projects
			</h3>

			<p className='introduction__slider-controls-paragraph'>
				The National University of Architecture
			</p>

			<div className='introduction__slider-controls-btn-wrapper'>
				<SliderButton
					size='normal'
					type='right'
				/>
				<SliderButton
					size='normal'
					type='left'
				/>
			</div>
		</div>
	)
}
