import React from 'react'
import Logo from '../Header/Logo'
import Link from 'next/link'

const phone = "+54 11 6953-9011"
const mail = "niplag@gmail.com"

export default function Footer() {
	return (
		<footer className='w-full bg-primary text-white text-sm flex flex-col items-center gap-4 p-4 lg:flex-row lg:justify-around lg:text-base'>
			<Logo className='h-[40px] lg:h-[60px]'/>
			<ul className='flex gap-2 text-xs underline underline-offset-2 lg:flex-col lg:text-sm'>
				<Link href={"/fumigaciones"}>Fumigaciones</Link>
				<Link href={"/planes"}>Planes</Link>
				<Link href={"/contacto"}>Contacto</Link>
				<Link href={"/terminos"}>Términos y condiciones</Link>
			</ul>
			<div className='flex flex-col gap-1'>
				<p>Castelar, Zona Oeste, Buenos Aires</p>
				<p>Teléfono: <Link href={'https://wa.link/qx1ozg'} className=' underline-offset-2 text-secondary'>{phone}</Link></p>
				<p>Email: <Link href={'mailto:niplag@gmail.com?Subject=Consulta'} className=' underline-offset-2 font-bold'>{mail}</Link></p>
				<p>© {new Date().getFullYear()} NIPLAG Todos los derechos reservados</p>
			</div>
		</footer>
	)
}
