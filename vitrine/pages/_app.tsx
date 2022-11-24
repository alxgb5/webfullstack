import '../styles/globals.scss'
import '../styles/HeaderComponent.scss'
import '../styles/FooterComponent.scss'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
