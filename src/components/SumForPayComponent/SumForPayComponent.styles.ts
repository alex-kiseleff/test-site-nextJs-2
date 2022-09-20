import styled from 'styled-components';

interface IError {
	error: string;
}

const Container = styled.div`
	color: ${({ theme }) => theme.colors.font.sumForPay};
	display: inline-flex;
	position: relative;

	label {
		font-weight: 600;
		padding: 0 0.3rem;
	}

	&:hover::after {
		content: attr(data-title);
		position: absolute;
		top: 1.7rem;
		left: 3.125rem;
		background: ${({ theme }) => theme.colors.bg.title};
		color: ${({ theme }) => theme.colors.font.title};
		padding: 3px;
		border-radius: 4px;
		font-family: ${({ theme }) => theme.fonts.robotoMedium};
	}
`;

const PayInput = styled.input<IError>`
	border-bottom: 1px solid ${({ error, theme }) => (error ? theme.colors.font.error : theme.colors.border.sumForPay)};
	color: ${({ error, theme }) => (error ? theme.colors.font.error : theme.colors.font.sumForPay)};
	font-size: 1rem;
	padding: 0 0.1rem 0.1rem;
	background: inherit;
	width: 2.2rem;
	text-align: right;
	font-weight: 600;
`;

export { Container, PayInput };
