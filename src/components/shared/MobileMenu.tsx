import React from 'react'

import { NavList } from './NavList'

interface Props {}
export const MobileMenu: React.FC<Props> = () => {
	return (
		<div className='header__mo'>
			<NavList isMobile />
		</div>
	)
}
