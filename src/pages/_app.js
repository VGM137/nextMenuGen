import { Provider } from 'react-redux';
import Script from 'next/script';
import { wrapper, store } from '../routes/store';
import Header from '../components/Header';
import '../assets/styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-582Y4FQZNX"></Script>
      <Script id='google-analytics' strategy='afterInteractive'>
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-582Y4FQZNX');`
        }
      </Script>
      <Header />
      <Component {...pageProps} />
    </Provider>
  );
}

export default wrapper.withRedux(MyApp);
