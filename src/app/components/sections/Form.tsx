'use client'

import React, { useState } from 'react'
import { Container } from '../ui/Container'
import { Title } from '../ui/Title'
import { Fluid } from '../ui/Fluid'
import { Range } from '../ui/range/Range'
import { Input } from '../ui/Input'
import { Textarea } from '../ui/Textarea'
import { Checkbox } from '../ui/checkbox/Checkbox'
import { redirect, useRouter } from 'next/navigation'

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
	})
	const router = useRouter()

	const message = `Новый заказ:\nИмя: ${formData.fullName}\nНомер телефона: ${formData.phone}\nПочта: ${formData.email}\nДлина: ${formData.length}\nШирина: ${formData.width}\nВысота: ${formData.height}\nВес: ${formData.weight}\nСообщение: ${formData.message}`

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target
		setFormData((prev) => ({ ...prev, [name]: value }))
	}

	// Функция для обработки изменений значений из Range
	const handleRangeChange = (name: string, value: number) => {
		setFormData((prev) => ({ ...prev, [name]: value.toString() }))
	}

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		try {
			const response = await fetch('/api/telegram', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ message }),
			})

			const result = await response.json()
			if (response.ok) {
				router.push('/thanks')
				
			} else {
				alert('Ошибка при отправке сообщения')
			}
		} catch (error) {
			console.log(error);
			
		}
	}

	return (
		<Container className='mb-24'>
			<Title className='mb-2'>Заказать доставку</Title>
			<Fluid className='mb-24'>
				<h2>Отправьте заявку на расчет стоимости перевозки вашего груза прямо сейчас</h2>
			</Fluid>
			<Fluid>
				<form onSubmit={handleSubmit} className='flex w-full justify-between gap-6 lg:flex-row flex-col'>
					<div className='w-full'>
						<Range
							name='length'
							text='Длина груза (м)'
							min={0}
							max={60}
							onChange={handleRangeChange} // Передаем обработчик изменений
						/>
						<Range name='width' text='Ширина груза (м)' min={0} max={10} onChange={handleRangeChange} />
						<Range name='height' text='Высота груза (м)' min={0} max={10} onChange={handleRangeChange} />
						<Range name='weight' text='Масса груза (т)' min={0} max={150} onChange={handleRangeChange} />
					</div>
					<div className='w-full flex flex-col'>
						<div className='flex sm:flex-row flex-col gap-6 mb-6'>
							<Input name='fullName' placeholder='Имя*' type='text' onChange={handleChange} value={formData.fullName} required />
							<Input name='email' placeholder='Email' type='email' onChange={handleChange} value={formData.email} />
						</div>
						<Input name='phone' placeholder='Номер телефона*' type='tel' className='mb-6' onChange={handleChange} value={formData.phone} required />
						<Textarea name='message' placeholder='Сообщение' className='mb-7 resize-none h-40' onChange={handleChange} value={formData.message} />

						<div>
							<Checkbox name='privacy' text='Я согласен(а) на отправку и обработку личных данных' className='mb-6' required />
						</div>

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
	)
}
