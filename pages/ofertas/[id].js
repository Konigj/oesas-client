import { useRouter } from 'next/router';
import { offersExample } from '../../offerExample';
import Image from 'next/image';
import PrimaryLayout from '../../UI/layouts/PrimaryLayout';
import TitleMain from '../../UI/texts/TitleMain';
import SubtitleMain from '../../UI/texts/SubtitleMain';
import TextSimple from '../../UI/texts/TextSimple';

const Offer = () => {
	const router = useRouter();
	const { id } = router.query;

	const {
		nombreOferta,
		subtituloOferta,
		descriptionOferta,
		imagenOferta,
		beneficiosOferta,
	} = offersExample[id];

	return (
		<PrimaryLayout pageTitle={`Oferta | ${nombreOferta}`}>
			<main className='bg-lightGrayishBlue '>
				<section className='w-[80%] py-5 md:py-10 pb-20 flex flex-col gap-10 mx-auto'>
					<TitleMain styleClasses='text-center' text={nombreOferta} />

					<div className='flex flex-col md:flex-row'>
						<div className='max-w-[500px] max-h-[500px] bg-red-200'>
							<Image
								src={imagenOferta.url}
								alt={imagenOferta.altImage}
								width={'500px'}
								height={'100%'}
							/>
						</div>
						<div className={'w-1/2'}>
							<SubtitleMain text={subtituloOferta} />
							<TextSimple text={descriptionOferta} />
							<ul className=''>
								{beneficiosOferta.map((benefit, index) => (
									<li className='flex flex-row' key={index}>
										{benefit.icon}
										<TextSimple text={benefit.text} />
									</li>
								))}
							</ul>
						</div>
					</div>
				</section>
			</main>
		</PrimaryLayout>
	);
};

export default Offer;
