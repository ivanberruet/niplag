import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
//import {terms} from '../../../public/terminos.pdf'


export default function Terminos() {
	return (
		<div className='Container | px-6 py-8 flex flex-col gap-6 lg:px-20 lg:py-16'>
			<h1 className='uppercase text-2xl text-center lg:text-3xl'>Términos y condiciones</h1>
			<Link href={'/terminos.pdf'} download="terminos.pdf" target='_blank' className='block text-center pb-4'>
				<FontAwesomeIcon icon={faFilePdf} className="text-4xl text-red-500 lg:text-5xl"/>
			</Link>
			<p className='text-justify'>El aprovechamiento de los servicios contratados implica la aceptación de las siguientesdisposiciones:</p>
			<ol className='marker:text-primary list-decimal list-inside flex flex-col gap-2 lg:gap-4 '>
				<li className='text-justify'>
					Contratación la contratación de los servicios de Niplag implica el compromiso de realizar el pago a partir del momento en que se acuerda la de al domicilio. Dicho servicio podrá suspenderse o reprogramarse si: - el contratante notifica con 48 horas de anticipación la reprogramación o  del evento. - Niplag comunica con 30 minutos de antelación al servicio la demora o la imposibilidad de ejecución del mismo debido a fuerza mayor. Los servicios contratados con Niplag deben utilizarse exclusivamente con propósitos lícitos. Queda estrictamente prohibido el uso de cualquier servicio contratado con Niplag que infrinja cualquier ley local, nacional o internacional en Argentina o en el extranjer
				</li>
				<li className='text-justify'>
					Restricciones del Servicio el control y la erradicación de plagas requieren el compromiso de trabajar en conjunto, nosotros junto al cliente. En caso de falta de compromiso por parte del contratante con las indicaciones y asesoramiento de nuestro personal técnico, Niplag podrá suspender los servicios contratados sin previo aviso y sin comprometerse a realizar devolución alguna por el tramo no utilizado de su servicio.
				</li>
				<li className='text-justify'>
					Denegación o Interrupción del Servicio Niplag se reserva el derecho de denegar o interrumpir los servicios contratados por el cliente con o sin notificación previa si el cliente incurre en cualquier conducta o actividad que Niplag considere abuso o violación de alguno de los términos, normas y condiciones aquí expuestas, con o sin previo aviso y no asumiendo responsabilidad por las consecuencias que puedan derivarse de este motivo.
				</li>
				<li className='text-justify'>
					Niplag mantendrá la confidencialidad y seguridad de la información proporcionada por el cliente para el cobro del servicio, según lo  en la Ley de Protección de Datos
				</li>
				<li className='text-justify'>
					Modificaciones Niplag se reserva el derecho de realizar modificaciones en las características y precios de los planes y/o servicios ofertados. Cualquier notificación que afecte a las características técnicas de los servicios ofrecidos se realizará directamente a través de nuestras páginas web en Internet o también por correo electrónico. Las condiciones y normas aquí establecidas podrán ser modificadas por parte de Niplag, notificándolo por los medios que considere necesarios.
				</li>
			</ol>
		</div>
	)
}
