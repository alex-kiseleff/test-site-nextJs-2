/**
 * @component BurgerButtonComponent - рендерит кнопку "бургер" или "крестик",
 * взависимости от состояния [menuOpen].
 * Показывается при маленьких разрешениях экранов.
 * @returns {ReactElement}
 */
import React, { FC } from 'react';
import { IBurgerMenu } from '../../interfaces/interfaces';
import { MenuButton, Title } from './BurgerButtonComponent.styles';

const BurgerButtonComponent: FC<IBurgerMenu> = ({ menuOpen, changeFlag = () => false }) => {
	return (
		<MenuButton menuOpen={menuOpen} onClick={() => changeFlag(!menuOpen)}>
			<Title />
			<Title />
			<Title />
		</MenuButton>
	);
};

export default BurgerButtonComponent;
