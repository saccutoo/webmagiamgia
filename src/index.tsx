import React from 'react';
import ReactDOM from 'react-dom';
import './bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Store from '../src/redux/Store'
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={Store}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Provider>,
  document.getElementById('root')
);

reportWebVitals();
