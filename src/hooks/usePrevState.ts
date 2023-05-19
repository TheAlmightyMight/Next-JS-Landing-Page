import React, { useState, useRef, useEffect } from 'react'

export const usePrevState = <T>(
	initialState: T,
): [T, React.Dispatch<React.SetStateAction<T>>, () => T] => {
	const [state, setState] = useState<T>(initialState)
	const prevStateRef = useRef(initialState)

	useEffect(() => {
		prevStateRef.current = state
	}, [state])

	function getPrevState() {
		return prevStateRef.current
	}

	return [state, setState, getPrevState]
}
