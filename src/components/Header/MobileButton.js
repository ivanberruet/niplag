import React from 'react'

export default function MobileButton({isOpen,handleClick}) {
	return (
		<button className="Button | absolute left-4 top-[50%] translate-y-[-50%] flex flex-col justify-center items-center lg:hidden" onClick={handleClick}>
			<span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
			<span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100 '}`}></span>
			<span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
		</button>
	)
}
