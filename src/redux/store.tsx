import { createStore, applyMiddleware, Store, Middleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './rootReducer';

const middlewares: Middleware[] = [logger];

const store: Store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
