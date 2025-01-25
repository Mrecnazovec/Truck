import React, { HTMLAttributes } from 'react'
import { Fluid } from './Fluid'
import { cn } from '@/app/lib/utils'

interface TitleProps extends HTMLAttributes<HTMLDivElement> {}

export const Title: React.FC<TitleProps> = ({ children, className, ...props }) => {
	return (
		<Fluid  className={cn('relative mb-5', className)} {...props}>
			<span className='absolute 2xl:w-24 xl:w-10 w-5 h-1 bg-white 2xl:-left-24 xl:-left-10 -left-2 top-1/2'></span>
			<h1 className='font-black font-raleway'>{children}</h1>
		</Fluid>
	)
}
