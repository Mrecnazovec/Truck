import { Card } from './components/card/Card'
import { Advant } from './components/sections/Advant'
import { Banner } from './components/sections/Banner'
import { Container } from './components/ui/Container'
import { Fluid } from './components/ui/Fluid'
import { LinkItem } from './components/ui/LinkItem'
import { Title } from './components/ui/Title'

export default function Home() {
	return (
		<main>
			<Banner />
			<section className='mb-24'>
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
		</main>
	)
}
