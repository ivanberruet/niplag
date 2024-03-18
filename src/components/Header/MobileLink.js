import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'


export default function MobileLink({href,title,className="",toggle}){
	const router = useRouter()
	const pathname = usePathname()

	const handleClick = () => {
		toggle()
		router.push(href)
	}

	return (
		<Link href={href} className={`${className} relative group my-6`} onClick={handleClick}>
			{title}
			<span 
			className={`h-[1px] inline-block bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 bg-white ${pathname === href ? 'w-full' : 'w-0'}`
			}
			>
				&nbsp;
			</span>
		</Link>
	)	
}

