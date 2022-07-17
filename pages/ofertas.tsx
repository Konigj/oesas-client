import CardInfoOffer from '../UI/card/CardInfoOffer';
import PrimaryLayout from '../UI/layouts/PrimaryLayout';
import TitleMain from '../UI/texts/TitleMain';
import { offersExample } from '../offerExample';
import Link from 'next/link';

const Ofertas = () => {
	return (
		<PrimaryLayout pageTitle='Ofertas'>
			<main className='flex flex-col gap-10 py-10'>
				<TitleMain text={'OFERTAS'} styleClasses={'text-center'} />
				<ul className=' pb-5 w-[90%] md:w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8'>
					{offersExample.map((offer) => (
						<Link href={`/ofertas/${offer.id}`} key={offer.id}>
							<a>
								<CardInfoOffer
									cardTitle={offer.nombreOferta}
									description={offer.resumenOferta}
									benefits={offer.beneficiosOferta}
								/>
							</a>
						</Link>
					))}
				</ul>
			</main>
		</PrimaryLayout>
	);
};

export default Ofertas;
