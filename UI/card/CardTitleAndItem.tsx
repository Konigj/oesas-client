import SubtitleMain from '../texts/SubtitleMain';
import TextSimple from '../texts/TextSimple';

type Props = {
	cardText: string;
	icon: any;
	cardItems: { textoItem: string; diseñoItem: string }[];
};

const CardTitleAndItem = ({ cardText, icon, cardItems }: Props) => {
	return (
		<div className=' flex flex-col gap-4 shadow-xl rounded-2xl bg-white w-full p-8'>
			<SubtitleMain text={cardText} styleClasses={'font-bold'} />
			<ul className='flex flex-col pl-4'>
				{cardItems.map((item, index) => (
					<li className='flex flex-row gap-4' key={index}>
						{icon}
						<TextSimple text={item.textoItem} styleClasses={item.diseñoItem} />
					</li>
				))}
			</ul>
		</div>
	);
};

export default CardTitleAndItem;
