import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux';
import App from './components/app';
import ErrorBoundary from './components/error-boundary';
import { store, persistor } from './redux/store';

const app = (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ErrorBoundary>
        <App/>
      </ErrorBoundary>
    </PersistGate>
  </Provider>
)

ReactDOM.render (
  app,
  document.getElementById("root")
);
