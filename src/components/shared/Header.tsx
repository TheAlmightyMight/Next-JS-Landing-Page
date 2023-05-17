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
		<header className='header'>
			<div className='header__wrapper'>
				<TheBoxIcon />
				<NavList isMobile={false} />

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
					<button
						className='header__btn'
						onClick={() => setIsOpen(true)}
					>
						<BurgerIcon />
					</button>
				)}
			</div>
		</header>
	)
}
