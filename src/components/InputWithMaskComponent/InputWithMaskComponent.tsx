/**
 * @component InputWithMaskComponent - создает поле ввода с маской и
 * валидацией для номера телефона.
 * @param {string} error - строка ошибки [error].
 * @param {function} onChange - коллбэк для передачи номера телефона (при
 * успешной валидации) родительскому компоненту.
 * @returns {ReactElement}
 */
import { FC, SyntheticEvent, useEffect, useState } from 'react';
import { Container, WrapElements, Input } from './InputWithMaskComponent.styles';

interface IProps {
	error: string;
	onChange: (phone: string) => void;
}

const InputWithMaskComponent: FC<IProps> = ({ error, onChange }) => {
	const [value, setValue] = useState('');
	const [concat, setConcat] = useState('');
	const template = '+7(___)___-__-__';
	const regTemplate = /^(\+7)\(\d{3}\)\d{3}-\d{2}-\d{2}$/;
	const keysArr = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Control', 'Alt', 'Shift'];

	const handlerKeyDown = (e: { key: string }) => {
		const key = e.key;

		const cutTemplate = () => {
			const index = template.indexOf('_', value.length);
			return template.slice(0, index);
		};

		if (/Backspace/.test(key)) {
			setConcat(concat.slice(-1, -1));
			return;
		}

		if (keysArr.includes(key)) {
			return;
		}

		if (/[A-Za-zА-Яа-я]/.test(key)) {
			setValue(value.slice(-1));
			return;
		}

		if (/\d/.test(key)) {
			const cutFromTemplate = cutTemplate();
			setValue(cutFromTemplate);
			return;
		}
	};

	const handlerChange = (e: SyntheticEvent) => {
		const str = (e.target as HTMLInputElement).value;
		const key = (e.nativeEvent as CompositionEvent).data;
		if (/\W/.test(key)) {
			return;
		}
		const result = concat + str.slice(concat.length, str.length);
		setValue(result);
		setConcat(result);
	};

	useEffect(() => {
		if (!regTemplate.test(concat)) {
			onChange('error');
			return;
		}
		onChange(concat);
	}, [value, concat]);

	return (
		<Container data-title={'Например 922897...'}>
			<label htmlFor='phone'>{'Введите номер телефона:'}</label>
			<WrapElements>
				<Input onChange={handlerChange} onKeyDown={handlerKeyDown} value={value} error={error} type={'text'} id={'phone'} autoComplete={'off'} />
			</WrapElements>
		</Container>
	);
};

export default InputWithMaskComponent;
