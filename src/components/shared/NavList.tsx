import React from 'react'

interface Props {
	isMobile: boolean
}
export const NavList: React.FC<Props> = ({ isMobile }) => {
	return (
		<nav
			style={{ display: isMobile ? 'block' : '' }}
			className='header__nav'
		>
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
	)
}
