import React from 'react'

import { Card } from './Card'

import { IllusIcon } from '@/components/icons/IllusIcon'
import { Illus2Icon } from '@/components/icons/Illus2Icon'
import { Illus3Icon } from '@/components/icons/IllusIcon3'
import { Illus4Icon } from '@/components/icons/IllusIcon4'

const data = [
	{ text: 'Happy clients', number: 84, size: 'small', icon: <Illus2Icon /> },
	{
		text: 'Projects Completed',
		number: 123,
		size: 'large',
		icon: <IllusIcon />,
	},
	{ text: 'Awards Won', number: 37, size: 'small', icon: <Illus3Icon /> },
	{
		text: 'Years in Business',
		number: 30,
		size: 'large',
		icon: <Illus4Icon />,
	},
] as {
	size: 'small' | 'large'
	number: number
	text: string
	icon: React.ReactElement
}[]

export const Experience: React.FC = () => {
	return (
		<section className='experience'>
			<div className='experience__icons'>
				{data.map((el, i) => (
					<Card
						dataId={i}
						key={el.number}
						icon={el.icon}
						text={el.text}
						number={el.number}
					/>
				))}
			</div>
			<div className='experience__info'>
				<h2 className='experience__heading'>30 years of experience</h2>
				<p className='experience__paragraph'>
					Our company has been the leading provided construction services to
					clients throughout the USA since 1988.
				</p>
				<button className='experience__btn'>Contact us</button>
			</div>
		</section>
	)
}
