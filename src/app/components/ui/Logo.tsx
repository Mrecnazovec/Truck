import Image from 'next/image'
import Link from 'next/link'

export const Logo = ({ ...props }) => {
	return (
		<Link {...props} href='/' className='hover:opacity-70 transition-all'>
			<Image src='/svg/logo.svg' alt='Циркон' width={140} height={30} />
		</Link>
	)
}
