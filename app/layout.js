import Nav from '@/components/Nav';
import './globals.css';
import Footer from '@/components/Footer';

export const metadata = {
	title: 'Gulagú -- Good Sharing Good Food',
	description: 'Restaurant Good Sharing Good Food',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className=''>
				<Nav />
				{children}
				<Footer />
			</body>
		</html>
	);
}
