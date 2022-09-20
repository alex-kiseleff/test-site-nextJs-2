/**
 * @component FooterComponent - создает [footer] сайта.
 * @returns {ReactElement}
 */
import React from 'react';
import { Author, Container, Footer, Paragraph, Title } from './FooterComponent.styles';

const FooterComponent = () => {
	return (
		<Footer>
			<Container>
				<Title>{'Спасибо, что выбираете нас!'}</Title>
				<Paragraph>
					{'Copyright © '}
					<Author>{'Alex Kiseleff,'}</Author>
					{' 2022'}
				</Paragraph>
			</Container>
		</Footer>
	);
};

export default FooterComponent;
