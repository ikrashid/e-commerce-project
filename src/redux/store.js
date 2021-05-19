import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import {persistStore} from 'redux-persist';
import rootReducer from './root-reducer';

const middlewares = [];
if (process.env.NODE_ENV === 'development'){
    middlewares.push(logger);
}
//add middleware to our store so whenever actions get dispatched we can catch them and display them 
// action -> middleware -> root reducer 
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

export default {store, persistor};