import React from 'react'
import { Container } from '../ui/Container'
import { Fluid } from '../ui/Fluid'
import Image from 'next/image'
import AOSComponent from '@/app/lib/aos'

interface PromoProps {
	title: string
	desc?: string
	imgSrc: string
}

export const Promo: React.FC<PromoProps> = ({ title, desc, imgSrc }) => {
	return (
		<AOSComponent>
			<Container data-aos='fade-up' className='bg-gradient-to-r from-white sm:to-black to-white py-6 md:py-14 rounded-2xl relative mb-14'>
				<Fluid>
					<h2 className='h3 text-black font-black sm:max-w-[60%]'>{title}</h2>
					<p className='text-black font-black sm:max-w-96'>{desc}</p>
				</Fluid>
				<Image src={imgSrc} width={500} height={500} alt='Промо' className='absolute right-0 top-0 h-full w-fit hidden sm:block' />
			</Container>
		</AOSComponent>
	)
}
