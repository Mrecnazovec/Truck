import type { Metadata } from 'next'
import './globals.scss'
import Navbar from './components/Navbar'
import { Footer } from './components/Footer'
import NextTopLoader from 'nextjs-toploader'
import SmoothScroll from './lib/SmoothScroll'

export const metadata: Metadata = {
	title: 'Циркон',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html className='overflow-x-hidden scroll-smooth' lang='ru'>
			{process.env.NEXT_PUBLIC_IS_PAYED === 'true' ? (
				<body className='pb-14 overflow-x-hidden min-h-screen flex flex-col'>
					<NextTopLoader
						color='#fff'
						initialPosition={0.08}
						crawlSpeed={200}
						height={3}
						crawl={true}
						showSpinner={false}
						easing='ease'
						speed={200}
						shadow='0 0 10px #2299DD,0 0 5px #2299DD'
					/>
					<Navbar />
					<SmoothScroll>{children}</SmoothScroll>
					<Footer />
				</body>
			) : (
				<body className='h-screen flex justify-center items-center'>
					<h1 className='text-center'>Работа сайта приостановлена</h1>
				</body>
			)}
		</html>
	)
}
