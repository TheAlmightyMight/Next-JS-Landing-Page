'use client'

export default function GlobalError({
	error,
	reset,
}: {
	error: Error
	reset: () => void
}) {
	return (
		<html>
			<body>
				<h2>An error {error.name} has ocurred!</h2>
				<button onClick={() => reset()}>Try again</button>
			</body>
		</html>
	)
}
