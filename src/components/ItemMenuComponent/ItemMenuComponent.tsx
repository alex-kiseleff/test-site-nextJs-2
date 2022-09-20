/**
 * @component ItemMenuComponent - создает пункт меню.
 * @param {string} path - адрес ссылки.
 * @param {string} name - название пункта меню.
 * @param {boolean} activeStyle - активный класс для стилей.
 * @returns {ReactElement}
 */
import Link from 'next/link';
import React, { FC } from 'react';
import { IItemMenu } from '../../interfaces/interfaces';
import { ListItem } from './ItemMenuComponent.styles';

const ItemMenuComponent: FC<IItemMenu> = ({ path, name, activeStyle }) => {
	return (
		<ListItem active={activeStyle}>
			<Link href={path}>
				<a>{name.toUpperCase()}</a>
			</Link>
		</ListItem>
	);
};

export default ItemMenuComponent;
