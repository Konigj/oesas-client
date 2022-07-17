import React from 'react';
import SubtitleMain from '../texts/SubtitleMain';
import TextSimple from '../texts/TextSimple';

type Props = {
	cardTitle: string;
	description: string;
	benefits: {
		icon: any;
		text: string;
		altIcon: string;
	}[];
};

const CardInfoOffer = ({ cardTitle, description, benefits }: Props) => {
	return (
		<li className='mx-auto shadow-lg bg-slate-100 rounded-b-3xl h-full w-full hover:scale-105 transition-transform duration-300'>
			<div className=' bg-darkBlue w-full h-[5%] mb-10'></div>
			<div className='flex flex-col gap-y-5 w-[80%] mx-auto'>
				<SubtitleMain text={cardTitle} styleClasses='text-center font-black' />
				<TextSimple styleClasses='text-black text-justify' text={description} />
			</div>
			<div className='py-4 grid grid-cols-1 sm:grid-cols-2 w-[80%] mx-auto mb-10'>
				{benefits.map((benefit, index) => (
					<div key={index} className='flex flex-row gap-4'>
						{benefit.icon}
						<TextSimple text={benefit.text} />
					</div>
				))}
			</div>
		</li>
	);
};

export default CardInfoOffer;
