'use client'
import React, { useEffect, useState } from 'react'

type TabCategory = 'all' | 'other' | 'commercial' | 'residential'

export const Projects: React.FC = () => {
	const [activeTab, setActiveTab] = useState<TabCategory>('all')

	const clickHandler = (e: React.PointerEvent<HTMLParagraphElement>) => {
		const target = e.target as HTMLParagraphElement
		switch (target.textContent) {
			case 'All': {
				setActiveTab('all')
				break
			}
			case 'Residential': {
				setActiveTab('residential')
				break
			}
			case 'Commercial': {
				setActiveTab('commercial')
				break
			}
			case 'Other': {
				setActiveTab('other')
				break
			}
			default: {
				setActiveTab('all')
			}
		}
	}

	useEffect(() => {
		console.log(activeTab)
	}, [activeTab])

	return (
		<section className='projects'>
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
				<div className='projects__slider'></div>
			</div>
		</section>
	)
}
