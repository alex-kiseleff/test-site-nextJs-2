/**
 * @component PanelServiceComponent - рендерит панель-ссылку предоставляемой
 * услуги.
 * @param {string} path - адрес ссылки.
 * @param {string} title - заголовок панели.
 * @returns {ReactElement}
 */
import Link from 'next/link';
import React, { FC } from 'react';
import { IPanelService } from '../../interfaces/interfaces';
import { PanelService } from './PanelServiceComponent.styles';

const PanelServiceComponent: FC<IPanelService> = ({ path, title }) => {
	return (
		<PanelService>
			<Link href={path}>
				<a>{title.toUpperCase()}</a>
			</Link>
		</PanelService>
	);
};

export default PanelServiceComponent;
