import React from 'react'

import { createPortal } from 'react-dom'

import { NavList } from './NavList'

interface Props {}
export const MobileMenu: React.FC<Props> = () => {
	return createPortal(
		<div className='header__mobile-menu'>
			<NavList isMobile />
		</div>,
		document.querySelector('main')!,
	)
}
