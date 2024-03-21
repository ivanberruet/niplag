import React from 'react'
import ServiceCard from './ServiceCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBiohazard, faBugs, faPumpMedical } from '@fortawesome/free-solid-svg-icons'

export default function Services() {
	return (
		<>
			<p className='block text-center text-3xl lg:text-4xl font-bold '>Nuestros servicios</p>

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
		</>
	)
}
