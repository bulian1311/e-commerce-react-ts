import { createStore, applyMiddleware, Store, Middleware } from 'redux';
import { persistStore, Persistor } from 'redux-persist';
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga';
import logger from 'redux-logger';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware: SagaMiddleware = createSagaMiddleware();

const middlewares: Middleware[] = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') middlewares.push(logger);

const store: Store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

const persistor: Persistor = persistStore(store);

export default { store, persistor };
