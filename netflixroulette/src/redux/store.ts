import storage from 'redux-persist/lib/storage';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import reducer from './root-reducer';

// const persistConfig = {
//   key: 'root',
//   storage,
// }

// const persistedReducer = persistReducer(persistConfig, reducer)

// export const store = createStore(persistedReducer, applyMiddleware(thunk, logger))
// export const persistor = persistStore(store)
const logger = createLogger({diff:true})
export const store = createStore(reducer, applyMiddleware(thunk, logger))
