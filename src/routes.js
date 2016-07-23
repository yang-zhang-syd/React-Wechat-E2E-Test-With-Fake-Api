import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './pages/home/HomePage';
import SearchPage from './pages/search/SearchPage';
import ListPage from './pages/list/ListPage';
import VoucherPage from './pages/voucher/VoucherPage';
import AuthPage from './pages/auth/AuthPage';
import {auth} from './services/auth.js';

const authenticate = (nextState, replace, callback) => {
    
    if(!auth.isAuthorized()) {
        auth.requestWechatAuthorize();
    }

    callback();
};

export default (
  <Route path="/" component={App}>
    <IndexRoute onEnter={authenticate} component={HomePage} />
    <Route path="auth" component={AuthPage} />
    <Route onEnter={authenticate} path="search" component={SearchPage} />
    <Route onEnter={authenticate} path="list/:id" component={ListPage} />
    <Route onEnter={authenticate} path="voucher/:id" component={VoucherPage} />
  </Route>
);