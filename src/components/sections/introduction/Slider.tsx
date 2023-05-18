import React from 'react'

import { SliderImage } from '@/constants'

import Image from 'next/image'

interface Props {
	items: SliderImage[]
}
export const Slider: React.FC<SliderImage> = ({
	image: { src, blurDataURL },
}) => {
	return (
		<>
			<Image
				placeholder='blur'
				blurDataURL={blurDataURL}
				priority={true}
				src={src}
				alt='Slider image'
				fill={true}
				key={src}
			/>
		</>
	)
}
