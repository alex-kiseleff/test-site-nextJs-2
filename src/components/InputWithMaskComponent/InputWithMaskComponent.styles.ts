import styled from 'styled-components';

interface IError {
	error: string;
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;

	label {
		font-weight: 600;
		padding: 0 0.3rem;
		color: ${({ theme }) => theme.colors.font.inputWithMask};
		margin-bottom: 0.5rem;
	}

	&:hover::after {
		content: attr(data-title);
		position: absolute;
		top: 3rem;
		left: 3.125rem;
		background: ${({ theme }) => theme.colors.bg.title};
		color: ${({ theme }) => theme.colors.font.title};
		padding: 3px;
		border-radius: 4px;
		font-family: ${({ theme }) => theme.fonts.robotoMedium};
	}
`;

const WrapElements = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Input = styled.input<IError>`
	border-bottom: 1px solid ${({ error, theme }) => (error ? theme.colors.font.error : theme.colors.border.inputWithMask)};
	color: ${({ error, theme }) => (error ? theme.colors.font.error : theme.colors.font.inputWithMask)};
	display: inline-flex;
	font-weight: 600;
	font-size: 1rem;
	background: inherit;
	padding: 0 0.1rem 0.1rem;
`;

export { Container, WrapElements, Input };
