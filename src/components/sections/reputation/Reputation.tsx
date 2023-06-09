import React from 'react'

import { ReputationItem } from './ReputationItem'

import { ServicesIcon } from '@/components/icons/ServicesIcon'
import { TeamsIcon } from '@/components/icons/TeamsIcon'
import { DesignsIcon } from '@/components/icons/DesignsIcon'

const reputationItems = [
	{
		heading: 'Best services',
		info: 'Nullam senectus porttitor in eget. Eget rutrum leo interdum.',
		icon: <ServicesIcon />,
	},
	{
		heading: 'Best teams',
		info: 'Cursus semper tellus volutpat aliquet lacus. ',
		icon: <TeamsIcon />,
	},
	{
		heading: 'Best designs',
		info: 'Ultricies at ipsum nunc, tristique nam lectus.',
		icon: <DesignsIcon />,
	},
]

export const Reputation: React.FC = () => {
	return (
		<section
			id=''
			className='reputation'
		>
			<h2 className='reputation__heading'>Our reputation</h2>

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
