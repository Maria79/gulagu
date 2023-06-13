'use client';

import Image from 'next/image';
import React from 'react';

function Platosal() {
	const items = [
		{
			id: 1,
			label: 'Platos sin Gluten',
			imgUrl: '/images/icon-sin-gluten.png',
		},
		{
			id: 2,
			label: 'Platos Vegetarianos',
			imgUrl: '/images/icon-vegetariano.png',
		},
		{ id: 3, label: 'Platos Veganos', imgUrl: '/images/icon-vegano.png' },
		{
			id: 4,
			label: 'Platos sin Lactosa',
			imgUrl: '/images/icon-sin-lactosa.png',
		},
		{
			id: 5,
			label: 'Platos sin azúcar añadida',
			imgUrl: '/images/icon-sin-azucar.png',
		},
	];
	return (
		<div className='w-full mx-auto mt-8 p-10'>
			<div className='max-w-6xl mx-auto'>
				<div className='grid grid-cols-1 md:grid-cols-5 gap-2 mt-14'>
					{items.map((item) => (
						<div key={item.id} className=' text-center mb-5'>
							<Image
								className='w-24 mx-auto py-3'
								src={item.imgUrl}
								alt={item.label}
								width={100}
								height={100}
							/>
							<h3 className='text-2xl font-semibold text-neutral-200'>
								{item.label}
							</h3>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Platosal;
