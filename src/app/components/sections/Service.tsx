import React, { Fragment } from 'react'
import { Container } from '../ui/Container'
import { Fluid } from '../ui/Fluid'
import { Title } from '../ui/Title'
import Image from 'next/image'
import Link from 'next/link'

export const Service = () => {
	const data = [
		{
			imageSrc: '/jpg/negab.jpg',
			title: 'Перевозка Тяжелых и Негабаритных Грузов',
			desk: 'Мы выполняем перевозки тяжелых и негабаритных грузов всеми видами транспорта, обеспечивая надежность и безопасность на каждом этапе',
			link: '/service/',
		},
		{
			imageSrc: '/jpg/takelaj.jpg',
			title: 'Такелажные Работы  ',
			desk: 'Мы предоставляем услуги такелажных работ, включая подъем, перемещение и установку тяжелого оборудования с использованием специализированной техники',
			link: '/service/',
		},
	]

	return (
		<section className='mb-24'>
			<Container>
				<Title>Наши услуги</Title>
				<Fluid>
					{data.map((item, index) => (
						<div key={index} className='sm:flex items-center justify-between gap-7 mb-7'>
							<Image
								className={`rounded-2xl sm:w-[45%] h-auto w-full sm:mb-0 mb-7 ${index % 2 === 0 ? 'order-0' : 'order-1'}`}
								alt='Услуга'
								height={420}
								width={560}
								src={item.imageSrc}
							></Image>
							<div>
								<h2 className='h3 mb-7'>{item.title}</h2>
								<p className='mb-7 font-light'>{item.desk}</p>
								<Link className='underline' href={item.link}>
									Подробнее
								</Link>
							</div>
						</div>
					))}
				</Fluid>
			</Container>
		</section>
	)
}
