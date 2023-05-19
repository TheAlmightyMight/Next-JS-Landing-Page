import React, { useEffect, useState, useRef } from 'react'

import { useFirstRender } from '@/hooks/useFirstRender'

import { SliderImage } from '@/constants'

import Image from 'next/image'

interface Props extends SliderImage {
	prevSrc: string
}

export const Slider: React.FC<Props> = ({
	image: { src, blurDataURL },
	prevSrc,
}) => {
	const [isAnimated, setIsAnimated] = useState(false)
	const isFirstRender = useFirstRender()

	let className = ''

	if (!isFirstRender) {
		className = isAnimated ? 'fade-out' : 'fade-in'
	}

	useEffect(() => {
		if (isFirstRender) {
			return
		}

		setIsAnimated(true)

		let id = setTimeout(() => {
			setIsAnimated(false)
		}, 800)

		return () => {
			clearTimeout(id)
		}
	}, [src, isFirstRender])

	return (
		<>
			<Image
				className={className}
				placeholder='blur'
				blurDataURL={blurDataURL}
				priority={true}
				src={isAnimated ? (prevSrc as any as string) : src}
				alt='Slider image'
				fill={true}
				key={src}
			/>
		</>
	)
}
