import React from 'react'

interface Props {
	heading: string
	info: string
	icon: React.ReactElement
}
export const ReputationItem: React.FC<Props> = ({ heading, info, icon }) => {
	return (
		<div className='reputation__item'>
			<div className='introduction__icon'>{icon}</div>

			<h3 className='reputation__item-heading'>{heading}</h3>

			<p className='introduction__info'>{info}</p>
		</div>
	)
}
