import Image from 'next/image';
import React from 'react';

function Hero() {
	return (
		<div className=' '>
			<div className='relative h-[80vh] overflow-hidden'>
				<div className=' h-full flex justify-center items-center'>
					<h1 className='w-96 leading-[52px] text-white text-[56px] text-center font-bold mt-14'>
						Good sharing. Good food.
					</h1>
				</div>
				<div className='h-[75vh]'>
					<Image
						className='absolute -z-10  bg-no-repeat object-[center_bottom] scale-x-[1.025] object-cover'
						alt='hero-image'
						src='/images/banner-galeria.jpg'
						fill
					/>
				</div>
			</div>
		</div>
	);
}

export default Hero;
