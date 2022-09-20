/**
 * @component MainComponent - рендерит главную страницу со списком панелей-ссылок
 * с предоставляемыми услугами.
 * @type {NextPage}.
 * @param {Array<IPanelService>} panelsServices - список операторов.
 * @returns {JSX.Element}
 */
import { GetStaticProps, NextPage } from 'next';
import PanelServiceComponent from '../components/PanelServiceComponent/PanelServiceComponent';
import { IPanelService } from '../interfaces/interfaces';
import { Container, Section } from '../styles/pages/index.styles';

interface IProps {
	panelsServices: Array<IPanelService>;
}

const MainComponent: NextPage<IProps> = ({ panelsServices }) => {
	return (
		<Section>
			<Container>
				{panelsServices?.map((item) => (
					<PanelServiceComponent {...item} key={item.id} />
				))}
			</Container>
		</Section>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	try {
		const response = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/api/db`);
		const data = await response.json();

		if (data.errors) {
			return { notFound: true };
		}

		if (!data) {
			return { notFound: true };
		}

		return {
			props: {
				panelsServices: data['panels-services'],
			},
		};
	} catch (error) {
		console.log(error);

		return { notFound: true };
	}
};

export default MainComponent;
