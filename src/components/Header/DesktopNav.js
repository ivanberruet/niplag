import React from 'react'
import DesktopLink from './DesktopLink'

export default function DesktopNav({handleClick}) {
	return (
		<nav className="hidden lg:flex items-center gap-8 text-xl">
			<DesktopLink href="/" title="Inicio" toggle={handleClick} className=''/>
			<DesktopLink href="/fumigaciones" title="Fumigaciones" toggle={handleClick}/>
			<DesktopLink href="/suscripciones" title="Suscripciones" toggle={handleClick}/>
			<DesktopLink href="/contacto" title="Contacto" toggle={handleClick}/>
			<DesktopLink href="/terminos" title="Términos y condiciones" toggle={handleClick} className=''/>
		</nav>
	)
}
