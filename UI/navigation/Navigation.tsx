import Link from 'next/link';
import { useRouter } from 'next/router';
import BurgerMenu from '../assets/svgs/burgerMenu.svg';
import ClosedMenu from '../assets/svgs/closedMenu.svg';

type Props = {
	toggleMenu: React.MouseEventHandler<HTMLButtonElement>;
	isOpen: boolean;
};

const Navigation = ({ toggleMenu, isOpen }: Props) => {
	const router = useRouter();

	return (
		<nav className='flex flex-row justify-end w-2/3 md:w-3/6 lg:w-1/3'>
			<ul className='hidden md:flex md:flex-row w-full justify-between font-bold'>
				<Link href='/'>
					<a
						className={` hover:underline ${
							router.pathname === '/' && 'underline'
						}`}
					>
						Inicio
					</a>
				</Link>
				<Link href='/#nosotros'>
					<a
						className={`hover:underline ${
							router.pathname === '/#nosotros' && 'underline'
						}`}
					>
						Nosotros
					</a>
				</Link>
				<Link href='/ofertas'>
					<a
						className={`hover:underline ${
							router.pathname === '/ofertas' && 'underline'
						}`}
					>
						Ofertas
					</a>
				</Link>
				<Link href='/contacto'>
					<a
						className={`hover:underline ${
							router.pathname === '/contacto' && 'underline'
						}`}
					>
						Contacto
					</a>
				</Link>
			</ul>
			<button
				className={`md:hidden flex text-3xl`}
				aria-label='Menu Icon'
				onClick={toggleMenu}
			>
				{isOpen ? <ClosedMenu /> : <BurgerMenu />}
			</button>
		</nav>
	);
};

export default Navigation;
