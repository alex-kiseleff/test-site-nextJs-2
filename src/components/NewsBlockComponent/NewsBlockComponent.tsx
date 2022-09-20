/**
 * @component NewsBlockComponent - создает новостную статью в колонке
 * новостей на странице [about].
 * @param {string} title - заголовок.
 * @param {string} description - описание.
 * @returns {ReactElement}
 */
import React, { FC } from 'react';
import { INewsBlock } from '../../interfaces/interfaces';
import { Article, Description, Title } from './NewsBlockComponent.styles';

const NewsBlockComponent: FC<INewsBlock> = ({ title, description }) => {
	return (
		<Article>
			<Title>{title}</Title>
			<Description lang={'ru'}>{description}</Description>
		</Article>
	);
};

export default NewsBlockComponent;
