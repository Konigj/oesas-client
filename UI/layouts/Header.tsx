import Link from 'next/link';
import { useState, useEffect } from 'react';
import Menu from '../navigation/Menu';
import Navigation from '../navigation/Navigation';
import OeLogo from '../assets/logos/logoCircle.svg';
import ButtonRedPoland from '../buttons/ButtonRedPoland';

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu: React.MouseEventHandler<
		HTMLButtonElement | HTMLAnchorElement
	> = () => {
		setTimeout(() => {
			setIsOpen(!isOpen);
		}, 150);
	};

	useEffect(() => {
		const hideMenu = () => {
			if (window.innerWidth > 768 && isOpen) setIsOpen(false);
		};
		window.addEventListener('resize', hideMenu);
		return () => {
			window.removeEventListener('resize', hideMenu);
		};
	});

	useEffect(() => {
		if (isOpen) {
			document.body.classList.add('overflow-hidden');
			return;
		}
		document.body.classList.remove('overflow-hidden');
	}, [isOpen]);

	return (
		<header className='flex flex-col shadow-sm '>
			<div className='px-2 flex flex-row gap-4 py-4 justify-between items-center'>
				<Link href='/' passHref>
					<a className='flex flex-row items-center gap-4 w-1/3 hover:underline'>
						<OeLogo height='70px' width='70px' />
						<p className='hidden md:block font-bold text-lg lg:text-2xl text-darkBlue'>
							OPORTUNIDAD EUROPA
						</p>
					</a>
				</Link>
				<Navigation toggleMenu={toggleMenu} isOpen={isOpen} />
				<ButtonRedPoland />
			</div>
			{isOpen && <Menu toggleMenu={toggleMenu} />}
		</header>
	);
};

export default Header;
