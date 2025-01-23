import React from 'react'
import { Service } from '../components/sections/Service'

const page = () => {
	return (
		<main className='flex-1 pt-24'>
			<Service
				data={[
					{
						imageSrc: '/jpg/negab.jpg',
						title: 'Перевозка Тяжелых и Негабаритных Грузов',
						desk: 'Мы выполняем перевозки тяжелых и негабаритных грузов всеми видами транспорта, обеспечивая надежность и безопасность на каждом этапе',
						link: '/services/oversized',
						aos:'fade-right'
					},
					{
						imageSrc: '/jpg/takelaj.jpg',
						title: 'Такелажные Работы  ',
						desk: 'Мы предоставляем услуги такелажных работ, включая подъем, перемещение и установку тяжелого оборудования с использованием специализированной техники',
						link: '/services/rigging',
						aos:'fade-left'
					},
				]}
			/>
		</main>
	)
}

export default page
