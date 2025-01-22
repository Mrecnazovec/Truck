'use client'

import { cn } from '@/app/lib/utils'
import React, { ChangeEvent, InputHTMLAttributes, useState } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	name: string
	placeholder?: string
	className?: string
}

export const Input: React.FC<InputProps> = ({ name, placeholder = '', className = '', type = 'text', ...props }) => {
	const [value, setValue] = useState<string>('')

	// const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
	// 	setValue(e.target.value)
	// }

	return (
		<input
			name={name}
			placeholder={placeholder}
			type={type}
			className={cn('w-full bg-secondary rounded-md text-white text-opacity-70 p-6 outline-none', className)}
			{...props}
			// value={value}
			// onChange={handleChange}
		/>
	)
}
