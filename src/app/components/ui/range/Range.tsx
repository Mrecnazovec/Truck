'use client'

import React, { ChangeEvent, useEffect, useState } from 'react'
import './range.scss'

interface RangeProps {
	text: string
	min: number
	max: number
	name: string
	onChange: (name: string, value: number) => void // Callback для передачи данных родителю
}

export const Range: React.FC<RangeProps> = ({ text, min, max, name, onChange, ...props }) => {
	const [value, setValue] = useState<string>(min.toString()) // Храним значение как строку

	useEffect(() => {
		const numericValue = Number(value)
		if (numericValue > max) setValue(max.toString())
		if (numericValue < min) setValue(min.toString())
	}, [value, min, max])

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const inputValue = e.target.value

		// Разрешаем только числа или пустую строку
		if (/^\d*$/.test(inputValue)) {
			setValue(inputValue) // Обновляем состояние
			onChange(name, Number(inputValue) || 0) // Передаем числовое значение или 0
		}
	}

	return (
		<div className='bg-black text-white mb-3'>
			<label htmlFor={name} className='block text-sm font-medium'>
				{text}
			</label>

			<div className='flex items-center mt-3 gap-4'>
				<input
					type='number'
					id={name}
					name={name}
					value={value}
					onChange={handleChange}
					min={min}
					max={max}
					className='w-16 text-center bg-gray-900 border border-white rounded-md text-white'
				/>
			</div>

			<input
				type='range'
				min={min}
				max={max}
				value={value || min} // Убедитесь, что value всегда корректное
				name='range'
				step='50'
				onChange={(e) => handleChange(e as ChangeEvent<HTMLInputElement>)}
				className='w-full'
			/>

			<div className='flex justify-between mt-2 text-sm'>
				<span>{min}</span>
				<span>{max}</span>
			</div>
		</div>
	)
}
