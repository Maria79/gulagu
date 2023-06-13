import React from 'react';
import { BsFacebook } from 'react-icons/bs';
import { AiOutlineInstagram } from 'react-icons/ai';

function Media() {
	return (
		<div className='w-full px-10 py-6 bg-[#9e213d]'>
			<div className='max-w-6xl mx-auto'>
				<div className='flex flex-col items-center gap-y-7 lg:flex-row '>
					<div className='flex-1'>
						<h3 className='text-xl font-semibold text-neutral-200'>
							¡Síguenos en nuestras redes sociales para disfrutar de ofertas
							únicas!
						</h3>
					</div>
					<div className='w-1/4 flex justify-center'>
						<div className='flex flex-row gap-x-4 justify-center'>
							<div className=''>
								<BsFacebook
									size={38}
									className='text-neutral-200 border-2 border-white rounded-full p-2'
								/>
							</div>
							<div className=''>
								<AiOutlineInstagram
									size={38}
									className='text-neutral-200 border-2 border-white rounded-full p-2'
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Media;
