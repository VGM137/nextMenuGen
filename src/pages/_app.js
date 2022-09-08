import '../assets/styles/globals.css';
import { Provider } from 'react-redux';
import { wrapper, store } from '../routes/store';
import Header from '../components/Header';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Header />
      <Component {...pageProps} />
    </Provider>
  );
}

export default wrapper.withRedux(MyApp);
