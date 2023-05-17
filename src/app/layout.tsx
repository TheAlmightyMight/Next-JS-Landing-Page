import '../sass/main.scss'
import { Metadata } from 'next'
import { Work_Sans } from 'next/font/google'

const font = Work_Sans({
	subsets: ['latin-ext'],
	weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
	title: 'The Box',
	description: 'The Box building company',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	console.log(font.className)
	return (
		<html lang='en'>
			<body className={font.className}>{children}</body>
		</html>
	)
}
