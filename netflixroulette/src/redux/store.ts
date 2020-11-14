import storage from 'redux-persist/lib/storage';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import reducer from './root-reducer';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['moviesReducer', 'searchReducer']
}

const logger = createLogger({ diff: true })
const persistedReducer = persistReducer(persistConfig, reducer)

export const store = createStore(persistedReducer, applyMiddleware(thunk, logger))
export const persistor = persistStore(store)
