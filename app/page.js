import Alergias from '@/components/landing/Alergias';
import Hero from '@/components/landing/Hero';
import Info from '@/components/landing/Info';
import Media from '@/components/landing/Media';
import Image from 'next/image';

export default function Home() {
	return (
		<main>
			{/* Hero */}
			<Hero />

			{/* Alergias - platos */}
			<Alergias />
			{/* Info */}
			<Info />
			{/* Redes sociales */}
			<Media />
		</main>
	);
}
