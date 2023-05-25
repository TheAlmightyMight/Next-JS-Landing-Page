'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { SliderImages, SliderImage } from '@/constants'
import { SliderButton } from '@/components/shared/SliderButton'

const ITEMS_PER_PAGE = 4

type TabCategory = 'all' | 'other' | 'commercial' | 'residential'

export const Projects: React.FC = () => {
	const [activeTab, setActiveTab] = useState<TabCategory>('all')
	const [sliderItems, setSliderItems] = useState<SliderImage[]>(SliderImages)
	const [page, setPage] = useState(0)

	let currentItems = sliderItems.slice(
		ITEMS_PER_PAGE * page,
		ITEMS_PER_PAGE * page + 4,
	)

	const clickHandler = (e: React.PointerEvent<HTMLParagraphElement>) => {
		const target = e.target as HTMLParagraphElement
		switch (target.textContent) {
			case 'All': {
				setActiveTab('all')
				setSliderItems(SliderImages)
				setPage(0)
				break
			}
			case 'Residential': {
				setActiveTab('residential')
				setSliderItems(SliderImages.filter(el => el.cat === 'residential'))
				setPage(0)
				break
			}
			case 'Commercial': {
				setActiveTab('commercial')
				setSliderItems(SliderImages.filter(el => el.cat === 'commercial'))
				setPage(0)
				break
			}
			case 'Other': {
				setActiveTab('other')
				setSliderItems(SliderImages.filter(el => el.cat === 'other'))
				setPage(0)
				break
			}
			default: {
				setActiveTab('all')
				setSliderItems(SliderImages)
				setPage(0)
			}
		}
	}

	const slideNext = () => {
		if (page === sliderItems.length / ITEMS_PER_PAGE - 1) {
			return setPage(0)
		}

		setPage(prev => prev + 1)
	}

	const slidePrev = () => {
		if (page === 0) {
			return setPage(sliderItems.length / ITEMS_PER_PAGE - 1)
		}

		setPage(prev => prev - 1)
	}

	return (
		<section
			id='Projects'
			className='projects'
		>
			<div className='projects__wrapper'>
				<div className='projects__slider-controls'>
					<h4 className='projects__slider-controls-heading'>Projects</h4>
					<div
						onClick={clickHandler}
						className={`projects__slider-tabs projects__slider-tabs--active-tab-${activeTab}`}
					>
						<p className='projects__slider-tabs-tab'>All</p>
						<p className='projects__slider-tabs-tab'>Commercial</p>
						<p className='projects__slider-tabs-tab'>Residential</p>
						<p className='projects__slider-tabs-tab'>Other</p>
					</div>
				</div>

				<div className='projects__slider'>
					{currentItems.map(el => (
						<article
							className='projects__slider-item'
							key={el.projectName}
						>
							<div className='projects__slider-item-img-wrapper'>
								<Image
									fill
									src={el.image.src}
									blurDataURL={el.image.blurDataURL}
									alt={`${el.projectName} project image`}
								/>
							</div>
							<h5 className='projects__slider-item-heading'>
								{el.projectName}
							</h5>
							<p className='projects__slider-item-info'>{el.address}</p>
						</article>
					))}

					<div className='projects__slider-pagination'>
						<SliderButton
							size='normal'
							clickHandler={slidePrev}
							type='left'
							style={{ maxWidth: '150px' }}
						/>
						{Array(sliderItems.length / ITEMS_PER_PAGE)
							.fill(0)
							.map((_, i) => (
								<div
									key={i}
									className={
										i === page
											? 'projects__slider-pagination-item--active'
											: 'projects__slider-pagination-item'
									}
								></div>
							))}
						<SliderButton
							size='normal'
							clickHandler={slideNext}
							type='right'
							style={{ maxWidth: '150px' }}
						/>
					</div>
				</div>
			</div>
		</section>
	)
}
