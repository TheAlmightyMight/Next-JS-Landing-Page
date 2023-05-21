import React from 'react'

interface Props {
	text: string
	icon: React.ReactElement
}
export const ServicesItem: React.FC<Props> = ({ text, icon }) => {
	return (
		<div className='services__item'>
			<div className='services__item-icon'>{icon}</div>
			<p className='services__item-info'>{text}</p>
		</div>
	)
}
