/**
 * @component ToPayComponent - рендерит страницу с панелью оплаты
 * мобильного телефона.
 * @type {NextPage}.
 * @param {Array<IOperator>} operatorCurrent - данные с сервера.
 * @returns {JSX.Element}
 */
import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { FormEvent, useEffect, useState } from 'react';
import { IOperator } from '../../interfaces/interfaces';
import ButtonSubmitComponent from '../../components/ButtonSubmitComponent/ButtonSubmitComponent';
import InputWithMaskComponent from '../../components/InputWithMaskComponent/InputWithMaskComponent';
import SumForPayComponent from '../../components/SumForPayComponent/SumForPayComponent';
import { Form, LogoOperator, Section } from '../../styles/pages/to_pay.styles';

interface IProps {
	operatorCurrent: Array<IOperator>;
}

const ToPayComponent: NextPage<IProps> = ({ operatorCurrent }) => {
	const router = useRouter();
	const [value, setValue] = useState({ phone: '', sum: '' });
	const [error, setError] = useState({ phoneError: '', sumError: '' });
	const [onButton, setOnButton] = useState(true);

	useEffect(() => {
		if (!error.phoneError && !error.sumError && value.phone && value.sum) {
			setOnButton(false);
			return;
		}
		setOnButton(true);
	}, [error, value]);

	/** Функция handlerSubmit формирует объект для отправки на сервер,
	 * из введенных значений инпутов и отправляет его.
	 */
	const handlerSubmit = async (e: FormEvent) => {
		e.preventDefault();

		const dataForSend = {
			phone: value.phone,
			sum: value.sum,
		};

		const response = await fetch(`/api/to_payAPI`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(dataForSend),
		});
		if (response.ok) {
			router.push('/');
		}
		return await response.json();
	};

	const handlerPhone = (phone: string) => {
		if (phone === 'error') {
			setError({ ...error, phoneError: 'error' });
			return;
		}
		setError({ ...error, phoneError: '' });
		setValue({ ...value, phone });
	};

	const handlerSum = (sum: string) => {
		if (sum === 'error') {
			setError({ ...error, sumError: 'error' });
			return;
		}
		setError({ ...error, sumError: '' });
		setValue({ ...value, sum });
	};

	return (
		<Section>
			<Form onSubmit={handlerSubmit}>
				<LogoOperator>
					<picture>
						<source srcSet={operatorCurrent[0].webp} />
						<img src={operatorCurrent[0].png} />
					</picture>
				</LogoOperator>
				<InputWithMaskComponent error={error.phoneError} onChange={handlerPhone} />
				<SumForPayComponent error={error.sumError} onChange={handlerSum} />
				<ButtonSubmitComponent onButton={onButton} />
			</Form>
		</Section>
	);
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const { id } = ctx.query;

	try {
		const response = await fetch(`${process.env.API_HOST}/api/to_payAPI?id=${id}`);
		const data = await response.json();

		if (data.errors) {
			return { notFound: true };
		}

		if (!data) {
			return { notFound: true };
		}
		return {
			props: {
				operatorCurrent: data,
			},
		};
	} catch (error) {
		console.log(error);

		return { props: {} };
	}
};

export default ToPayComponent;
