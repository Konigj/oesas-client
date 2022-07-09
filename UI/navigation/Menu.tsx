import Link from 'next/link';
import { useRouter } from 'next/router';

type Props = {
	toggleMenu: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
};

const Menu = ({ toggleMenu }: Props) => {
	const router = useRouter();
	return (
		<div className='max-w-full h-screen flex flex-col bg-white items-center lg:hidden text-4xl text-my-blue'>
			<ul className='flex flex-col gap-8 justify-center text-center mt-40 mb-10 w-1/2'>
				<Link href='/'>
					<a
						onClick={toggleMenu}
						className={`hover:underline ${router.pathname === '/' && ''}`}
					>
						Inicio
					</a>
				</Link>
				<div className='h-1 w-full bg-slate-800' />
				<Link href='/tienda'>
					<a
						onClick={toggleMenu}
						className={`hover:underline ${router.pathname === '/tienda' && ''}`}
					>
						Tienda
					</a>
				</Link>
				<div className='h-1 w-full bg-slate-800' />
				<Link href='/ayuda'>
					<a
						onClick={toggleMenu}
						className={`hover:underline ${router.pathname === '/ayuda' && ''}`}
					>
						Ayuda
					</a>
				</Link>
				<div className='h-1 w-full bg-slate-800' />
				<Link href='/contacto'>
					<a
						onClick={toggleMenu}
						className={`hover:underline ${
							router.pathname === '/contacto' && ''
						}`}
					>
						Contacto
					</a>
				</Link>
				<div className='h-1 w-full bg-slate-800' />
				<button onClick={toggleMenu} className={'hover:underline'}>
					Pracodawca
				</button>
			</ul>
		</div>
	);
};

export default Menu;
