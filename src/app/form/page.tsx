import React from 'react'
import { Form } from '../components/sections/Form'
import { Promo } from '../components/sections/Promo'

const FormPage = () => {
	return (
		<main className='flex-1 flex flex-col items-center justify-center pt-24'>
			<Promo
				title='Мы профессионалы в сфере транспортировки негабаритных грузов!'
				desc='Заполните заявку, и наш менеджер свяжется с вами в кратчайшие сроки.'
				imgSrc='/svg/promo-bg-1.svg'
			></Promo>
			<Form />
		</main>
	)
}

export default FormPage
