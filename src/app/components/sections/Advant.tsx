import React from 'react'
import { Container } from '../ui/Container'
import { Title } from '../ui/Title'
import { Fluid } from '../ui/Fluid'
import { Card } from '../card/Card'

export const Advant = () => {
	const data = [
		{
			frontTitle: 'Опыт и компетентность',
			frontDesk: 'Десятилетия опыта в негабаритных перевозках',
			backDesk: 'Мы — профессионалы с многолетним опытом, которые точно знают, как справиться с любыми задачами',
			imgPath: '/svg/Capa_1.svg',
		},
		{
			frontTitle: 'Работа 24/7',
			frontDesk: 'Команда экспертов, готовая работать круглосуточно',
			backDesk: 'Наша команда — это не просто специалисты, а настоящие мастера своего дела, которые готовы работать в любое время дня и ночи',
			imgPath: '/svg/Capa_2.svg',
		},
		{
			frontTitle: 'Индивидуальный подход',
			frontDesk: 'Уникальные маршруты и гарантированный результат',
			backDesk:
				'Мы создаём индивидуальные маршруты, которые учитывают все особенности вашего груза и обеспечивают его безопасную и своевременную доставку',
			imgPath: '/svg/Capa_3.svg',
		},
		{
			frontTitle: 'Безопасность',
			frontDesk: 'Современные технологии и контроль на всех этапах',
			backDesk: 'Мы используем самые передовые технологии и системы контроля, чтобы гарантировать безопасность вашего груза на каждом этапе пути',
			imgPath: '/svg/Capa_4.svg',
		},
		{
			frontTitle: 'Широкий спектр услуг',
			frontDesk: 'Полный цикл услуг, включая мультимодальные перевозки',
			backDesk:
				'Мы предоставляем услуги перевозки "под ключ" — от погрузки до выгрузки, включая мультимодальные маршруты для оптимизации времени и ресурсов',
			imgPath: '/svg/Capa_5.svg',
		},
		{
			frontTitle: 'Репутация и доверие',
			frontDesk: 'Положительные отзывы клиентов и проверенные партнеры',
			backDesk:
				'Мы гордимся репутацией и доверительными отношениями с партнёрами, которые уже много лет доверяют нам свои грузы',
			imgPath: '/svg/Capa_6.svg',
		},
	]

	return (
		<section>
			<Container>
				<Title className='mb-20'>Наши преимущества</Title>
				<Fluid className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
					{data.map((item, index) => (
						<Card
							key={index}
							imageSrc={item.imgPath}
							altText={item.frontTitle}
							childrenFront={
								<>
									<p className='h4 font-bold text-center'>{item.frontTitle}</p>
									<p className='text-center'>{item.frontDesk}</p>
								</>
							}
							childrenBack={<p className='text-center'>{item.backDesk}</p>}
						/>
					))}
				</Fluid>
			</Container>
		</section>
	)
}
