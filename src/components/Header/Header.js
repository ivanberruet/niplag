"use client"
import React, { useState } from 'react'
import MobileButton from './MobileButton'
import MobileMenu from './MobileMenu'
import Logo from './Logo'
import DesktopNav from './DesktopNav'

export default function Header() {
	const [isOpen, setIsOpen] = useState(false)
	
	const handleClick = () => {
		setIsOpen(!isOpen)
	}

		
	return (
	
		<header className={`Header | w-full bg-primary text-white flex justify-center items-center py-3 relative lg:px-14 lg:justify-between lg:py-2`}>

			<MobileButton isOpen={isOpen} handleClick={handleClick}/>

			<MobileMenu isOpen={isOpen} handleClick={handleClick}/>

			<Logo className={`h-[70px]`}/>

			<DesktopNav handleClick={handleClick}/>

		</header>
	)
}
