import Link from 'next/link'

export const Logo = ({ ...props }) => {
	return (
		<Link {...props} href='/' className='hover:opacity-70 transition-all'>
			<h2 className='font-black '>Циркон</h2>
		</Link>
	)
}
