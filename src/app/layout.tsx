import type { Metadata } from 'next'
import './globals.scss'
import Navbar from './components/Navbar'
import { Footer } from './components/Footer'

export const metadata: Metadata = {
	title: 'Циркон',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru'>
			<body className='pb-28 overflow-x-hidden'>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	)
}
