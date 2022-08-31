import '../public/assets/css/trending.scss'
import '../public/assets/css/allNews.css'
import '../public/assets/css/weekly.scss'
import '../styles/globals.css'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} style={{scrollBehavior:'smooth'}}/>
);

export default MyApp;