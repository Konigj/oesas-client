import type { NextPage } from 'next';
import PrimaryLayout from '../UI/layouts/PrimaryLayout';

const Home: NextPage = () => {
	return (
		<PrimaryLayout pageTitle='Inicio'>
			<main>Home</main>
		</PrimaryLayout>
	);
};

export default Home;
