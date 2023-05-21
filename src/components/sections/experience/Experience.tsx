import React from 'react'

import { Card } from './Card'

const data = [
	{ text: 'Happy clients', number: 84, size: 'small' },
	{ text: 'Projects Completed', number: 123, size: 'large' },
	{ text: 'Awards Won', number: 37, size: 'small' },
	{ text: 'Years in Business', number: 30, size: 'large' },
] as {
	size: 'small' | 'large'
	number: number
	text: string
}[]
export const Experience: React.FC = () => {
	return (
		<section className='experience'>
			<div className='experience__icons'></div>
			{/* <div className='experience__info'>
				<h2 className='experience__heading'>30 years of experience</h2>
				<p className='experience__paragraph'>
					Our company has been the leading provided construction services to
					clients throughout the USA since 1988.
				</p>
				<button className='experience__btn'>Contact us</button>
			</div> */}

			{data.map(el => (
				<Card
					key={el.number}
					{...el}
				/>
			))}
		</section>
	)
}
