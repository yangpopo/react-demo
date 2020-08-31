import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Globalstyle} from'./style.js';
import { Provider } from "react-redux";
import store from "./store/index";

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
      <Globalstyle />
      <App />
  </Provider>
  // </React.StrictMode>
  ,
  document.getElementById('root')
);


serviceWorker.unregister();
