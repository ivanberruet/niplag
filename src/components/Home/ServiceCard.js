import Link from 'next/link'
import React from 'react'

export default function ServiceCard({title,icon,description}) {
	return (
		// <div className="rounded-xl bg-black text-white shadow-lg p-4 mx-2 w-[300px] h-[350px] flex flex-col justify-around shadow-primary">
		<Link href={'/fumigaciones'} className="rounded-xl bg-white text-black shadow-md p-4 mx-2 w-[300px] h-[350px] flex flex-col justify-around shadow-primary hover:scale-105 transition-transform ">
			<h1 className='text-2xl font-bold text-center'>{title}</h1>
			{icon}
			<p className='text-justify px-4'>{description}</p>
		</Link>
	)
}
