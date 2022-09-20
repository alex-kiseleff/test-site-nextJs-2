import styled from 'styled-components';

const NavBlock = styled.nav`
	left: 1rem;
	position: absolute;
	align-items: center;
	font-size: ${({ theme }) => theme.sizes.font.menuItem};
`;

const NavList = styled.ul`
	display: none;
	font-size: ${({ theme }) => theme.sizes.font.menuItem};

	@media (min-width: ${({ theme }) => theme.media.minWidthMD}) {
		display: flex;
	}
`;

export { NavBlock, NavList };
