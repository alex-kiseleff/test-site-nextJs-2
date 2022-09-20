/**
 * @component Layout - отображает [header] и [footer] для страниц,
 * кроме страницы [404].
 * @param {PropsWithChildren} children - реакт элементы.
 * @returns {ReactElement}.
 */
import { useRouter } from 'next/router';
import React, { FC, PropsWithChildren } from 'react';
import HeaderComponent from '../HeaderComponent/HeaderComponent';
import FooterComponent from '../FooterComponent/FooterComponent';
import { Container } from './Layout.styles';

const Layout: FC<PropsWithChildren> = ({ children }) => {
	const router = useRouter();
	return (
		<Container>
			{router.pathname !== '/404' && <HeaderComponent />}
			{children}
			{router.pathname !== '/404' && <FooterComponent />}
		</Container>
	);
};

export default Layout;
