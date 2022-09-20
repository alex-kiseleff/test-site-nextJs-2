/**
 * @component PayForMobileComponent - рендерит страницу со списком операторов связи.
 * @type {NextPage}.
 * @param {Array<IOperator>} operators - данные с сервера.
 * @returns {JSX.Element}
 */
import { GetStaticProps, NextPage } from 'next';
import OperatorCardComponent from '../components/OperatorCardComponent/OperatorCardComponent';
import { IOperator } from '../interfaces/interfaces';
import { Container, Section } from '../styles/pages/pay_for_mobile.styles';

interface IProps {
	operators: Array<IOperator>;
}

const PayForMobileComponent: NextPage<IProps> = ({ operators }) => {
	return (
		<Section>
			<Container>
				{operators?.map((props: IOperator) => {
					return <OperatorCardComponent key={props.id} {...props} />;
				})}
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
				operators: data.operators,
			},
		};
	} catch (error) {
		console.log(error);

		return { props: {} };
	}
};

export default PayForMobileComponent;
