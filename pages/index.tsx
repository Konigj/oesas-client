import type { NextPage } from 'next';
import PrimaryLayout from '../UI/layouts/PrimaryLayout';
import TestimonySingle from '../UI/testimonials/TestimonySingle';
import defaultImage from '../UI/assets/img/defaultImage.png';
import TitleMain from '../UI/texts/TitleMain';
import TextSimple from '../UI/texts/TextSimple';
import ButtonMainGreen from '../UI/buttons/ButtonMainGreen';
import Image from 'next/image';
import SubtitleMain from '../UI/texts/SubtitleMain';
import SingleFaq from '../UI/Faq/SingleFaq';

const Home: NextPage = () => {
	return (
		<PrimaryLayout pageTitle='Inicio'>
			<main>
				<section className='flex flex-col md:flex-row w-[90%] mx-auto my-20 gap-5 md:gap-10'>
					<div className='w-[80%] md:w-1/2 md:order-2 rounded-3xl drop-shadow-lg text-center mx-auto'>
						<Image
							height={400}
							width={400}
							src={defaultImage}
							alt={'default'}
							className={'rounded-3xl'}
						/>
					</div>
					<div className='flex flex-col gap-4 md:w-1/2 md:order-1 justify-evenly text-center'>
						<TitleMain
							text={'¿Quieres tener un trabajo legal en Europa?'}
							styleClasses={'xl:px-[10%]'}
						/>
						<TextSimple
							text={
								'Oportunidad Europa te ofrece la oportunidad de contactarte con empleadores europeos para que puedas trabajar legalmente en Europa.'
							}
							styleClasses={'text-justify xl:px-[10%]'}
						/>
						<ButtonMainGreen
							text={'Conoce nuestras ofertas'}
							extraClasses={'mx-auto'}
						/>
					</div>
				</section>

				<section className='bg-lightGrayishBlue py-5 md:py-10 pb-20 flex flex-col gap-10'>
					<div className='flex flex-col gap-8 mx-auto w-[80%] md:w-[50%]'>
						<TitleMain
							text={'¿Por qué Oportunidad Europa'}
							styleClasses={'text-center'}
						/>
						<TextSimple
							text={`
								Somos una agencia de empleo registrada en Polonia,
								la cual busca la oferta de empleo más adecuada para cada candidato
								y lo ayudamos a cumplir sus sueños.`}
							styleClasses={'text-center'}
						/>
					</div>
					<div className='grid grid-cols-2 lg:grid-cols-4 w-[90%] md:w-[70%] mx-auto gap-4 gap-y-10 md:gap-8'>
						<div className='text-center flex flex-col gap-4'>
							<Image
								src={defaultImage}
								height={100}
								width={100}
								alt={'Beneficio 1'}
								layout={'responsive'}
							/>
							<SubtitleMain text={'Sin cobros por servicio'} />
							<TextSimple
								text={`
								Nuestro modelo de negocio nos permite no realizar ningún cobro por servicio
								a nuestros candidatos a trabajadores.
							  `}
								styleClasses={'text-justify'}
							/>
						</div>
						<div className='text-center flex flex-col gap-4'>
							<Image
								src={defaultImage}
								height={100}
								width={100}
								alt={'Beneficio 1'}
								layout={'responsive'}
							/>
							<SubtitleMain text={'Sin cobros por servicio'} />
							<TextSimple
								text={`
								Nuestro modelo de negocio nos permite no realizar ningún cobro por servicio
								a nuestros candidatos a trabajadores.
							  `}
								styleClasses={'text-justify'}
							/>
						</div>
						<div className='text-center flex flex-col gap-4'>
							<Image
								src={defaultImage}
								height={100}
								width={100}
								alt={'Beneficio 1'}
								layout={'responsive'}
							/>
							<SubtitleMain text={'Sin cobros por servicio'} />
							<TextSimple
								text={`
								Nuestro modelo de negocio nos permite no realizar ningún cobro por servicio
								a nuestros candidatos a trabajadores.
							  `}
								styleClasses={'text-justify'}
							/>
						</div>
						<div className='text-center flex flex-col gap-4'>
							<Image
								src={defaultImage}
								height={100}
								width={100}
								alt={'Beneficio 1'}
								layout={'responsive'}
							/>
							<SubtitleMain text={'Sin cobros por servicio'} />
							<TextSimple
								text={`
								Nuestro modelo de negocio nos permite no realizar ningún cobro por servicio
								a nuestros candidatos a trabajadores.
							  `}
								styleClasses={'text-justify'}
							/>
						</div>
					</div>
				</section>

				<section
					id='nosotros'
					className='flex flex-col md:flex-row w-[90%] mx-auto my-20 gap-5 md:gap-10'
				>
					<div className='w-[80%] md:w-1/2  rounded-3xl drop-shadow-lg text-center mx-auto'>
						<Image
							height={400}
							width={400}
							src={defaultImage}
							alt={'default'}
							className={'rounded-3xl'}
						/>
					</div>
					<div className='flex flex-col gap-4 md:w-1/2 justify-evenly text-center'>
						<TextSimple
							text='Sobre Nosotros'
							styleClasses={'font-bold text-grayishBlue'}
						/>
						<TitleMain text={'OESAS SP ZOO'} styleClasses={'xl:px-[10%]'} />
						<TextSimple
							text={`Oportunidad Europa ha trabajado en una amplia gama de ofertas de trabajo por los últimos años.
								Durante este tiempo aprendimos los mejores métodos para que nuestros candidatos puedan obtener
								un trabajo seguro y con toda la documentación legal necesaria.
								También, tenemos experiencia y conocimiento sobre tener procesos de visa eficaces.`}
							styleClasses={'text-justify xl:px-[10%]'}
						/>
						<ButtonMainGreen
							text={'Conoce nuestras ofertas'}
							extraClasses={'mx-auto'}
						/>
					</div>
				</section>

				<section className='bg-lightGrayishBlue flex flex-col py-20'>
					<TestimonySingle />
				</section>

				<section className='flex flex-col w-[80%] md:w-[60%] mx-auto my-20 gap-5 md:gap-10'>
					<TitleMain
						text={'Preguntas Frecuentes'}
						styleClasses={'text-center'}
					/>
					<ul className='flex flex-col gap-y-10'>
						<SingleFaq />
						<SingleFaq />
						<SingleFaq />
						<SingleFaq />
					</ul>
				</section>
			</main>
		</PrimaryLayout>
	);
};

export default Home;
