import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import { rootReducer } from './reducers/reducer';
import rootSaga from './sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const composeEnhancers = composeWithDevTools(applyMiddleware(...middlewares));

const store = createStore(rootReducer, composeEnhancers);

sagaMiddleware.run(rootSaga);

export default store;
