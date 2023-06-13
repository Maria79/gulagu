/* eslint-disable @next/next/no-img-element */
'use client';
import { useState } from 'react';
import classNames from 'classnames';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import Contacto from './footer/Contacto';

const Footer = () => {
	const [collapsed, setCollapsed] = useState(true);

	const toggleCollapse = () => {
		setCollapsed(!collapsed);
	};

	const contentClasses = classNames(
		'overflow-hidden transition duration-1000 ease-out',
		{
			'max-h-0': collapsed,
			'max-h-full': !collapsed,
		}
	);

	return (
		<>
			<Contacto />

			<div className='w-full bg-[#252525] p-10'>
				<div className=' max-w-6xl mx-auto'>
					<div className='max-w-lg mx-auto flex flex-col justify-center'>
						{/* subenciones */}
						<div className='py-4'>
							<div className='grid grid-cols-1 gap-y-4'>
								<img src='/images/logos-subvencion.png' alt='' srcset='' />
								<hr className='font-weight-[1px]' />
							</div>
						</div>

						{/* mas informacion */}
						<div className='text-neutral-100 py-3'>
							<div className='w-full px-5 '>
								<div className='flex flex-row justify-between'>
									<span className='flex flex-row gap-x-2 items-center'>
										<BsFillInfoCircleFill />
										Mas información
									</span>

									<button className='mr-0' onClick={toggleCollapse}>
										{collapsed ? <IoIosArrowDown /> : <IoIosArrowUp />}
									</button>
								</div>

								<div
									className={`mt-4 text-justify text-neutral-400 ${contentClasses}`}
								>
									<p className='text-md mb-3'>
										<span className='font-bold'>Descripción del proyecto:</span>{' '}
										Plataforma de comercio electrónico para la gestión de
										pedidos de comida a domicilio o para recoger en el local
									</p>
									<p className='text-md mb-3'>
										<span className='font-bold'>Objetivo:</span> Desarrollo e
										implementación de una plataforma de comercio electrónico que
										suponga un nuevo canal de venta adaptado a los cambios de
										hábitos de los consumidores provocados por la pandemia, que
										le permita al negocio facilitar el acceso a la compra de sus
										productos, adaptar la empresa a la nueva realidad
										tecnológica y digital y ofrecer un comercio seguro y de
										menos contacto, englobado dentro la problemática sanitaria.
									</p>
									<p className='text-md mb-3'>
										<span className='font-bold'>Resultados:</span> Nueva
										plataforma de comercio electrónico operativa que se integra
										con los sistemas del negocio y que ofrece un nuevo canal de
										venta para la empresa.
									</p>
									<p className='text-md  mb-3'>
										<span className='font-bold'>Importe subvencionado:</span>{' '}
										3.696,00€
									</p>
									<p className='text-md mb-3'>
										Fondos Europeos del Gobierno de Canarias
									</p>
									<p className='text-md mb-3'>
										Dirección General de Fondos Comunitarios del Ministerio de
										Hacienda y Administraciones Públicas
									</p>
								</div>
							</div>
						</div>
						<hr className='font-weight-[1px]' />

						{/* copy-write */}
						<div className='text-neutral-100 py-3 text-center'>
							<p>© Gulagú</p>
							<p>
								Aviso Legal · Términos y Condiciones · Política de Privacidad
							</p>
							<p>
								<span className='text-neutral-400'>diseño web:</span> mumetic
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
