import Link from 'next/link';
import React, { MouseEventHandler } from 'react';

type Props = {
	path?: string;
	text: string;
	extraClasses?: string;
	clickAction?: MouseEventHandler<HTMLButtonElement>;
};

const ButtonMainGreen = ({
	path = '',
	text,
	extraClasses,
	clickAction,
}: Props) => {
	return (
		<Link href={path}>
			<button
				onClick={clickAction}
				className={`bg-gradient-to-r from-limeGreen to-brightCyan text-white shadow-md 
				w-fit py-3 px-8 rounded-full text-lg text-center hover:scale-105
				select-none transition-transform duration-500 ${extraClasses}`}
			>
				{text}
			</button>
		</Link>
	);
};

export default ButtonMainGreen;
