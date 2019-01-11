import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
// import {api} from './middlewares/api-request.middleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [thunk]

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(...middleware),
  )
);

export default store;