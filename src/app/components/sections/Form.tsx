'use client'

import React, { useState } from 'react'
import { Container } from '../ui/Container'
import { Title } from '../ui/Title'
import { Fluid } from '../ui/Fluid'
import { Range } from '../ui/range/Range'
import { Input } from '../ui/Input'
import { Textarea } from '../ui/Textarea'
import { Checkbox } from '../ui/checkbox/Checkbox'
import { useRouter } from 'nextjs-toploader/app'
import NextTopLoader from 'nextjs-toploader'
import AOSComponent from '@/app/lib/aos'

export const Form = () => {
	const [formData, setFormData] = useState({
		length: '',
		width: '',
		height: '',
		weight: '',
		fullName: '',
		email: '',
		phone: '',
		message: '',
		privacy: false,
	})
	const router = useRouter()
	const [error, setError] = useState<string>('')
	const [isPending, setIsPending] = useState<boolean>(false)

	const message = `Новый заказ:\nИмя: ${formData.fullName}\nНомер телефона: ${formData.phone}\nПочта: ${formData.email}\nДлина: ${formData.length} см\nШирина: ${formData.width} см\nВысота: ${formData.height} см\nВес: ${formData.weight} кг\nСообщение: ${formData.message}`

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | any>) => {
		const { name, value, type, checked } = e.target

		if (type === 'checkbox') {
			setFormData((prev) => ({ ...prev, [name]: checked }))
		} else if (name === 'phone') {
			const filteredValue = value.replace(/[^0-9+\-()]/g, '')
			setFormData((prev) => ({ ...prev, [name]: filteredValue }))
		} else {
			setFormData((prev) => ({ ...prev, [name]: value }))
		}
	}

	const handleRangeChange = (name: string, value: number) => {
		setFormData((prev) => ({ ...prev, [name]: value.toString() }))
	}

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		if (!formData.fullName) {
			setError('Поле "Имя" обязательно для заполнения')
			return
		}
		if (!formData.phone) {
			setError('Поле "Номер телефона" обязательно для заполнения')
			return
		}
		if (!formData.privacy) {
			setError('Вы должны согласиться на обработку личных данных')
			return
		}

		try {
			setIsPending(true)
			const response = await fetch('/api/telegram', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ message }),
			})

			if (response.ok) {
				setIsPending(false)
				router.push('/thanks')
			} else {
				setIsPending(false)
				router.push('/error')
			}
		} catch (error) {
			setIsPending(false)
			console.log(error)
		}
	}

	return (
		<AOSComponent>
			<Container data-aos='fade-up' className='mb-24'>
				{isPending ? (
					<NextTopLoader
						color='#fff'
						initialPosition={0.08}
						crawlSpeed={200}
						height={3}
						crawl={true}
						showSpinner={false}
						easing='ease'
						speed={200}
						shadow='0 0 10px #2299DD,0 0 5px #2299DD'
					/>
				) : (
					''
				)}
				<Title className='mb-2'>Заказать доставку</Title>
				<Fluid className='mb-24'>
					<h2>Отправьте заявку на расчет стоимости перевозки вашего груза прямо сейчас</h2>
				</Fluid>
				<Fluid>
					<form onSubmit={handleSubmit} className='flex w-full justify-between gap-6 lg:flex-row flex-col'>
						<div className='w-full'>
							<Range name='length' text='Длина груза (см)' min={0} max={6000} onChange={handleRangeChange} />
							<Range name='width' text='Ширина груза (см)' min={0} max={1000} onChange={handleRangeChange} />
							<Range name='height' text='Высота груза (см)' min={0} max={1000} onChange={handleRangeChange} />
							<Range name='weight' text='Масса груза (кг)' min={0} max={15000} onChange={handleRangeChange} />
						</div>
						<div className='w-full flex flex-col'>
							<div className='flex sm:flex-row flex-col gap-6 mb-6'>
								<Input name='fullName' placeholder='Имя*' type='text' onChange={handleChange} value={formData.fullName} />
								<Input name='email' placeholder='Email' type='email' onChange={handleChange} value={formData.email} />
							</div>
							<Input name='phone' placeholder='Номер телефона*' type='tel' className='mb-6' onChange={handleChange} value={formData.phone} />
							<Textarea name='message' placeholder='Сообщение' className='mb-7 resize-none h-40' onChange={handleChange} value={formData.message} />

							<div>
								<Checkbox
									name='privacy'
									text='Я согласен(а) на отправку и обработку личных данных'
									className={`${!error ? 'mb-6' : 'mb-1'}`}
									checked={formData.privacy}
									onChange={handleChange}
								/>
							</div>

							<div className='mb-2 text-red-500'>{error}</div>

							<button
								type='submit'
								className='rounded-md border-white border-solid border-2 text-white w-fit py-2 px-5 cursor-pointer hover:opacity-70 transition-all sm:self-end self-center'
							>
								Оставить заявку
							</button>
						</div>
					</form>
				</Fluid>
			</Container>
		</AOSComponent>
	)
}
