import React from 'react'

import '../sass/components/_Buttons.scss'

interface Props {
	type: 'left' | 'right'
	size: 'normal' | 'large'
}
export const Button: React.FC<Props> = () => {
	return <button> </button>
}
