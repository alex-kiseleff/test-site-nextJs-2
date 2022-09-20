/**
 * @component ContactsComponent - рендерит страницу контактов.
 * @type {NextPage}.
 * @param {Array<IContact>} contacts - данные с сервера.
 * @returns {JSX.Element}
 */
import { GetStaticProps, NextPage } from 'next';
import LeftColumnComponent from '../components/LeftColumnComponent/LeftColumnComponent';
import RightColumnComponent from '../components/RightColumnComponent/RightColumnComponent';
import { IContact } from '../interfaces/interfaces';
import { Container, Section } from '../styles/pages/contacts.styles';

interface IProps {
	contacts: Array<IContact>;
}

const ContactsComponent: NextPage<IProps> = (contacts) => {
	return (
		<Section>
			<Container>
				<LeftColumnComponent {...contacts} />
				<RightColumnComponent />
			</Container>
		</Section>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	try {
		const response = await fetch(`${process.env.API_HOST}/api/db`);
		const data = await response.json();

		if (data.errors) {
			return { notFound: true };
		}

		if (!data) {
			return { notFound: true };
		}
		return {
			props: {
				contacts: data.contacts,
			},
		};
	} catch (error) {
		console.log(error);

		return { props: {} };
	}
};

export default ContactsComponent;
