import type { Metadata } from 'next'
import './globals.scss'
import Navbar from './components/Navbar'

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
			<body>
				<Navbar />
				{children}
			</body>
		</html>
	)
}
