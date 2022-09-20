/**
 *@component OperatorCardComponent - рендерит карточку оператора связи.
 * @param {string} id - id.
 * @param {string} webp - путь до репозитория изображения с форматом webp.
 * @param {string} png - путь до репозитория изображения с форматом png.
 * @returns {ReactElement}.
 */
import Link from 'next/link';
import React, { FC } from 'react';
import { IOperator } from '../../interfaces/interfaces';
import { Container } from './OperatorCardComponent.styles';

const OperatorCardComponent: FC<IOperator> = ({ id, webp, png }) => {
	return (
		<Container>
			<Link href={'/to_pay/[id]'} as={`/to_pay/${id}`}>
				<a>
					<picture>
						<source srcSet={webp} />
						<img src={png} />
					</picture>
				</a>
			</Link>
		</Container>
	);
};

export default OperatorCardComponent;
