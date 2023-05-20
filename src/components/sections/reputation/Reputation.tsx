import React from 'react'

import { ReputationItem } from './ReputationItem'

import { ServicesIcon } from '@/components/icons/ServicesIcon'
import { RepairIcon } from '@/components/icons/RepairIcon'

const reputationItems = [
	{
		heading: 'Best services',
		info: 'Nullam senectus porttitor in eget. Eget rutrum leo interdum.',
		icon: <ServicesIcon />,
	},
	{
		heading: 'Best teams',
		info: 'Cursus semper tellus volutpat aliquet lacus. ',
		icon: <ServicesIcon />,
	},
	{
		heading: 'Best designs',
		info: 'Ultricies at ipsum nunc, tristique nam lectus.',
		icon: <RepairIcon />,
	},
]

export const Reputation: React.FC = () => {
	return (
		<section>
			<h1 className='introduction__heading'>Our reputation</h1>

			<div className='reputation__items'>
				{reputationItems.map(el => (
					<ReputationItem
						key={el.heading}
						{...el}
					/>
				))}
			</div>
		</section>
	)
}
