'use client'

import React, { useState } from 'react'
import { Container } from '../ui/Container'
import { Title } from '../ui/Title'
import { Fluid } from '../ui/Fluid'
import Link from 'next/link'
import AOSComponent from '@/app/lib/aos'

interface MapInterface {
	title: string
}

export const Map: React.FC<MapInterface> = ({ title }) => {
	const [state, setState] = useState<number>(0)

	return (
		<section id='contacts' className='mb-24'>
			<AOSComponent>
				<Container data-aos='fade-up'>
					<Title>{title}</Title>
					<Fluid className='lg:flex justify-between '>
						<div className='flex flex-col sm:flex-row lg:flex-wrap lg:gap-6'>
							<div
								onClick={() => setState(0)}
								className={`w-full sm:w-1/2 lg:w-full lg:max-w-72 rounded-md cursor-pointer transition-all border-solid border-2 ${
									state == 0 ? 'bg-secondary border-white' : 'bg-transparent  border-transparent'
								}`}
							>
								<div className='p-7'>
									<p className='h4 mb-6'>Москва</p>
									<div className='w-1/4 bg-white h-1 mb-7'></div>
									<div className='flex items-center gap-3 mb-7'>
										<svg width='18' height='26' viewBox='0 0 18 26' fill='none' xmlns='http://www.w3.org/2000/svg'>
											<path
												d='M9 12.4C8.14752 12.4 7.32995 12.0839 6.72716 11.5213C6.12436 10.9587 5.78571 10.1957 5.78571 9.4C5.78571 8.60435 6.12436 7.84129 6.72716 7.27868C7.32995 6.71607 8.14752 6.4 9 6.4C9.85248 6.4 10.67 6.71607 11.2728 7.27868C11.8756 7.84129 12.2143 8.60435 12.2143 9.4C12.2143 9.79397 12.1311 10.1841 11.9696 10.5481C11.8081 10.912 11.5713 11.2427 11.2728 11.5213C10.9744 11.7999 10.62 12.0209 10.2301 12.1716C9.84008 12.3224 9.42211 12.4 9 12.4ZM9 1C6.61305 1 4.32387 1.885 2.63604 3.4603C0.948211 5.03561 0 7.17218 0 9.4C0 15.7 9 25 9 25C9 25 18 15.7 18 9.4C18 7.17218 17.0518 5.03561 15.364 3.4603C13.6761 1.885 11.3869 1 9 1Z'
												fill='white'
											/>
										</svg>
										<p>Россия, Москва, Улица .</p>
									</div>
									<Link href='mailto:info@info.ru' className='flex items-center gap-3 mb-7 hover:opacity-70 transition-all'>
										<svg width='18' height='16' viewBox='0 0 18 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
											<path
												d='M16.2 4.1L9 8.6L1.8 4.1V2.3L9 6.8L16.2 2.3M16.2 0.5H1.8C0.801 0.5 0 1.301 0 2.3V13.1C0 13.5774 0.189642 14.0352 0.527208 14.3728C0.864773 14.7104 1.32261 14.9 1.8 14.9H16.2C16.6774 14.9 17.1352 14.7104 17.4728 14.3728C17.8104 14.0352 18 13.5774 18 13.1V2.3C18 1.301 17.19 0.5 16.2 0.5Z'
												fill='white'
											/>
										</svg>
										<p>info@info.ru</p>
									</Link>
									<div className='flex items-center gap-3'>
										<svg width='18' height='20' viewBox='0 0 18 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
											<path
												d='M3.62 9.19039C5.06 12.0204 7.38 14.3404 10.21 15.7804L12.41 13.5804C12.69 13.3004 13.08 13.2204 13.43 13.3304C14.55 13.7004 15.75 13.9004 17 13.9004C17.2652 13.9004 17.5196 14.0058 17.7071 14.1933C17.8946 14.3809 18 14.6352 18 14.9004V18.4004C18 18.6656 17.8946 18.92 17.7071 19.1075C17.5196 19.2951 17.2652 19.4004 17 19.4004C12.4913 19.4004 8.1673 17.6094 4.97919 14.4212C1.79107 11.2331 0 6.90907 0 2.40039C0 2.13518 0.105357 1.88082 0.292893 1.69329C0.48043 1.50575 0.734784 1.40039 1 1.40039H4.5C4.76522 1.40039 5.01957 1.50575 5.20711 1.69329C5.39464 1.88082 5.5 2.13518 5.5 2.40039C5.5 3.65039 5.7 4.85039 6.07 5.97039C6.18 6.32039 6.1 6.71039 5.82 6.99039L3.62 9.19039Z'
												fill='white'
											/>
										</svg>
										<div>
											<Link href='tel:+78431234567' className='block hover:opacity-70 transition-all'>
												+7 (843) 123-45-67
											</Link>
											<Link href='tel:+78431234567' className='block hover:opacity-70 transition-all'>
												+7 (843) 123-45-67
											</Link>
										</div>
									</div>
								</div>
							</div>
							<div
								onClick={() => setState(1)}
								className={`w-full sm:w-1/2 lg:w-full lg:max-w-72 rounded-md cursor-pointer transition-all border-solid border-2 ${
									state == 1 ? 'bg-secondary border-white' : 'bg-transparent border-transparent'
								}`}
							>
								<div className='p-7'>
									<p className='h4 mb-6'>Казань</p>
									<div className='w-1/4 bg-white h-1 mb-7'></div>
									<div className='flex items-center gap-3 mb-7'>
										<svg width='18' height='26' viewBox='0 0 18 26' fill='none' xmlns='http://www.w3.org/2000/svg'>
											<path
												d='M9 12.4C8.14752 12.4 7.32995 12.0839 6.72716 11.5213C6.12436 10.9587 5.78571 10.1957 5.78571 9.4C5.78571 8.60435 6.12436 7.84129 6.72716 7.27868C7.32995 6.71607 8.14752 6.4 9 6.4C9.85248 6.4 10.67 6.71607 11.2728 7.27868C11.8756 7.84129 12.2143 8.60435 12.2143 9.4C12.2143 9.79397 12.1311 10.1841 11.9696 10.5481C11.8081 10.912 11.5713 11.2427 11.2728 11.5213C10.9744 11.7999 10.62 12.0209 10.2301 12.1716C9.84008 12.3224 9.42211 12.4 9 12.4ZM9 1C6.61305 1 4.32387 1.885 2.63604 3.4603C0.948211 5.03561 0 7.17218 0 9.4C0 15.7 9 25 9 25C9 25 18 15.7 18 9.4C18 7.17218 17.0518 5.03561 15.364 3.4603C13.6761 1.885 11.3869 1 9 1Z'
												fill='white'
											/>
										</svg>
										<p>Россия, Москва, Улица .</p>
									</div>
									<Link href='mailto:info@info.ru' className='flex items-center gap-3 mb-7 hover:opacity-70 transition-all'>
										<svg width='18' height='16' viewBox='0 0 18 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
											<path
												d='M16.2 4.1L9 8.6L1.8 4.1V2.3L9 6.8L16.2 2.3M16.2 0.5H1.8C0.801 0.5 0 1.301 0 2.3V13.1C0 13.5774 0.189642 14.0352 0.527208 14.3728C0.864773 14.7104 1.32261 14.9 1.8 14.9H16.2C16.6774 14.9 17.1352 14.7104 17.4728 14.3728C17.8104 14.0352 18 13.5774 18 13.1V2.3C18 1.301 17.19 0.5 16.2 0.5Z'
												fill='white'
											/>
										</svg>
										<p>info@info.ru</p>
									</Link>
									<div className='flex items-center gap-3'>
										<svg width='18' height='20' viewBox='0 0 18 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
											<path
												d='M3.62 9.19039C5.06 12.0204 7.38 14.3404 10.21 15.7804L12.41 13.5804C12.69 13.3004 13.08 13.2204 13.43 13.3304C14.55 13.7004 15.75 13.9004 17 13.9004C17.2652 13.9004 17.5196 14.0058 17.7071 14.1933C17.8946 14.3809 18 14.6352 18 14.9004V18.4004C18 18.6656 17.8946 18.92 17.7071 19.1075C17.5196 19.2951 17.2652 19.4004 17 19.4004C12.4913 19.4004 8.1673 17.6094 4.97919 14.4212C1.79107 11.2331 0 6.90907 0 2.40039C0 2.13518 0.105357 1.88082 0.292893 1.69329C0.48043 1.50575 0.734784 1.40039 1 1.40039H4.5C4.76522 1.40039 5.01957 1.50575 5.20711 1.69329C5.39464 1.88082 5.5 2.13518 5.5 2.40039C5.5 3.65039 5.7 4.85039 6.07 5.97039C6.18 6.32039 6.1 6.71039 5.82 6.99039L3.62 9.19039Z'
												fill='white'
											/>
										</svg>
										<div>
											<Link href='tel:+78431234567' className='block hover:opacity-70 transition-all'>
												+7 (843) 123-45-67
											</Link>
											<Link href='tel:+78431234567' className='block hover:opacity-70 transition-all'>
												+7 (843) 123-45-67
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className='w-full h-80 lg:h-auto rounded-2xl relative overflow-hidden hidden sm:block'>
							{state == 0 ? (
								<iframe
									src='https://yandex.uz/map-widget/v1/?ll=37.869222%2C55.744575&z=9.58'
									width='100%'
									height='100%'
									style={{ border: 0 }}
									allowFullScreen
									loading='lazy'
								></iframe>
							) : (
								<iframe
									src='https://yandex.uz/map-widget/v1/?ll=49.099982%2C55.767306&z=9.58'
									width='100%'
									height='100%'
									style={{ border: 0 }}
									allowFullScreen
									loading='lazy'
								></iframe>
							)}
						</div>
					</Fluid>
				</Container>
				<div data-aos='fade-up' className='w-full h-80 lg:h-auto relative overflow-hidden block sm:hidden'>
					{state == 0 ? (
						<iframe
							src='https://yandex.uz/map-widget/v1/?ll=37.869222%2C55.744575&z=9.58'
							width='100%'
							height='100%'
							style={{ border: 0 }}
							allowFullScreen
							loading='lazy'
						></iframe>
					) : (
						<iframe
							src='https://yandex.uz/map-widget/v1/?ll=49.099982%2C55.767306&z=9.58'
							width='100%'
							height='100%'
							style={{ border: 0 }}
							allowFullScreen
							loading='lazy'
						></iframe>
					)}
				</div>
			</AOSComponent>
		</section>
	)
}
