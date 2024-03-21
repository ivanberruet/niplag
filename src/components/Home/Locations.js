import Image from 'next/image'
import React from 'react'
import consorcios from '../../../public/consorcios.jpg'
import casas from '../../../public/casas.jpg'
import escuelas from '../../../public/escuelas.jpg'
import gimnasios from '../../../public/gimnasios.jpg'
import empresas from '../../../public/empresas.jpg'
import embajadas from '../../../public/embajadas.jpg'
import teatros from '../../../public/teatros.jpg'
import clinicas from '../../../public/clinicas.jpg'

const photos = [consorcios, casas, escuelas, gimnasios, empresas, embajadas, teatros, clinicas]
export default function Locations() {

	const grdiObject = ({title, img}) => {
		return (
			<div className='w-full h-full overflow-hidden'>
				<h2 className='text-center text-2xl pb-2 capitalize'>{title}</h2>
				<Image src={img} alt={title} className='h-full object-cover' priority />
			</div>
		)
	}

	console.log(photos[0].src.split('/').pop().split('.')[0]);
	return (
		<>
			<p className='block text-center text-3xl lg:text-4xl font-bold '>Trabjamos en todo tipo de ubicaciones</p>

			<ul className='MobileLocations | w-full list-disc list-inside marker:text-primary flex flex-col gap-6 px-4 py-8 lg:flex-row lg:hidden'>
				<li>Consorcios</li>
				<li>Empresas</li>
				<li>Embajadas</li>
				<li>Residencias familaires</li>
				<li>Lugares de encuentro
					<ul className=' list-square px-10 pt-2 marker:text-secondary'>
						<li>Teatros</li>
						<li>Cines</li>
						<li>Restaurantes</li>
					</ul>
				</li>
				<li>Instituciones Educativas
					<ul className=' list-square px-10 pt-2 marker:text-secondary'>
						<li>Jardines</li>
						<li>Escuelas</li>
						<li>Universidades</li>
					</ul>
				</li>
				<li>Instituciones Deportivas
					<ul className=' list-square px-10 pt-2 marker:text-secondary'>
						<li>Clubes</li>
						<li>Gimnasios</li>
						<li>Asociaciones</li>
					</ul>
				</li>
				<li>Instituciones Médicas
					<ul className=' list-square px-10 pt-2 marker:text-secondary'>
						<li>Hospitales</li>
						<li>Cliínicas</li>
						<li>Geriátricos</li>
					</ul>
				</li>
			</ul>

			<div className='DesktopLocations | hidden lg:grid grid-cols-4 grid-rows-2 w-full gap-6 pb-8 px-8'>
					{
						photos.map((photo, index) => {
							return grdiObject({
								title: photo.src.split('/').pop().split('.')[0],
								img: photo
							})
						})
					}
			</div>
		</>			
	)
}
