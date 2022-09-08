import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createWrapper } from 'next-redux-wrapper';
import reducer from '../reducers';

// initial states here
const initalState = {
  date: '',
  options: [],
  optionText: '',
  styles: {
    backgroundType: 'gradient',
    backgroundColor: '#000',
    gradientColor: '#3c3c3c',
    textColor: '#ffffff',
  },
  imgUrl: '',
};

// middleware
const middleware = [thunk];

// creating store
export const store = createStore(
  reducer,
  initalState,
  composeWithDevTools(applyMiddleware(...middleware))
);

// assigning store to next wrapper
const makeStore = () => store;

export const wrapper = createWrapper(makeStore);
