/**
 * @component NewsComponent - рендерит новостную страницу [News] с
 * выбранной новостью на странице [About].
 * @type {NextPage}.
 * @param {Array<INewsBlock>} newsCurrent - данные с сервера.
 * @returns {JSX.Element}.
 */
import { GetServerSideProps, NextPage } from 'next';
import NewsBlockComponent from '../../components/NewsBlockComponent/NewsBlockComponent';
import { INewsBlock } from '../../interfaces/interfaces';
import { Container, Section } from '../../styles/pages/news.styles';

interface IProps {
	newsCurrent: Array<INewsBlock>;
}

const NewsComponent: NextPage<IProps> = ({ newsCurrent }) => {
	return (
		<Section>
			<Container>{<NewsBlockComponent {...newsCurrent[0]} />}</Container>
		</Section>
	);
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const { id } = ctx.query;
	try {
		const response = await fetch(`${process.env.API_HOST}/api/newsAPI?id=${id}`);
		const data = await response.json();

		if (data.errors) {
			return { notFound: true };
		}

		if (!data) {
			return { notFound: true };
		}
		return {
			props: {
				newsCurrent: data,
			},
		};
	} catch (error) {
		console.log(error);

		return { props: {} };
	}
};

export default NewsComponent;
