import React from 'react'
import { Container } from '../ui/Container'
import { Title } from '../ui/Title'
import { Fluid } from '../ui/Fluid'
import { Card } from '../card/Card'

export const Advant = () => {
	const data = [
		{
			childrenFront: 'Опыт и компетентность',
			frontDesk: 'Десятилетия опыта в негабаритных перевозках',
			childrenBack: 'Мы — профессионалы с многолетним опытом, которые точно знают, как справиться с любыми задачами',
			imageSrc: '/svg/Capa_1.svg',
		},
		{
			childrenFront: 'Работа 24/7',
			frontDesk: 'Команда экспертов, готовая работать круглосуточно',
			childrenBack: 'Наша команда — это не просто специалисты, а настоящие мастера своего дела, которые готовы работать в любое время дня и ночи',
			imageSrc: '/svg/Capa_2.svg',
		},
		{
			childrenFront: 'Индивидуальный подход',
			frontDesk: 'Уникальные маршруты и гарантированный результат',
			childrenBack:
				'Мы создаём индивидуальные маршруты, которые учитывают все особенности вашего груза и обеспечивают его безопасную и своевременную доставку',
			imageSrc: '/svg/Capa_3.svg',
		},
		{
			childrenFront: 'Безопасность',
			frontDesk: 'Современные технологии и контроль на всех этапах',
			childrenBack: 'Мы используем самые передовые технологии и системы контроля, чтобы гарантировать безопасность вашего груза на каждом этапе пути',
			imageSrc: '/svg/Capa_4.svg',
		},
		{
			childrenFront: 'Широкий спектр услуг',
			frontDesk: 'Полный цикл услуг, включая мультимодальные перевозки',
			childrenBack:
				'Мы предоставляем услуги перевозки "под ключ" — от погрузки до выгрузки, включая мультимодальные маршруты для оптимизации времени и ресурсов',
			imageSrc: '/svg/Capa_5.svg',
		},
		{
			childrenFront: 'Репутация и доверие',
			frontDesk: 'Положительные отзывы клиентов и проверенные партнеры',
			childrenBack:
				'Мы гордимся репутацией и доверительными отношениями с партнёрами, которые уже много лет доверяют нам свои грузы',
			imageSrc: '/svg/Capa_6.svg',
		},
	]

	return (
		<section className='mb-24'>
			<Container>
				<Title >Наши преимущества</Title>
				<Fluid className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
					{data.map((item, index) => (
						<Card
							key={index}
							imageSrc={item.imageSrc}
							altText={item.childrenFront}
							childrenFront={
								<>
									<p className='h4 font-bold text-center'>{item.childrenFront}</p>
									<p className='text-center'>{item.frontDesk}</p>
								</>
							}
							childrenBack={<p className='text-center'>{item.childrenBack}</p>}
						/>
					))}
				</Fluid>
			</Container>
		</section>
	)
}
