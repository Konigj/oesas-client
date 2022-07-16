import { useState } from 'react';
import SubtitleMain from '../texts/SubtitleMain';
import TextSimple from '../texts/TextSimple';

import DownArrow from '../assets/icons/downArrow.svg';

const SingleFaq = () => {
	const [showAnswer, setShowAnswer] = useState(false);

	const toggleShowAnswer = () => {
		setTimeout(() => {
			setShowAnswer(!showAnswer);
		}, 250);
	};
	return (
		<li className='flex flex-col gap-y-4'>
			<div
				onClick={toggleShowAnswer}
				className={
					'flex flex-row justify-between cursor-pointer border-darkBlue border-b-2 hover:font-bold'
				}
			>
				<SubtitleMain
					text={`¿Cuanto cuesta?`}
					styleClasses={'hover:font-bold w-[100%]'}
				/>
				<DownArrow
					className={` transition-transform duration-500 flex my-auto ${
						showAnswer && 'rotate-180'
					}`}
				/>
			</div>
			{showAnswer && (
				<TextSimple
					text={`Los servicios que presta Oportunidad Europa a los futuros empleados son TOTALMENTE GRATUITOS. Durante el proceso, no se le solicitarán dinero ni se le harán descuentos en su salario por nuestros servicios.`}
				/>
			)}
		</li>
	);
};

export default SingleFaq;
