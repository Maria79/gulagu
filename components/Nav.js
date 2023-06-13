import Top from './navbar/Top';
import Menu from './navbar/Menu';

function Nav() {
	return (
		<nav className='w-full fixed z-[100]'>
			<Top />
			<Menu />
		</nav>
	);
}

export default Nav;
