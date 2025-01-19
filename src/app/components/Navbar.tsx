'use client'

import Link from 'next/link'
import { LinkItem } from './ui/LinkItem'
import { Logo } from './ui/Logo'
import React, { useState, useEffect } from 'react'
import { Container } from './ui/Container'

const Navbar: React.FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const [navbarColor, setNavbarColor] = useState('bg-transparent')

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen)
	}

	const closeMenu = () => {
		setIsMenuOpen(false)
	}
	const handleScroll = () => {
		if (window.scrollY > 50) {
			setNavbarColor('bg-secondary')
		} else {
			setNavbarColor('bg-transparent')
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<div className={`${navbarColor} fixed left-1/2 transform -translate-x-1/2 py-3 transition-all duration-300 w-full z-10`}>
			<Container>
				<div
					className={`absolute inset-0 w-full transform transition-transform duration-300 -z-10 ${
						isMenuOpen ? 'translate-x-0 bg-secondary' : 'translate-x-full bg-transparent'
					}`}
				></div>
				<nav className='flex justify-between items-center text-white'>
					<Logo />
					<ul className='hidden sm:flex gap-8 sm:translate-x-0'>
						<li className='hover:opacity-70 transition-all'>
							<Link href='/about'>О нас</Link>
						</li>
						<li className='hover:opacity-70 transition-all'>
							<Link href='/services'>Услуги</Link>
						</li>
						<li>
							<LinkItem href='/form'>Оставить заявку</LinkItem>
						</li>
					</ul>
					<button className='sm:hidden relative w-8 h-4 flex flex-col justify-between items-center' onClick={toggleMenu} aria-label='Toggle Menu'>
						<span
							className={`w-full h-0.5 bg-white rounded-lg transform transition duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}
						></span>
						<span className={`w-full h-0.5 bg-white rounded-lg transition duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
						<span
							className={`w-full h-0.5 bg-white rounded-lg transform transition duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}
						></span>
					</button>

					<ul
						className={`sm:hidden fixed top-14 right-0 text-white w-full pb-6 shadow-lg transform transition-transform duration-300 h-screen ${
							isMenuOpen ? 'translate-x-0 bg-secondary' : 'translate-x-full bg-transparent'
						}`}
					>
						<li className='p-4 border-b border-gray-700 text-center'>
							<Link href='/about' onClick={closeMenu}>
								О нас
							</Link>
						</li>
						<li className='p-4 border-b border-gray-700 text-center mb-6'>
							<Link href='/services' onClick={closeMenu}>
								Услуги
							</Link>
						</li>
						<li className='text-center'>
							<LinkItem href='/form' onClick={closeMenu}>
								Оставить заявку
							</LinkItem>
						</li>
					</ul>
				</nav>
			</Container>
		</div>
	)
}

export default Navbar
