"use client";
import { config } from '@fortawesome/fontawesome-svg-core'
import HeroSection from "@/components/Home/HeroSection";
import Foto3 from '../../public/Foto3.jpg'
import { faPumpMedical, faBugs, faBiohazard } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import ServiceCard from '@/components/Home/ServiceCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
config.autoAddCss = false

export default function Home() {

  return (
		<>
			<HeroSection />

			<section className="min-h-[500px] py-8 text-lg lg:text-xl lg:py-24">
				
				<div className='flex flex-col items-center gap-8 px-4 lg:px-24 lg:gap-16 '>
					<p className='text-justify lg:w-[60%]'>
					¡Bienvenido a <span className='text-primary'>NIPLAG</span>, tu solución integral para servicios de fumigación y saneamiento! Imagina un espacio libre de plagas y contaminantes, un lugar donde tu tranquilidad y salud son la prioridad. Aquí, convertimos esa visión en realidad.
					<span className='hidden lg:contents'>
							&nbsp;Trabajamos incansablemente para brindarte un entorno limpio, seguro y libre de preocupaciones. Deja que cuidemos de tu espacio para que puedas vivir sin molestias ni riesgos. ¡Tu bienestar es nuestra prioridad!
						</span>
					</p>
					
					<div className='text-xl text-secondary text-center uppercase flex flex-col gap-8 items-center lg:text-2xl lg:flex-row'>
						<h2>Transformamos espacios</h2>
						<h2>Eliminamos preocupaciones</h2>
						<Image src={Foto3} alt="Foto3" priority className='lg:hidden' />
					</div>

					<p className='text-justify text-lg lg:hidden'>
					Trabajamos incansablemente para brindarte un entorno limpio, seguro y libre de preocupaciones. Deja que <span className='text-primary'>NIPLAG</span> cuide de tu espacio para que puedas vivir sin molestias ni riesgos. ¡Tu bienestar es nuestra prioridad!
					</p>

					<p className='hidden lg:block text-center text-4xl font-bold '>
					Nuestros servicios
					</p>

					<div className='CardsContainer | flex flex-col gap-16 px-4 py-8 lg:flex-row'>

						<ServiceCard 
						title="Desinfección" 
						icon={<FontAwesomeIcon icon={faPumpMedical} className="text-6xl text-primary"/>} 
						description="Es la técnica para destruir gérmenes, como virus, bacterias y otros microbios que causan infecciones y enfermedades." />

						<ServiceCard 
						title="Desinsectación" 
						icon={<FontAwesomeIcon icon={faBugs} className="text-6xl text-primary"/>} 
						description="Son las técnicas de saneamiento dirigidas a eliminar o controlar la población de insectos y otros artrópodos." />

						<ServiceCard 
						title="Desratización" 
						icon={<FontAwesomeIcon icon={faBiohazard} className="text-6xl text-primary"/>} 
						description="Es la técnica de saneamiento que se aplica para la exterminación de roedores (ratas y ratones)." />

					</div>
				</div>
			</section>
		</>
  );
}
