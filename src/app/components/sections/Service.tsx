import React, { Fragment } from 'react'
import { Container } from '../ui/Container'
import { Fluid } from '../ui/Fluid'
import { Title } from '../ui/Title'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/app/lib/utils'
import { LinkItem } from '../ui/LinkItem'
import AOSComponent from '@/app/lib/aos'

interface ServiceItem {
	imageSrc: string
	title: string
	desk: string
	link: string
	linkText?: string
	order?: number
	aos?: string
}

interface ServiceProps {
	data: ServiceItem[]
	className?: string
	notTitled?: boolean
}

export const Service: React.FC<ServiceProps> = ({ data, className, notTitled }) => {
	return (
		<section className={cn('mb-24', className)}>
			<AOSComponent>
				<Container>
					{!notTitled ? <Title data-aos='fade-up'>Наши услуги</Title> : ''}
					<Fluid>
						{data.map((item, index) => (
							<div key={index} className='sm:flex items-center justify-between gap-7 mb-7' data-aos={item.aos}>
								<Image
									className={cn(
										`rounded-2xl sm:w-[45%] h-auto w-full sm:mb-0 mb-7 ${index % 2 === 0 ? 'order-0' : 'order-1'}`,
										`order-${item.order}`
									)}
									alt='Услуга'
									height={420}
									width={560}
									src={item.imageSrc}
								/>
								<div>
									<h2 className='h3 mb-7'>{item.title}</h2>
									<p className='mb-7 font-light'>{item.desk}</p>
									<LinkItem className='' href={item.link ? item.link : ''}>
										{item.linkText ? item.linkText : 'Подробнее'}
									</LinkItem>
								</div>
							</div>
						))}
					</Fluid>
				</Container>
			</AOSComponent>
		</section>
	)
}
