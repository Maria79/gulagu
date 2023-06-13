import { FaLocationDot } from 'react-icons/fa';

function Top() {
	return (
		<div className='bg-[#9e213d] w-full z-20'>
			<div className='max-w-6xl mx-auto'>
				<div className=' flex items-center justify-between px-4 text-neutral-300 font-semibold text-md'>
					<div className='flex'>
						<div className='flex items-center'>
							<p>¿Dónde Estamos?</p>
						</div>
						<p className='ml-4 hidden lg:block'>Prevención COVID-19</p>
					</div>
					<div className='flex items-center font-semibold'>
						<div className='p-2'>Mi Cuenta</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Top;
