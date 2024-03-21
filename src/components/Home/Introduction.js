import React from 'react'
import Foto3 from '../../../public/Foto3.jpg'
import Image from 'next/image'

export default function Introduction() {
	return (
		<>
			<p className='text-justify lg:w-[60%]'>
			¡Bienvenido a <span className='text-primary'>NIPLAG</span>, tu solución integral para servicios de fumigación y saneamiento! Imagina un espacio libre de plagas y contaminantes, un lugar donde tu tranquilidad y salud son la prioridad. Aquí, convertimos esa visión en realidad.
			<span className='hidden lg:contents'>
					&nbsp;LLevamos 10 años trabajando incansablemente para brindarte un entorno limpio, seguro y libre de preocupaciones. Deja que cuidemos de tu espacio para que puedas vivir sin molestias ni riesgos. ¡Tu bienestar es nuestra prioridad!
				</span>
			</p>
			
			<div className='text-xl text-secondary text-center uppercase flex flex-col gap-8 items-center lg:text-2xl lg:flex-row'>
				<h2>Transformamos espacios</h2>
				<h2>Eliminamos preocupaciones</h2>
				<Image src={Foto3} alt="Foto3" priority className='lg:hidden' />
			</div>

			<p className='text-justify text-lg lg:hidden'>
			LLevamos 10 años trabajando incansablemente para brindarte un entorno limpio, seguro y libre de preocupaciones. Deja que <span className='text-primary'>NIPLAG</span> cuide de tu espacio para que puedas vivir sin molestias ni riesgos. ¡Tu bienestar es nuestra prioridad!
			</p>
		</>
	)
}
