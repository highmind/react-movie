import React from 'react';
import ReactDOM from 'react-dom';
import Rem from '../libs/js/rem';  //处理rem的js
import { Router, hashHistory} from 'react-router';
import Routes from './routes';  //引入自定义路由
import {Provider} from 'react-redux';
import configureStore from './store/store';
import './index.css';
import './services/MockData';//引入mock数据
const store = configureStore();

//app入口文件
const rootEl = document.getElementById('app');
ReactDOM.render(
<Provider store={store}>
    <Router history={hashHistory} routes={Routes}></Router>
</Provider>
, rootEl);
