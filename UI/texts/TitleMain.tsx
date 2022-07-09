import React from 'react';

type Props = {
	styleClasses?: string;
	text: string;
};

const TitleMain = ({ text, styleClasses }: Props) => {
	return (
		<h1
			className={` text-4xl lg:text-5xl font-bold text-darkBlue  ${styleClasses}`}
		>
			{text}
		</h1>
	);
};

export default TitleMain;
