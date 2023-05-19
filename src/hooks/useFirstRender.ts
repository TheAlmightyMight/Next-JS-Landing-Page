import React, { useState, useRef, useEffect } from 'react'

export const useFirstRender = () => {
	const ref = useRef(true)

	useEffect(() => {
		if (ref.current) {
			ref.current = false
		}
	})

	return ref.current
}
