import React from 'react'

import Image from 'next/image'
import ImageData from '../../../assets/other/Consultation.jpg'

export const Consultation: React.FC = () => {
	return (
		<section className='consultation'>
			<div className='consultation__wrapper'>
				<Image
					src={ImageData.src}
					alt='Consultation image'
					fill
					style={{ zIndex: -1 }}
				/>
				<div className='consultation__info'>
					<h3 className='h3consultation__heading'>
						Free consultation with exceptional quality
					</h3>

					<p className='consultation__info'>
						Just one call away: +84 1102 2703
					</p>
				</div>

				<button className='consultation__btn'>Get your consultation</button>
			</div>
		</section>
	)
}
