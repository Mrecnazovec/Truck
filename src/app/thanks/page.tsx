import Link from 'next/link'
import { Container } from '../components/ui/Container'

const Thanks = () => {
	return (
		<main className='flex-1 flex items-center justify-center'>
			<Container className='flex flex-col items-center justify-center max-w-4xl'>
				<svg className='mb-7 lg:w-52 lg:h-52 md:w-36 md:h-36 w-24 h-24' width='200' height='200' viewBox='0 0 200 200' fill='none' xmlns='http://www.w3.org/2000/svg'>
					<path
						d='M170.711 29.2895C151.823 10.4016 126.711 0 99.9996 0C73.2879 0 48.1766 10.4016 29.2895 29.2895C10.4016 48.1766 0 73.2887 0 99.9996C0 126.711 10.4016 151.823 29.2895 170.711C48.1766 189.598 73.2887 200 99.9996 200C126.711 200 151.823 189.598 170.711 170.711C189.598 151.823 200 126.711 200 99.9996C200 73.2883 189.598 48.1766 170.711 29.2895ZM166.295 166.295C148.587 184.003 125.043 193.755 99.9996 193.755C74.957 193.755 51.4125 184.002 33.7047 166.295C15.9969 148.587 6.24492 125.043 6.24492 99.9996C6.24492 74.9562 15.9973 51.4129 33.7055 33.7051C51.4137 15.9973 74.957 6.24492 99.9996 6.24492C125.043 6.24492 148.587 15.9969 166.295 33.7047C184.002 51.4125 193.755 74.957 193.755 99.9996C193.755 125.042 184.002 148.587 166.295 166.295Z'
						fill='white'
					/>
					<path
						d='M99.9996 24.0371C58.1137 24.0371 24.0371 58.1137 24.0371 99.9992C24.0371 141.885 58.1137 175.961 99.9996 175.961C141.886 175.961 175.962 141.885 175.962 99.9992C175.962 58.1133 141.886 24.0371 99.9996 24.0371ZM99.9996 169.717C61.5574 169.717 30.282 138.442 30.282 99.9996C30.282 61.557 61.5574 30.2824 99.9996 30.2824C138.442 30.2824 169.717 61.557 169.717 99.9996C169.717 138.442 138.442 169.717 99.9996 169.717Z'
						fill='white'
					/>
					<path
						d='M146.052 61.6195C142.711 58.2781 138.267 56.4375 133.541 56.4375C128.814 56.4375 124.371 58.2781 121.029 61.6195L85.8547 96.7945L78.9703 89.9102C72.0719 83.0113 60.8465 83.0102 53.9473 89.9102C47.0488 96.8086 47.0488 108.034 53.9473 114.934L73.3434 134.33C76.6852 137.671 81.1289 139.512 85.8551 139.512C90.5813 139.512 95.0246 137.671 98.3668 134.33L146.053 86.6434C152.951 79.7441 152.951 68.5184 146.052 61.6195ZM141.636 82.227L93.95 129.913C91.7875 132.076 88.9125 133.267 85.8543 133.267C82.7961 133.267 79.9211 132.076 77.7586 129.913L58.3625 110.518C53.8984 106.053 53.8984 98.7895 58.3625 94.3258C60.5949 92.0934 63.5262 90.9777 66.4586 90.9777C69.3898 90.9777 72.3223 92.0938 74.5543 94.3258L83.6465 103.418C84.232 104.004 85.0262 104.333 85.8543 104.333C86.6824 104.333 87.4766 104.004 88.0621 103.418L125.445 66.0352C127.607 63.873 130.482 62.682 133.541 62.682C136.598 62.682 139.474 63.8727 141.636 66.0352C146.1 70.4996 146.1 77.7633 141.636 82.227Z'
						fill='white'
					/>
				</svg>
				<h1 className='h3 mb-5 text-center'>Заявка успешно отправлена!</h1>
				<p className=' mb-5 text-center'>В течение 24 часов наш менеджер свяжется с вами по указанным контактным данным.</p>
				<p className=' text-center'>
					Если этого не произошло вы можете связаться с нами на прямую:{' '}
					<Link className='underline transition-all hover:opacity-70' href='/contacts'>
						Контакты
					</Link>
				</p>
			</Container>
		</main>
	)
}

export default Thanks
