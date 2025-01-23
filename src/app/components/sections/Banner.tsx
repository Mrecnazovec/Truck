import AOSComponent from '@/app/lib/aos'
import { Container } from '../ui/Container'
import { LinkItem } from '../ui/LinkItem'

export const Banner = () => {
	return (
		<section className='bg-main-bg h-screen bg-cover bg-center flex items-center justify-center mb-24'>
			<AOSComponent>
				<Container data-aos='fade-up'>
					<div className='flex items-center justify-center flex-col'>
						<p className='h4 mb-4 text-center'>
							Транспортная компания - <span className='font-bold'>Циркон</span>
						</p>
						<h1 className='mb-4 text-center sm:max-w-[90%]'>Перевозка негабаритных грузов без ограничений.</h1>
						<p className='h4 mb-8 lg:mb-24 md:mb-16 sm:mb-10 text-center'>Работаем по Китаю, России и странам СНГ</p>
						<LinkItem className='md:px-24 md:py-5' href='/form'>
							Оставить заявку
						</LinkItem>
					</div>
				</Container>
			</AOSComponent>
		</section>
	)
}
