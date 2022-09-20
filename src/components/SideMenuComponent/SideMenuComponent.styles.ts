import styled from 'styled-components';
import { ListItem } from '../ItemMenuComponent/ItemMenuComponent.styles';
import { IBurgerMenu } from '../../interfaces/interfaces';

const Wrapper = styled.div`
	position: absolute;
	top: 1.45rem;
	left: -1rem;
	bottom: 0;
	z-index: 1000;
`;

const Container = styled.ul<IBurgerMenu>`
	display: flex;
	flex-direction: column;
	width: auto;
	min-height: 100vh;
	opacity: 0.9;
	padding: 1.5rem;
	background: ${({ theme }) => theme.colors.bg.secondHeader};
	transform: ${({ menuOpen }) => (menuOpen ? 'translateX(0)' : 'translateX(-100%)')};
	transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

	${ListItem} {
		padding-bottom: 1rem;
	}
`;

export { Wrapper, Container };
