import CardInfoOffer from '../UI/card/CardInfoOffer';
import PrimaryLayout from '../UI/layouts/PrimaryLayout';
import TitleMain from '../UI/texts/TitleMain';

const Ofertas = () => {
	return (
		<PrimaryLayout pageTitle='Ofertas'>
			<main className='flex flex-col gap-10 py-10'>
				<TitleMain text={'OFERTAS'} styleClasses={'text-center'} />
				<div className=' py-5 w-[90%] md:w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8'>
					<CardInfoOffer />
					<CardInfoOffer />
					<CardInfoOffer />
					<CardInfoOffer />
					<CardInfoOffer />
				</div>
			</main>
		</PrimaryLayout>
	);
};

export default Ofertas;
