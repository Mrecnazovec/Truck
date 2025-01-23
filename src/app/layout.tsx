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
		<html className='overflow-x-hidden' lang='ru'>
			<body className='pb-24 overflow-x-hidden min-h-screen flex flex-col'>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	)
}
