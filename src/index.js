import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import Intl from './components/intl'
import store from './store'
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Intl>
        <App />
      </Intl>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

