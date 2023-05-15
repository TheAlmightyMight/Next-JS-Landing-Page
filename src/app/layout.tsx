import '../sass/main.scss'
import { Metadata } from 'next'
import { Work_Sans } from 'next/font/google'

const font = Work_Sans({ subsets: ['latin-ext'] })

export const metadata: Metadata = {
	title: 'The Box',
	description: 'The Box building company',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={font.className}>{children}</body>
		</html>
	)
}
