/**
 * @component BurgerMenuComponent - рендерит кнопку и тело "бургер" меню.
 * @returns {ReactElement}
 */
import React, { useRef, useState } from 'react';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import BurgerButtonComponent from '../BurgerButtonComponent/BurgerButtonComponent';
import SideMenuComponent from '../SideMenuComponent/SideMenuComponent';
import { Navbar } from './BurgerMenuComponent.styles';

const BurgerMenuComponent = () => {
	const ref = useRef(null);
	const [menuOpen, setMenuOpen] = useState(false);

	useOnClickOutside(ref, () => {
		if (menuOpen) {
			setMenuOpen(!menuOpen);
		}
	});

	return (
		<Navbar ref={ref}>
			<BurgerButtonComponent changeFlag={(menuOpen) => setMenuOpen(menuOpen)} menuOpen={menuOpen} />
			<SideMenuComponent menuOpen={menuOpen} />
		</Navbar>
	);
};

export default BurgerMenuComponent;
