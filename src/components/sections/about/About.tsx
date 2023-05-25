'use client'
import React from 'react'
import useMediaQuery from '@/hooks/useMediaQuery'
import Image from 'next/image'

import ImageData from '../../../assets/other/OldMan.jpg'

export const About: React.FC = () => {
	const isNotMobile = useMediaQuery('(min-width: 770px)')
	return (
		<section
			id='About'
			className='about'
		>
			{isNotMobile && (
				<div className='about__img'>
					<Image
						src={ImageData.src}
						blurDataURL={ImageData.blurDataURL}
						alt='About image'
						fill
					/>
				</div>
			)}

			<div className='about__info'>
				<h3 className='about__heading'>About us</h3>

				{!isNotMobile && (
					<div className='about__img'>
						<Image
							src={ImageData.src}
							blurDataURL={ImageData.blurDataURL}
							alt='About image'
							fill
						/>
					</div>
				)}

				<p className='about__text'>
					For more than 30 years we have been delivering world-class
					construction and we’ve built many lasting relationships along the way.
				</p>
				<p className='about__text'>
					We’ve matured into an industry leader and trusted resource for those
					seeking quality, innovation and reliability when building in the U.S.
				</p>

				<button className='about__btn'>More on our history</button>
			</div>
		</section>
	)
}
