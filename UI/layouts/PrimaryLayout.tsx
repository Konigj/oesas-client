import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

type Props = {
	children: React.ReactNode;
	pageTitle?: string;
};

const PrimaryLayout: React.FC<Props> = ({ children, pageTitle }) => {
	return (
		<>
			<Head>
				<title> Oportunidad Europa | {pageTitle}</title>
				<meta
					name='description'
					content=' Oportunidad Europa - OESAS - Agencia de empleo polaca. '
				/>
				{/* <link rel="icon" href="/favicon.ico" /> */}
				<meta name='author' content='Konigj' />
			</Head>
			<Header />
			{children}
			<Footer />
		</>
	);
};

export default PrimaryLayout;
