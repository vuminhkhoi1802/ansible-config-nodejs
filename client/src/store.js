import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';

let middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
  middlewares = middlewares.concat(logger);
}

const store = createStore(reducers, applyMiddleware(...middlewares));

export default store;
