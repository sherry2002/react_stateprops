import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import Todo from './Todo';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './Store/Index';

ReactDOM.render(
  <React.StrictMode>
    <div>
    <Provider store={store}>
    <Todo />
    </Provider> 
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
