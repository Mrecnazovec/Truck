import Image from 'next/image'
import { Advant } from './components/sections/Advant'
import { Banner } from './components/sections/Banner'
import { Container } from './components/ui/Container'
import { Fluid } from './components/ui/Fluid'
import { LinkItem } from './components/ui/LinkItem'
import { Title } from './components/ui/Title'
import { Service } from './components/sections/Service'
import Steps from './components/sections/Steps'
import Marquee from './components/Marquee'
import { Promo } from './components/sections/Promo'
import { Form } from './components/sections/Form'

export default function Home() {
	return (
		<main>
			<h1 className='visually-hidden'>Негабаритные грузоперевозки Циркон</h1>
			<Banner />
			<section id='about' className='mb-24'>
				<Container>
					<Title>О нас</Title>
					<Fluid>
						<p className='h3 mb-8'>
							Мы — команда единомышленников, объединенных страстью к профессии и стремлением к совершенству. Наша миссия — обеспечивать безопасные,
							надежные и оперативные перевозки грузов. Мы не просто выполняем заказы, мы создаем уникальные решения, которые выводят наших клиентов на
							новый уровень.
						</p>
						<LinkItem href='/about'>Читать далее</LinkItem>
					</Fluid>
				</Container>
			</section>
			<Advant />
			<section id='project' className='mb-24'>
				<Container>
					<Title>Наши проекты</Title>
					<Fluid>
						<Image width={1920} height={1920} alt='Грузовик' src='/jpg/gruz.jpg' className='w-full h-auto mb-7 rounded-2xl'></Image>
						<h2 className='mb-7'>Перевозка крана Mammoet</h2>
						<h3 className='mb-7 font-light'>
							Международная перевозка крана осуществлялась из Села - Бадамша (Казахстан), в город Санкт-Петербург (Россия)
						</h3>
						<h3 className='font-light'>Расстояние: 2540км</h3>
					</Fluid>
				</Container>
			</section>
			<Service />
			<Steps />
			<section className='mb-24'>
				<Container>
					<Title>Наши партнёры</Title>
				</Container>
				<Marquee/>
			</section>
			<Promo title='Мы профессионалы в сфере транспортировки негабаритных грузов!' desc='Заполните заявку, и наш менеджер свяжется с вами в кратчайшие сроки.' imgSrc='/svg/promo-bg-1.svg'></Promo>
			<Form/>
		</main>
	)
}
