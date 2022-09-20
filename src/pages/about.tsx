/**
 * @component AboutComponent - рендерит страницу [About].
 * @type {NextPage}.
 * @param {IProps} props - данные с сервера.
 * @returns {JSX.Element}
 */
import { GetStaticProps, NextPage } from 'next';
import InformationColumn from '../components/InformationColumnComponent/InformationColumnComponent';
import NewsColumnComponent from '../components/NewsColumnComponent/NewsColumnComponent';
import { IAbout, INewsBlock } from '../interfaces/interfaces';
import { Container, Section } from '../styles/pages/about.styles';

interface IProps {
	about: Array<IAbout>;
	news: Array<INewsBlock>;
}

const AboutComponent: NextPage<IProps> = (props) => {
	return (
		<Section>
			<Container>
				<InformationColumn {...props} />
				<NewsColumnComponent {...props} />
			</Container>
		</Section>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	try {
		const response = await fetch(`${process.env.API_HOST}/api/db`);
		const dataAbout = await response.json();

		const res = await fetch(`${process.env.API_HOST}/api/db`);
		const dataNews = await res.json();

		if (dataAbout.errors || !dataAbout) {
			return { notFound: true };
		}

		if (dataNews.error || !dataNews) {
			return { notFound: true };
		}
		return {
			props: {
				about: dataAbout['info-about'],
				news: dataNews.news,
			},
		};
	} catch (error) {
		console.log(error);

		return { props: {} };
	}
};
export default AboutComponent;
