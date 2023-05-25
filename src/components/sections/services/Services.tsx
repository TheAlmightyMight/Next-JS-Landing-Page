import React from 'react'

import { ServicesItem } from './ServicesItem'

import { ConstructionIcon } from '@/components/icons/ConstructionIcon'
import { ConsultationIcon } from '@/components/icons/ConsultationIcon'
import { RepairIcon } from '@/components/icons/RepairIcon'
import { RenovationIcon } from '@/components/icons/RenovationIcon'
import { ArchitectureIcon } from '@/components/icons/ArchitectureIcon'
import { ElectricIcon } from '@/components/icons/ElectricIcon'

const data = [
	{ text: 'Construction', icon: <ConstructionIcon /> },
	{ text: 'Renovation', icon: <RenovationIcon /> },
	{ text: 'Consultation', icon: <ConsultationIcon /> },
	{ text: 'Repair services', icon: <RepairIcon /> },
	{ text: 'Architecture', icon: <ArchitectureIcon /> },
	{ text: 'Electric', icon: <ElectricIcon /> },
]

export const Services: React.FC = () => {
	return (
		<section
			id='Services'
			className='services'
		>
			<div className='services__wrapper'>
				<h3 className='services__heading'>Services</h3>

				<div className='services__items'>
					{data.map(el => (
						<ServicesItem
							key={el.text}
							{...el}
						/>
					))}
				</div>
			</div>
		</section>
	)
}
