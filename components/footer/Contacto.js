/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { FaCcVisa, FaCcMastercard } from 'react-icons/fa';
import { BsFillTelephoneFill } from 'react-icons/bs';
import Image from 'next/image';

function Contacto() {
	return (
		<div className='w-full p-10 bg-[#181818]'>
			<div className='max-w-6xl mx-auto'>
				{/* <div className='w-full text-neutral-200 text-center'></div> */}
				<div className='grid grid-cols-1 gap-y-8 lg:grid-cols-4'>
					<div className='flex flex-col gap-y-5 items-center text-center text-neutral-200 md:items-start md:text-start'>
						<div className=''>
							<Image
								className='object-contain'
								src='/images/logo-gulagu-blanco.png'
								alt=''
								width={150}
								height={150}
							/>
						</div>
						<div>
							<p>Aceptamos pagos con</p>
						</div>
						<div className='inline-flex gap-x-4'>
							<FaCcVisa size={40} />
							<FaCcMastercard size={40} />
						</div>
					</div>
					<div className='flex flex-col gap-y-4 items-center text-center text-neutral-200 md:items-start md:text-start'>
						<div>
							<h3 className='text-[1.7rem]'>Dónde Estamos</h3>
						</div>
						<div>
							<p>La Laguna</p>
							<p>C/ Manuel de Ossuna, 24</p>
							<span className='inline-flex gap-x-2 items-center text-center'>
								<BsFillTelephoneFill size={18} />
								<p>822043206</p>
							</span>
						</div>
					</div>
					<div className='flex flex-col gap-y-4 items-center text-center text-neutral-200 md:items-start md:text-start'>
						<div className=''>
							<h3 className='text-[1.7rem]'>Horarios</h3>
						</div>
						<div>
							<p>Lunes a domingo de 13.00 a 16.30 y de 20:00 a 23:00</p>
							<p>(Miércoles Cerrado)</p>
						</div>
					</div>
					<div className='flex flex-col items-center text-neutral-200 md:items-start md:text-start'>
						<div className='lg:pl-3 leading-loose'>
							<p>Conócenos</p>
							<p>Contacto</p>
							<p>Alérgenos</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Contacto;
