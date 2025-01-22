'use client'

import React, { useState, ChangeEvent, useEffect } from 'react'
import './range.scss'

interface RangeProps {
	text: string
	min: number
	max: number
}

export const Range: React.FC<RangeProps> = ({ text, min, max }) => {
	const [value, setValue] = useState<number>(min)

	useEffect(()=>{
		if (value >= max) setValue(max)
	}, [value])

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(Number(e.target.value))
	}

	return (
		<div className='bg-black text-white mb-3'>
			<label htmlFor='cargo-length' className='block text-sm font-medium'>
				{text}
			</label>

			<div className='flex items-center mt-3 gap-4'>
				<input
					type='number'
					id='cargo-length'
					value={value}
					onChange={handleChange}
					min={min}
					max={max}
					className='w-16 text-center bg-gray-900 border border-white rounded-md text-white'
				/>
			</div>

			<input type='range' min={min} max={max} value={value} name='range' step='1' onChange={handleChange} className='w-full' />

			<div className='flex justify-between mt-2 text-sm'>
				<span>{min}</span>
				<span>{max}</span>
			</div>
		</div>
	)
}