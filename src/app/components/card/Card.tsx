import React, { ReactNode } from 'react'
import Image from 'next/image'
import './card.scss'

interface CardProps {
	childrenFront: ReactNode
	childrenBack: ReactNode
	imageSrc: string
	altText: string
}

export const Card: React.FC<CardProps> = ({ childrenFront, childrenBack, imageSrc, altText }) => {
	return (
		<div className='card-container'>
			<div className='card bg-secondary rounded-md w-full'>
				<div className='card-front flex flex-col items-center justify-center  gap-2 px-4 py-8'>
					<Image className='w-1/3' alt={altText} width={100} height={100} src={imageSrc} />
					{childrenFront}
				</div>
				<div className='card-back flex flex-col items-center justify-center gap-4 p-8'>{childrenBack}</div>
			</div>
		</div>
	)
}
