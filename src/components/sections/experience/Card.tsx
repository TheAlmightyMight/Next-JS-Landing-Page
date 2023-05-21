import React from 'react'

interface Props {
	size: 'small' | 'large'
	number: number
	text: string
	icon: React.ReactElement
	dataId: number
}
export const Card: React.FC<Props> = ({ size, number, text, icon, dataId }) => {
	return (
		<div
			style={{ width: size === 'large' ? '330px' : '280px' }}
			className='experience__card'
		>
			<h5 className='experience__card-heading'>{number}</h5>
			<p className='experience__card-info'>{text}</p>
			<div
				data-id={dataId}
				className='experience__card-icon'
			>
				{icon}
			</div>
		</div>
	)
}
