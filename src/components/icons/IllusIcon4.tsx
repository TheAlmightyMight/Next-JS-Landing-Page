import React from 'react'

import ImageData from '../../assets/other/illus4.png'
import Image from 'next/image'

// TODO: loader
export const Illus4Icon: React.FC = () => {
	return (
		<Image
			src={ImageData.src}
			blurDataURL={ImageData.blurDataURL}
			alt='Projects icon'
			width={100}
			height={100}
		/>
	)
}
