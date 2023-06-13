'use client';
import Image from 'next/image';
import { useState } from 'react';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { AiOutlineMenu } from 'react-icons/ai';
import { BiRestaurant } from 'react-icons/bi';

function Menu() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	const menuItems = [
		{ id: 1, label: 'ENSALADAS' },
		{ id: 2, label: 'TORTILLAS' },
		{ id: 3, label: 'ENTRANTES' },
		{ id: 4, label: 'PLATOS' },
		{ id: 5, label: 'HAMBURGUESAS' },
		{ id: 6, label: 'VINOS' },
		{ id: 7, label: 'BEBIDAS' },
		{ id: 8, label: 'POSTRES' },
	];
	return (
		<div className='w-full bg-white p-5'>
			<div className='max-w-6xl mx-auto '>
				<div className='flex flex-row justify-between items-center'>
					<div className=''>
						<div className='lg:hidden' onClick={toggleMenu}>
							<AiOutlineMenu size={28} />
						</div>
						{isOpen ? (
							<div className='absolute z-10  bg-white mt-2 shadow '>
								<div
									className={`
	 					 	${isOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'}
								p-1 transition-all duration-500 transform origin-top`}
								>
									{menuItems.map((item) => (
										<div key={item.id} className='cursor-pointer '>
											{item.label}
										</div>
									))}
									<div className='inline border-red-700 border-2 text-red-700 text-center text-sm  rounded-md px-5'>
										MENÚ DIARIO
									</div>
								</div>
							</div>
						) : null}
					</div>
					<div>
						<Image
							src='/images/logo-gulagu.png'
							width={100}
							height={100}
							alt=''
						/>
					</div>
					<div>
						<button className='inline-flex gap-x-2 px-3 py-1 items-center rounded text-neutral-200 bg-[#9e213d]'>
							<FaRegCalendarAlt size={18} className='' />
							<span>Reserva de mesa</span>
						</button>
					</div>
				</div>
				<div>
					{isOpen ? (
						<div className='absolute z-10  bg-white mt-2 shadow '>
							<div
								className={`
	 					 	${isOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'}
								p-1 transition-all duration-500 transform origin-top`}
							>
								{menuItems.map((item) => (
									<div key={item.id} className='cursor-pointer '>
										{item.label}
									</div>
								))}
								<div className='inline border-red-700 border-2 text-red-700 text-center text-sm  rounded-md px-5'>
									MENÚ DIARIO
								</div>
							</div>
						</div>
					) : null}

					<div className='hidden lg:flex flex-row gap-x-8 mt-8'>
						{menuItems.map((item) => (
							<div key={item.id} className='cursor-pointer '>
								{item.label}
							</div>
						))}
						<div className='inline-flex items-center gap-x-2 border-red-700 border-2 text-red-700 text-center text-sm  rounded-md px-5'>
							<BiRestaurant />
							MENÚ DIARIO
						</div>
					</div>
				</div>
			</div>
		</div>

		// <div className='w-full bg-white'>
		// 	<div className='max-w-6xl mx-auto'>
		// 		<div className='flex items-center justify-between h-20 px-5'>
		// 			<div className=''>
		// 				<button onClick={toggleMenu}>MENÚ</button>

		// 				{isOpen && (
		// 					<div className='absolute z-10  bg-white mt-2 shadow '>
		// 						<div
		// 							className={`
		// 					 	${isOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'}
		// 						p-1 transition-all duration-500 transform origin-top`}
		// 						>
		// 							{menuItems.map((item) => (
		// 								<div key={item.id} className='cursor-pointer '>
		// 									{item.label}
		// 								</div>
		// 							))}
		// 							<div className='inline border-red-700 border-2 text-red-700 text-center text-sm  rounded-md px-5'>
		// 								MENÚ DIARIO
		// 							</div>
		// 						</div>
		// 					</div>
		// 				)}
		// 			</div>
		// 			<Image
		// 				alt='logo'
		// 				src='/images/logo-gulagu.png'
		// 				width={100}
		// 				height={100}
		// 			/>
		// 			<div className='text-[14px] bg-[#9e213d] hover:bg-orange-300 px-5 py-1 rounded-[5px] text-neutral-200 font-semibold'>
		// 				Reserva de mesa
		// 			</div>
		// 		</div>
		// 	</div>
		// </div>
	);
}

export default Menu;
