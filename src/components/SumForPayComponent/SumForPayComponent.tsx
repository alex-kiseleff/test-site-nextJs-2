/**
 * @component SumForPayComponent - создает поле ввода с
 * валидацией, для ввода суммы.
 * @param {string} error - строка ошибки [error].
 * @param {function} onChange - коллбэк для передачи суммы (при
 * успешной валидации) родительскому компоненту.
 * @returns {ReactElement}
 */

import { FC, SyntheticEvent, useState } from 'react';
import { Container, PayInput } from './SumForPayComponent.styles';

interface IProps {
	error: string;
	onChange: (str: string) => void;
}

const SumForPayComponent: FC<IProps> = ({ error, onChange }) => {
	const [sum, setSum] = useState('');

	const handlerSum = (e: SyntheticEvent) => {
		const value = (e.target as HTMLInputElement).value;

		if (/\D/.test(value) || Number(value) < 0 || Number(value) > 1000) {
			return;
		}

		if (!value) {
			onChange('error');
			setSum(value);
			return;
		}

		setSum(value);
		onChange(value);
	};

	return (
		<Container data-title={'Сумма от 0 до 1000'}>
			<label htmlFor='sum'>{'Сумма платежа:'}</label>
			<PayInput onChange={handlerSum} id={'sum'} value={sum} error={error} name={'sumInput'} autoComplete={'off'} />
			<span>{'руб.'}</span>
		</Container>
	);
};

export default SumForPayComponent;
