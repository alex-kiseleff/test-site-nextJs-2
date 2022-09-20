/**
 * @component ButtonSubmitComponent - рендерит кнопку отправки
 * формы с оплатой телефона.
 * @param {boolean} onButton - флаг включения/выключения атрибута [disable].
 * @returns {ReactElement}
 */
import React, { FC } from 'react';
import { Button } from './ButtonSubmitComponent.styles';

interface IProps {
	onButton: boolean;
}

const ButtonSubmitComponent: FC<IProps> = ({ onButton }) => {
	return (
		<Button disabled={onButton} type={'submit'}>
			{'ОПЛАТИТЬ'}
		</Button>
	);
};

export default ButtonSubmitComponent;
