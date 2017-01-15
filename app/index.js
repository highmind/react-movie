import React from 'react';
import ReactDOM from 'react-dom';
import Rem from '../libs/js/rem';  //处理rem的js
import { Router, Route, IndexRoute, Redirect, hashHistory,browserHistory, applyRouterMiddleware, Link} from 'react-router';
import Routes from './routes';
import {Provider} from 'react-redux';
import configureStore from './store/store';
import './index.css';
import './services/MockData';
const store = configureStore();

//app入口文件
const rootEl = document.getElementById('app');
ReactDOM.render(
<Provider store={store}>
    <Router history={hashHistory} routes={Routes}></Router>
</Provider>
,rootEl);
