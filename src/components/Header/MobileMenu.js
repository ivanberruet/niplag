import React from 'react'
import {motion} from "framer-motion"
import MobileLink from './MobileLink'

export default function MobileMenu({isOpen,handleClick}) {
	const variants = {
		open: {scale:1, opacity:1, x:"-50%", y:"-50%"},
		closed: {scale:0, opacity:0, x:"-50%", y:"-50%"}
	}
	return (
		<motion.div 
		className="Mobile Menu | min-w-[70vw] flex flex-col justify-space-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-primary"
		initial={false}
		animate={isOpen ? "open" : "closed"}
		variants={variants}
		onClick={handleClick}
		>
			<nav className="flex flex-col items-center justify-center text-lg">
				<MobileLink href="/" title="Inicio" toggle={handleClick} className='mt-12'/>
				<MobileLink href="/fumigaciones" title="Fumigaciones" toggle={handleClick}/>
				<MobileLink href="/suscripciones" title="Suscripciones" toggle={handleClick}/>
				<MobileLink href="/contacto" title="Contacto" toggle={handleClick}/>
				<MobileLink href="/terminos" title="Términos y condiciones" toggle={handleClick} className='mb-12'/>
			</nav>
		</motion.div>		
	)
}
