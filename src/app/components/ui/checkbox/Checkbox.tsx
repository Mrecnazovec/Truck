import React, { InputHTMLAttributes } from 'react'
import './checkbox.scss'
import { cn } from '@/app/lib/utils'

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
	text: string
	name: string
	className: string
	checked: boolean
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Checkbox: React.FC<CheckboxProps> = ({ text, name, className, checked, onChange }) => {
	return (
		<div className={cn('', className)}>
			<input
				type='checkbox'
				id={name}
				className={cn('custom-checkbox cursor-pointer')}
				name={name}
				value='yes'
				checked={checked}
				onChange={onChange} // Обрабатываем изменение
			/>
			<label className='cursor-pointer' htmlFor={name}>
				{text}
			</label>
		</div>
	)
}
