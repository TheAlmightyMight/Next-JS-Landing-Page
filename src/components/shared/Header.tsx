'use client'
import React, { useState } from 'react'

import { TheBoxIcon } from '../icons/TheBox'
import { BurgerIcon } from '../icons/BurgerIcon'
import { CrossIcon } from '../icons/CrossIcon'

import { MobileMenu } from './MobileMenu'
import { NavList } from './NavList'

export const Header: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false)
	return (
		<header
			style={{
				backgroundColor: isOpen
					? 'hsla(0, 0%, 100%, 1)'
					: 'hsla(0, 0%, 100%, 0.8)',
			}}
			className='header'
		>
			<div className='header__wrapper'>
				<TheBoxIcon />

				{isOpen ? (
					<>
						<button
							className='header__btn'
							onClick={() => setIsOpen(false)}
						>
							<CrossIcon />
						</button>
						<MobileMenu />
					</>
				) : (
					<>
						<NavList isMobile={false} />
						<button
							className='header__btn'
							onClick={() => setIsOpen(true)}
						>
							<BurgerIcon />
						</button>
					</>
				)}
			</div>
		</header>
	)
}
