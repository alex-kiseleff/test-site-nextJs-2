/**
 * @component NewsColumnComponent - рендерит новостные блоки в колонку.
 * @param {Array<INewsBlock>} news - реквизиты со страницы [about].
 * @returns {ReactElement}
 */
import Link from 'next/link';
import React, { FC } from 'react';
import { INewsBlock } from '../../interfaces/interfaces';
import NewsBlockComponent from '../NewsBlockComponent/NewsBlockComponent';
import { Container } from './NewsColumnComponent.styles';

interface IProps {
	news: Array<INewsBlock>;
}

const NewsColumnComponent: FC<IProps> = ({ news }) => {
	return (
		<Container>
			{news?.map((item: INewsBlock) => {
				return (
					<Link key={item.id} href={'/news/[id]'} as={`/news/${item.id}`}>
						<a>
							<NewsBlockComponent {...item} />
						</a>
					</Link>
				);
			})}
		</Container>
	);
};

export default NewsColumnComponent;
