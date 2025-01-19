import { Container } from '../ui/Container'
import { Fluid } from '../ui/Fluid'
import { Title } from '../ui/Title'

export default function Steps() {
	return (
		<Container>
			<Title>Этапы работы с нами</Title>
			<Fluid>
				<div className='md:flex md:gap-12 gap-8 grid grid-cols-2 bg-black text-white rounded-lg'>
					<div className='md:w-1/4 relative'>
						<div className='w-10 h-10 flex items-center justify-center border-2 border-white rounded-full bg-white text-black font-bold mb-2'>1</div>
						<h2 className='mb-2 h4 font-bold'>Общение</h2>
						<p className='font-light'>Находим способы решить ваш вопрос по перевозке вашего груза</p>
						<div className='absolute top-5 md:left-11 left-8 w-full h-[2px] bg-white'></div>
					</div>
					<div className='md:w-1/4 relative'>
						<div className='w-10 h-10 flex items-center justify-center border-2 border-white rounded-full bg-white text-black font-bold mb-2'>2</div>
						<h2 className='mb-2 h4 font-bold'>Расчет стоимости</h2>
						<p className='font-light'>Просчитываем расстояние, вес и габариты груза</p>
						<div className='absolute top-5 left-11 w-full h-[2px] bg-white md:visible invisible'></div>
					</div>
					<div className='md:w-1/4 relative'>
						<div className='w-10 h-10 flex items-center justify-center border-2 border-white rounded-full bg-white text-black font-bold mb-2'>3</div>
						<h2 className='mb-2 h4 font-bold'>Договор</h2>
						<p className='font-light'>Подписываем двусторонний договор для безопасной перевозки вашего груза</p>
						<div className='absolute top-5 md:left-11 left-8 w-full h-[2px] bg-white'></div>
					</div>
					<div className='md:w-1/4 relative'>
						<div className='w-10 h-10 flex items-center justify-center border-2 border-white rounded-full bg-white text-black font-bold mb-2'>4</div>
						<h2 className='mb-2 h4 font-bold'>Доставка вашего груза</h2>
						<p className='font-light'>Привозим ваш груз точно в срок</p>
					</div>
				</div>
			</Fluid>
		</Container>
	)
}
