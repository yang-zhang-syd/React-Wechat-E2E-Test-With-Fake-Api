import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import { Router, hashHistory} from 'react-router';
import routes from './routes';
import './components/weui.css';
import * as storeConfig from './store';

render(
  <Provider store={storeConfig.store}>
    <Router history={hashHistory} routes={routes}/>
  </Provider>,
  document.getElementById('container')
);
