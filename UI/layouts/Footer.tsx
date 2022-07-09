import Link from 'next/link';
import LogoStartsAndWithText from '../assets/logos/LogoStartsAndWhiteText.svg';
import ButtonMainGreen from '../buttons/ButtonMainGreen';

import WhatsAppIcon from '../assets/icons/social/whatsAppIcon.svg';
import FacebookIcon from '../assets/icons/social/facebookIcon.svg';
import MailIcon from '../assets/icons/social/mailIcon.svg';

const Footer = () => {
	const footerLinkStyles =
		'text-white hover:text-limeGreen transition-colors duration-500 lg:text-lg';

	const socialIconsStyles =
		'fill-white  w-8 h-8 opacity-80 hover:opacity-100 transition-opacity duration-200';

	return (
		<footer className='bg-darkBlue'>
			<div className='container flex flex-col md:flex-row gap-8 py-5 md:py-10'>
				<div className='md:w-1/3 xl:w-1/4 h-full flex flex-col gap-4 justify-center md:justify-start'>
					<Link href='/' passHref>
						<a aria-label='Logo'>
							<LogoStartsAndWithText
								width='100%'
								height='100%'
								className='w-[238px] h-[80px] lg:w-[298px] lg:h-[100px] mx-auto'
							/>
						</a>
					</Link>
					<ul className='flex flex-row gap-4 justify-around'>
						<a
							aria-label='Facebook Icon'
							href='https://www.facebook.com/OESASPOL'
						>
							<FacebookIcon className={`${socialIconsStyles}`} />
						</a>
						<a aria-label='Mail Icon' href='mailto:info@oesas.pl'>
							<MailIcon className={`${socialIconsStyles}`} />
						</a>
						<a aria-label='WhatsApp Icon' href='https://wa.me/573227341241'>
							<WhatsAppIcon className={`${socialIconsStyles}`} />
						</a>
					</ul>
				</div>
				<ul className='md:w-1/3 lg:w-2/4 flex flex-col text-center items-center gap-2 md:gap-4 md:grid md:grid-cols-2 lg:grid-cols-3'>
					<Link href='/'>
						<a className={`${footerLinkStyles}`}>Inicio</a>
					</Link>
					<Link href='/ofertas'>
						<a className={`${footerLinkStyles}`}>Ofertas</a>
					</Link>
					<Link href='/contacto'>
						<a className={`${footerLinkStyles}`}>Contacto</a>
					</Link>
					<Link href='/nosotros'>
						<a className={`${footerLinkStyles}`}>Nosotros</a>
					</Link>
					<Link href='/pracodawca'>
						<a className={`${footerLinkStyles}`}>Pracodawca</a>
					</Link>
					<Link href='/#'>
						<a className={`${footerLinkStyles}`}>Legal</a>
					</Link>
				</ul>
				<div className='md:w-1/3 xl:w-1/4 text-white flex flex-col mx-auto gap-4'>
					<ButtonMainGreen
						text='Conoce nuestras ofertas'
						path='/ofertas'
						extraClasses='mx-auto md:px-3 lg:px-4 xl:px-8'
					/>
					<p className=' text-xs text-grayishBlue text-center'>
						&copy; Oportunidad Europa. Todos los derechos reservados.
					</p>
				</div>
			</div>
			<a
				href='https://juanrey.co'
				className={`flex ${footerLinkStyles} w-fit mx-auto py-2 text-xs lg:text-xs justify-center`}
			>
				Powered by JR
			</a>
		</footer>
	);
};

export default Footer;
