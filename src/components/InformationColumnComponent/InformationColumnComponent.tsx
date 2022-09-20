/**
 * @component InformationColumnComponent - рендерит информационную колонку
 * на странице [about].
 * @param {Array<IAbout>} about - реквизиты со страницы [about].
 * @returns {ReactElement}
 */
import React, { FC } from 'react';
import { IAbout } from '../../interfaces/interfaces';
import { Container, Paragraph, Title } from './InformationColumnComponent.styles';

interface IProps {
	about?: Array<IAbout>;
}

const InformationColumnComponent: FC<IProps> = ({ about }) => {
	return (
		<Container>
			{about?.map(({ id, title, paragraph }) => {
				return (
					<div key={id}>
						{title && <Title>{title}</Title>}
						{paragraph && <Paragraph>{paragraph}</Paragraph>}
					</div>
				);
			})}
		</Container>
	);
};

export default InformationColumnComponent;
