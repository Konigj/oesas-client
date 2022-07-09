type Props = {
	styleClasses?: string;
	text: string;
};

const TextSimple = ({ styleClasses, text }: Props) => {
	return <p className={`text-base md:text-lg ${styleClasses}`}>{text}</p>;
};

export default TextSimple;
