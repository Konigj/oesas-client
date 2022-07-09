import React from 'react';
type Props = {
	styleClasses?: string;
	text: string;
};

const SubtitleMain = ({ text, styleClasses }: Props) => {
	return (
		<h2
			className={` text-2xl md:text-3xl font-medium text-darkBlue ${styleClasses}`}
		>
			{text}
		</h2>
	);
};

export default SubtitleMain;
