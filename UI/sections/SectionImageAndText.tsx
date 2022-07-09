import Image, { StaticImageData } from 'next/image';
import React from 'react';
import ButtonMainGreen from '../buttons/ButtonMainGreen';
import TextSimple from '../texts/TextSimple';
import TitleMain from '../texts/TitleMain';
import defaultImage from '../assets/img/defaultImage.png';

type Props = {
	titleText: string;
	simpleText?: string;
	titleStyle?: string;
	textStyle?: string;
	imageSrc: string | StaticImageData;
	imageAlt?: string;
	imageStyle?: string;
	buttonText?: string;
	buttonClasses?: string;
	imageLayout?: 'fill' | 'fixed' | 'intrinsic' | 'responsive' | undefined;
};

const SectionImageAndText = ({
	titleText,
	titleStyle,
	simpleText,
	textStyle,
	imageSrc,
	imageAlt,
	imageStyle,
	imageLayout = 'fill',
	buttonText,
	buttonClasses,
}: Props) => {
	if (imageSrc === '' || !imageSrc) {
		imageSrc = defaultImage;
	}

	return (
		<section className='flex flex-col md:flex-row'>
			<div className='order-1 md:order-2 flex flex-col'>
				<TitleMain text={titleText} styleClasses={titleStyle} />
				{simpleText && (
					<TextSimple text={simpleText} styleClasses={textStyle} />
				)}
				{buttonText && (
					<ButtonMainGreen text={buttonText} extraClasses={buttonClasses} />
				)}
			</div>
			<div className='order-2 md:order-1'>
				<Image
					layout={imageLayout}
					src={imageSrc}
					alt={imageAlt}
					className={imageStyle}
				/>
			</div>
		</section>
	);
};

export default SectionImageAndText;
