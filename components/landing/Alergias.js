'use client';
import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import Platosal from './Platosal';
import Image from 'next/image';

function Alergias() {
	return (
		<div>
			<div className='relative w-full h-[100px] -mt-10'>
				<Image className='absolute ' alt='' src='/images/herobottom.png' fill />
			</div>
			<div className='bg-[#9e213d] text-neutral-200 -mt-1 pb-5 flex flex-col'>
				<h1 className=' text-center text-[36px] font-medium'>
					Nos preocupamos por tu{' '}
					<span className='font-bold'>
						<Typewriter
							cursor
							cursorBlinking
							delaySpeed={5000}
							deleteSpeed={75}
							loop={0}
							typeSpeed={85}
							words={['cuerpo.', 'salud.', 'alimentación.']}
						/>
					</span>
				</h1>
				<br />
				<hr className='text-neutral-300 w-[30%] mx-auto' />
				<Platosal />
			</div>
		</div>
	);
}

export default Alergias;
