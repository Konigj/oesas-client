import React from 'react';
import SubtitleMain from '../texts/SubtitleMain';
import TextSimple from '../texts/TextSimple';

const CardInfoOffer = () => {
	return (
		<div className='mx-auto shadow-lg bg-slate-100 rounded-b-3xl w-full hover:scale-105 transition-transform duration-300'>
			<div className=' bg-darkBlue w-full h-[5%] mb-10'></div>
			<div className='flex flex-col gap-y-5 w-[80%] mx-auto'>
				<SubtitleMain
					text='Oferta Madera'
					styleClasses='text-center font-black'
				/>
				<TextSimple
					styleClasses='text-black text-justify'
					text='Oferta para trabajar en la producción de elementos de madera en una planta de producción.'
				/>
			</div>
			<div className='py-4 grid grid-cols-1 sm:grid-cols-2 w-[80%] mx-auto mb-10'>
				<div className='flex flex-row gap-4'>
					<span>+</span>
					<TextSimple text='ajsfl;kas' />
				</div>
				<div className='flex flex-row gap-4'>
					<span>+</span>
					<TextSimple text='ajsfl;kas' />
				</div>
				<div className='flex flex-row gap-4'>
					<span>+</span>
					<TextSimple text='ajsfl;kas' />
				</div>
			</div>
		</div>
	);
};

export default CardInfoOffer;
