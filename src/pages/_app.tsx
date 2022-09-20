import type { AppProps } from 'next/app';
import Head from 'next/head';
import NextNProgress from 'nextjs-progressbar';
import Layout from '../components/LayoutComponent/Layout';
import progressBar from '../configurations/progressBar.json';
import GlobalStyles from '../global';
import { ThemeProvider } from 'styled-components';
import { Theme } from '../styles/theme';

function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<GlobalStyles />
			<ThemeProvider theme={Theme}>
				<Layout>
					<Head>
						<meta charSet='UTF-8' />
						<meta httpEquiv='X-UA-Compatible' content='IE=edge' />
						<meta name='viewport' content='width=device-width, initial-scale=1.0' />
						<link rel='icon' href='/images/favicon/favicon.ico' type='image/x-icon' sizes='64x64' />
						<title>{'Платежная система'}</title>
					</Head>
					<NextNProgress {...progressBar} />
					<Component {...pageProps} />
				</Layout>
			</ThemeProvider>
		</>
	);
}

export default App;
