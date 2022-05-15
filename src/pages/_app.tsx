import type { AppProps } from 'next/app';
import * as themes from '@theme/shared';
import * as nextThemes from 'next-themes';
import * as nextUI from '@nextui-org/react';
import { Navbar } from '@components/navigation/navbar';
import { Sidebar } from '@components/navigation/sidebar';
import Head from 'next/head';
import Script from 'next/script';
import '@css/global.css';
import { useEffect } from 'react';

function DunkirkApp({ Component, pageProps }: AppProps) {
	useEffect(() => {
		const blackBox = document.getElementById('blackbox');

		if (document.readyState == 'complete') blackBox.style.display = 'none';
		else {
			window.addEventListener('load', () => {
				blackBox.style.display = 'none';
			});
		}
	});

	return (
		<nextThemes.ThemeProvider
			attribute='class'
			defaultTheme='dark'
			value={{
				light: themes.lightTheme.className,
				dark: themes.darkTheme.className
			}}
		>
			<nextUI.NextUIProvider>
				<Head>
					<title>Dunkirk</title>
				</Head>
				<Script data-website-id='4b864a27-846c-4b40-b5c5-8a0bc3570d03' src='https://inertia-analytics.vercel.app/umami.js' strategy='beforeInteractive' async defer />
				<Navbar />
				<Sidebar />
				<Component {...pageProps} />
				<div className='blackoutBox' id='blackbox'></div>
			</nextUI.NextUIProvider>
		</nextThemes.ThemeProvider>
	);
}

export default DunkirkApp;
