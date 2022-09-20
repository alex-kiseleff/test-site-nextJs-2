/**
 * @component DownBlockHeaderComponent - рендерит: текущее название страницы,
 * меню, кнопку "бургер".
 * @returns {ReactElement}
 */
import { useRouter } from 'next/router';
import React from 'react';
import MenuComponent from '../MenuComponent/MenuComponent';
import BurgerMenuComponent from '../BurgerMenuComponent/BurgerMenuComponent';
import { titles } from '../../configurations/titles';
import { Section, Container, Title } from './DownBlockHeaderComponent.styles';

const DownBlockHeaderComponent = () => {
	const mapTitles = new Map(Object.entries(titles));
	const router = useRouter();
	const title = mapTitles.get(router.pathname);

	return (
		<Section>
			<Container>
				<BurgerMenuComponent />
				<MenuComponent />
				<Title>{title}</Title>
			</Container>
		</Section>
	);
};

export default DownBlockHeaderComponent;
