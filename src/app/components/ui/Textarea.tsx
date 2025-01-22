'use client'

import { cn } from '@/app/lib/utils'
import React, { ChangeEvent, TextareaHTMLAttributes, useState } from 'react'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	name: string
	placeholder?: string
	className?: string
}

export const Textarea: React.FC<TextareaProps> = ({
	name,
	placeholder = '',
	className = '',
	...props
}) => {
	const [value, setValue] = useState<string>('')

	// const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
	// 	setValue(e.target.value)
	// }

	return (
		<textarea
			name={name}
			placeholder={placeholder}
			className={cn(
				'w-full bg-secondary rounded-md text-white text-opacity-70 p-6 outline-none',
				className
			)}
			{...props}
			// value={value}
			// onChange={handleChange}
		/>
	)
}
