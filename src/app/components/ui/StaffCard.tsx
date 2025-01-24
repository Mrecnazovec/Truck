import AOSComponent from '@/app/lib/aos'
import { cn } from '@/app/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface StaffCardProps {
    imageSrc: string
    name:string
    post:string
    tel:string
    email:string
    aos:string
}

export const StaffCard: React.FC<StaffCardProps> = ({imageSrc, name, post, tel, email, aos}) => {
  return (
    <AOSComponent>
        <div data-aos={aos} className=' bg-secondary'>
        <Image className='w-full h-auto' src={imageSrc} height={300} width={400} alt='Участник Команды'/>
        <div className={cn('p-7','pt-2')}>
            <p className='font-black mb-2'>{name}</p>
            <p className='mb-5'>{post}</p>
            <div className='h-[1px] w-full bg-white opacity-70 mb-5'></div>
            <Link href={`tel:${tel}`} className='mb-2 transition-all hover:opacity-70 block'>Телефон: {tel}</Link>
            <Link className=' transition-all hover:opacity-70 block' href={`email:${email}`}>Email: {email}</Link>
        </div>
    </div>
    </AOSComponent>
  )
}
