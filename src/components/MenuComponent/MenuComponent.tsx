/**
 * @component MenuComponent - создает блок меню.
 * @returns {ReactElement}
 */
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import ItemMenuComponent from '../ItemMenuComponent/ItemMenuComponent';
import { menu } from '../../configurations/menu';
import { NavBlock, NavList } from './MenuComponent.styles';

const MenuComponent = () => {
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
		<NavBlock>
			<NavList>
				{menu.map((props) => {
					props?.id === idActive ? (props.activeStyle = true) : (props.activeStyle = false);
					return <ItemMenuComponent key={props.id} {...props} />;
				})}
			</NavList>
		</NavBlock>
	);
};

export default MenuComponent;
