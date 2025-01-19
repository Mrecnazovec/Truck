import Link from 'next/link'
import { AnchorHTMLAttributes, FC } from 'react'
import { cn } from '../../lib/utils'

interface LinkItemProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
	href: string
}

export const LinkItem: FC<LinkItemProps> = ({ children, className, href, ...props }) => {
	return (
		<Link
			href={href}
			className={cn(
				'rounded-md border-white border-solid border-2 text-white w-fit py-2 px-5 cursor-pointer hover:opacity-70 transition-all',
				className
			)}
			{...props}
		>
			{children}
		</Link>
	)
}
