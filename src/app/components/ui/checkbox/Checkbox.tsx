import React, { InputHTMLAttributes } from 'react'
import './checkbox.scss'
import { cn } from '@/app/lib/utils'

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
	text: string
	name: string
	className: string
}

export const Checkbox: React.FC<CheckboxProps> = ({text, name, className}) => {
	return (
		<div className={cn('', className)}>
			<input type="checkbox" id='checkbox' className={cn('custom-checkbox cursor-pointer')} name={name} value="yes"/>
			<label className='cursor-pointer' htmlFor='checkbox'>{text}</label>
		</div>
	)
}
