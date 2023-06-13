import Image from 'next/image';
import React from 'react';

function Info() {
	const items = [
		{
			id: 1,
			title: 'Packaging Eco',
			content: 'Todo nuestro packaging es biodegradable y 100% compostable',
			imgUrl: '/images/box-open.png',
		},
		{
			id: 2,
			title: 'Envío Gratuito',
			content: 'A partir de 25€ ¡Envío gratis! (Pedidos hasta 25€, sólo 2€ )',
			imgUrl: '/images/fast-shipping.png',
		},
		{
			id: 3,
			title: 'Pedido Mínimo',
			content: 'Pedido mínimo de 8,50€',
			imgUrl: '/images/note-pad.png',
		},

		{
			id: 4,
			title: 'Zonas de Reparto',
			content:
				'Enviamos nuestra comida a la zona del casco urbano de La Laguna y alrededores.',
			imgUrl: '/images/delivery.png',
		},
	];

	return (
		<div className='w-full mx-auto mt-8 p-10'>
			<div className='max-w-6xl mx-auto'>
				<div className='grid grid-cols-1 md:grid-cols-4'>
					{items.map((item) => (
						<div
							key={item.id}
							className='flex flex-col items-center gap-y-4 mb-10'
						>
							<Image
								className='mb-2'
								width={100}
								height={100}
								src={item.imgUrl}
								alt={item.title}
							/>
							<h3 className='text-2xl'>{item.title}</h3>
							<p className='text-center'>{item.content}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Info;
