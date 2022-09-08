import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import App from './routes/App.js';

const initialState = {
  date: '',
  options: [],
  optionText: '',
  styles: {
    backgroundType: 'gradient',
    backgroundColor: '#000',
    gradientColor: '#3c3c3c',
    textColor: '#ffffff',
  },
};

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(reducer, initialState, composeEnhancers);
/* console.log(store.getState()) */

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById('app')
);
