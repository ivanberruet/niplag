import React from 'react'
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from 'next/link';

const promotions = [
	{
		plan: 'Básico',
		description: ['Fumigación mensual de unidades y espacios comunes.'],
		price: 8500
	},
	{
		plan: 'Estándar',
		description: ['Desratización.', 'Certificado de servicios.', '50% de descuento en tratamientos especializados'],
		price: 10500
	},
	{
		plan: 'Premium',
		description: ['2 fumigaciones mensuales.','Desratización.','Certificado de servicios.','Servicio extra para tratamientos especiales.','Un mes de bonificación.'],
		price: 15000
	},
]

const variants = {
	enter: {x:"100%", opacity:0},
	open: {x:0, opacity:1},
	closed: {x:"-100%", opacity:0}
}

export default function HeroSection() {
	const [index, setIndex] = useState(0);
	const PromotionCard = ({ plan, description, price }) => {
		return (
			<AnimatePresence>
			<motion.div 
			className="rounded-lg bg-black shadow-xl p-4 mx-2 w-[330px] h-[400px] flex flex-col justify-around"
			initial='enter'
			animate='open'
			variants={variants}
			// transition={{ duration: .1, type: "spring", stiffness: 50 }}
			>
				<h1 className="text-2xl font-bold text-center underline underline-offset-2">{plan}</h1>
				<ul className="list-inside list-disc">
					{description.map((desc) => (
						<li key={desc}>{desc}</li>
					))}
				</ul>
				<p className="text-3xl font-bold">{Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(price)}</p>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#8e00c9" fillOpacity="0.8" d="M0,128L40,154.7C80,181,160,235,240,224C320,213,400,139,480,106.7C560,75,640,85,720,117.3C800,149,880,203,960,197.3C1040,192,1120,128,1200,96C1280,64,1360,64,1400,64L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
			</motion.div>
			</AnimatePresence>
		);
	};

	const handleNext = () => ( 
		setIndex((i) =>{
			return (i+1) % promotions.length
		})	
	)

	const handlePrev = () => ( 
		setIndex((i) =>{
			let nextValue
			i===0
			? nextValue = (i+promotions.length-1) % promotions.length
			: nextValue = (i-1) % promotions.length
			console.log(i,nextValue);
			return nextValue
		})
	)

	return (
		<main className="flex flex-col h-full bg-gradient text-white lg:gap-10">
			<h1 className="text-xl font-bold uppercase text-center my-6 lg:text-3xl">Conoce nuestros planes</h1>
			
			<div className="Promotions | pb-4">

				<div className="Mobile Promotion | w-full flex h-fit items-center justify-center px-4 lg:hidden">
					<FontAwesomeIcon icon={faCaretLeft} size="2x"  onClick={handlePrev} />

					<PromotionCard
					key={promotions[index].plan}
					plan={promotions[index].plan}
					description={promotions[index].description}
					price={promotions[index].price}
					/>

					<FontAwesomeIcon icon={faCaretRight} size="2x" onClick={handleNext} />
				</div>

				<div className='Desktop Promotion | hidden lg:flex w-[80%] m-auto h-fit items-center justify-around'>
					{promotions.map((promotion) => (
						<PromotionCard
						key={promotion.plan}
						plan={promotion.plan}
						description={promotion.description}
						price={promotion.price}
						/>
					))}
				</div>

			</div>

			<Link className="Button | text-center text-2xl bg-primary px-4 py-2 my-6 w-fit self-center rounded-md lg:px-8 lg:py-4 hover:bg-primaryDark" href="/contacto">
				Solicitar presupuesto
			</Link>

			<h2 className='text-sm italic px-4 pb-2'>Precios sólo válidos para Consorcios. Consultar precios para otros establecimientos.</h2>
    </main>
	)
}
