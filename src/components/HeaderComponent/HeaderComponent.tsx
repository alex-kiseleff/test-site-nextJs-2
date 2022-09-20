/**
 * @component HeaderComponent - создает [header] сайта.
 * @returns {ReactElement}
 */
import React from 'react';
import DownBlockHeaderComponent from '../DownBlockHeaderComponent/DownBlockHeaderComponent';
import sc_png from '/public/images/header/scrooge_mc_duck/png/scrooge_mc_duck.png';
import sc_webp from '/public/images/header/scrooge_mc_duck/webp/scrooge_mc_duck.webp';
import { Container, Header, Img, Picture, TextLeft, TextRight } from './HeaderComponent.styles';

const HeaderComponent = () => {
	return (
		<Header>
			<Container>
				<TextLeft>{'Bank Of $crooge'}</TextLeft>
				<Picture>
					<source srcSet={sc_webp.src} type='image/webp' />
					<Img src={sc_png.src} alt={'Скрудж МакДак'} />
				</Picture>
				<TextRight>{'McDuke $ $ $'}</TextRight>
			</Container>
			<DownBlockHeaderComponent />
		</Header>
	);
};

export default HeaderComponent;
