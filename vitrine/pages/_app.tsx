import '../styles/globals.scss';
import '../styles/HeaderComponent.scss';
import '../styles/FooterComponent.scss';
import '../styles/BannerComponent.scss';
import '../styles/CardComponent.scss';
import '../styles/RegisterComponent.scss';
import '../styles/Home.scss';
import '../styles/Login.scss';
import 'my-lib-ui/dist/main.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
