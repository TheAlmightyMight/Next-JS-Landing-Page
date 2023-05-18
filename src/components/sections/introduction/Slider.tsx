import React from 'react'

import Image from 'next/image'

interface ImageElement {
	src: string
	blurDataURL: string
}

interface Props {
	urls: ImageElement[]
}
export const Slider: React.FC<Props> = ({ urls }) => {
	return (
		<div className='introduction__track'>
			{urls.map((el, i) => (
				<Image
					placeholder='blur'
					blurDataURL={el.blurDataURL}
					priority={i === 0 ? true : undefined}
					src={el.src}
					alt='Slider image'
					fill={true}
					key={el.src}
				/>
			))}
		</div>
	)
}
