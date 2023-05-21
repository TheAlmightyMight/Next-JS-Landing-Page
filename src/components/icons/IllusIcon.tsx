import React from 'react'

import ImageData from '../../assets/other/illus.png'
import Image from 'next/image'

export const IllusIcon: React.FC = () => {
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
