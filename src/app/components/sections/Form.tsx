import React from 'react'
import { Container } from '../ui/Container'
import { Title } from '../ui/Title'
import { Fluid } from '../ui/Fluid'
import { Range } from '../ui/range/Range'

export const Form = () => {
	return (
		<Container>
			<Title className='mb-2'>Заказать доставку</Title>
			<Fluid className='mb-24'>
				<h2>Отправьте заявку на расчет стоимости перевозки вашего груза прямо сейчас</h2>
			</Fluid>
			<Fluid>
				<form action="">
					<Range text='Длина груза (м)' min={0} max={60}></Range>
					<Range text='Ширина груза (м)' min={0} max={10}></Range>
					<Range text='Высота груза (м)' min={0} max={10}></Range>
					<Range text='Масса груза (т)' min={0} max={150}></Range>

				</form>
			</Fluid>
		</Container>
	)
}
