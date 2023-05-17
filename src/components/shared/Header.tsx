'use client'
import React, { useState } from 'react'

import { TheBoxIcon } from '../icons/TheBox'
import { BurgerIcon } from '../icons/BurgerIcon'
import { CrossIcon } from '../icons/CrossIcon'

export const Header: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false)
	return (
		<header className='header'>
			<div className='header__wrapper'>
				<TheBoxIcon />
				<nav className='header__nav'>
					<ul className='header__nav-list'>
						<li>
							<a href='#Home'>Home</a>
						</li>
						<li>
							<a href='#About'>About us</a>
						</li>
						<li>
							<a href='#Projects'>Projects</a>
						</li>
						<li>
							<a href='#Services'>Services</a>
						</li>
						<li>
							<a href='#Contact'>Contact us</a>
						</li>
					</ul>
				</nav>

				{isOpen ? (
					<button onClick={() => setIsOpen(false)}>
						<CrossIcon />
					</button>
				) : (
					<button onClick={() => setIsOpen(true)}>
						<BurgerIcon />
					</button>
				)}
			</div>
		</header>
	)
}
