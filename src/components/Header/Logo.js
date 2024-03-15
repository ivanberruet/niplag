import React from 'react'
import logo from '../../../public/logo2.png'
import Link from 'next/link'
import Image from 'next/image'

export default function Logo({className}) {
	return (
		<Link href="/">
			<Image src={logo} alt='logo' className={`${className} w-auto`} priority={true} width={""} />
		</Link>
	)
}
