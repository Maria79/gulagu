import Nav from '@/components/Nav';
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
				<main className='pt-36 bg-blue-200'>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
