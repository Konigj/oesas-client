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
						className={`hover:underline ${
							router.pathname === '/' && 'underline'
						}`}
					>
						Inicio
					</a>
				</Link>
				<div className='h-[2px] w-full bg-slate-500' />
				<Link href='/#nosotros'>
					<a
						onClick={toggleMenu}
						className={`hover:underline ${
							router.pathname === '/#nosotros' && 'underline'
						}`}
					>
						Nosotros
					</a>
				</Link>
				<div className='h-[2px] w-full bg-slate-500' />
				<Link href='/ofertas'>
					<a
						onClick={toggleMenu}
						className={`hover:underline ${
							router.pathname === '/ofertas' && 'underline'
						}`}
					>
						Ofertas
					</a>
				</Link>
				<div className='h-[2px] w-full bg-slate-500' />
				<Link href='/contacto'>
					<a
						onClick={toggleMenu}
						className={`hover:underline ${
							router.pathname === '/contacto' && 'underline'
						}`}
					>
						Contacto
					</a>
				</Link>
				<div className='h-[2px] w-full bg-slate-500' />
				<button onClick={toggleMenu} className={'hover:underline'}>
					Pracodawca
				</button>
			</ul>
		</div>
	);
};

export default Menu;
