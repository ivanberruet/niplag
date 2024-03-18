import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

export default function DesktopLink({href,title,className=""}) {
		const router = useRouter()
		const pathname = usePathname()

		return (
			<Link href={href} className={`${className} relative group`}>
				{title}
				<span className={`h-[1px] inline-block absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 bg-white ${pathname === href ? 'w-full' : 'w-0'}`}
				>
					&nbsp;
				</span>
			</Link>
		)
		
}
