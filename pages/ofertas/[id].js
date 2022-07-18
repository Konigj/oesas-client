import { useRouter } from 'next/router';
import { offersExample } from '../../offerExample';
import Image from 'next/image';
// UI
import PrimaryLayout from '../../UI/layouts/PrimaryLayout';
import TitleMain from '../../UI/texts/TitleMain';
import SubtitleMain from '../../UI/texts/SubtitleMain';
import TextSimple from '../../UI/texts/TextSimple';
import ButtonMainGreen from '../../UI/buttons/ButtonMainGreen';
import CardTitleAndItem from '../../UI/card/CardTitleAndItem';

const Offer = () => {
	const router = useRouter();
	const { id } = router.query;

	const {
		nombreOferta,
		subtituloOferta,
		descriptionOferta,
		imagenOferta,
		beneficiosOferta,
		tarjetasOferta,
	} = offersExample[id];

	return (
		<PrimaryLayout pageTitle={`Oferta | ${nombreOferta}`}>
			<main className='bg-lightGrayishBlue '>
				<section className='w-[80%] py-5 md:py-10 pb-20 flex flex-col gap-10 mx-auto'>
					<TitleMain styleClasses='text-center' text={nombreOferta} />

					<div className='flex flex-col lg:flex-row'>
						<div className='max-w-[500px] max-h-[500px] bg-red-200'>
							<Image
								src={imagenOferta.url}
								alt={imagenOferta.altImage}
								width={'500px'}
								height={'100%'}
							/>
						</div>
						<div className={'lg:w-1/2 mx-[5%]'}>
							<SubtitleMain text={subtituloOferta} />
							<TextSimple text={descriptionOferta} />
							<ul className='flex flex-row'>
								{beneficiosOferta.map((benefit, index) => (
									<li className='flex flex-row' key={index}>
										{benefit.icon}
										<TextSimple text={benefit.text} />
									</li>
								))}
							</ul>
							<ButtonMainGreen
								text={'Conoce nuestras ofertas'}
								extraClasses={'w-full'}
								path={'#formulario'}
							/>
						</div>
					</div>
					<div className='flex flex-col lg:flex-row mx-auto justify-between w-full gap-5'>
						{tarjetasOferta.map((tarjeta, index) => (
							<CardTitleAndItem
								key={index}
								cardText={tarjeta.tituloTarjeta}
								icon={tarjeta.icon}
								cardItems={tarjeta.textosTarjeta}
							/>
						))}
					</div>
				</section>

				<section></section>
			</main>
		</PrimaryLayout>
	);
};

export default Offer;
