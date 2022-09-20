/**
 * @component SideMenuComponent - рендерит тело "бургер" меню.
 * @returns {ReactElement}
 */
import { useRouter } from 'next/router';
import React, { FC, useEffect, useState } from 'react';
import ItemMenuComponent from '../ItemMenuComponent/ItemMenuComponent';
import { menu } from '../../configurations/menu';
import { IBurgerMenu, IItemMenu } from '../../interfaces/interfaces';
import { Container, Wrapper } from './SideMenuComponent.styles';

const SideMenuComponent: FC<IBurgerMenu> = ({ menuOpen }) => {
	const router = useRouter();
	const [idActive, setIdActive] = useState('');

	useEffect(() => {
		let count = 0;
		menu.map((item) => {
			item?.path === router.pathname ? setIdActive(item.id) : count++;
			if (count === menu.length) setIdActive('');
		});
	}, [router]);

	return (
		<Wrapper>
			<Container menuOpen={menuOpen}>
				{menu.map((props: IItemMenu) => {
					props?.id === idActive ? (props.activeStyle = true) : (props.activeStyle = false);
					return <ItemMenuComponent key={props.id} {...props} />;
				})}
			</Container>
		</Wrapper>
	);
};

export default SideMenuComponent;
