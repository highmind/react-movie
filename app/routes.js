import React, { Component } from 'react'
import { Router, Route, IndexRoute, Redirect, hashHistory,browserHistory, applyRouterMiddleware, Link} from 'react-router';
import {App, Main, Detail} from './containers';
//
// const savePosition = router => {
//     console.log('routes savePosition');
//     let scrollTop = document.body.scrollTop;
//     console.log(router);
//     let path = router.location.pathname;
//     if(path){
//         if(scrollTop){
//             localStorage.setItem(path, scrollTop);
//         }
//         if(localStorage.getItem(path) && !scrollTop){
//             localStorage.removeItem(path);
//         }
//
//
//     }
// }

const goScrollTop = () => {
    console.log('goTop.....');
    window.scrollTo(0, 0);
}

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Main} /> //首页
        <Route path="/index/:id" component={Main} />  //栏目切换
        <Route path="/detail/:id" component={Detail} /> //详情页
        <Redirect from='*' to='/' />
    </Route>
)

// <Route path="/" component={App}>
//     <IndexRoute component={Main} onLeave={savePosition} /> //首页
//     <Route path="/index/:id" component={Main} onLeave={savePosition} />  //栏目切换
//     <Route path="/detail/:id" component={Detail} onEnter={goScrollTop} /> //详情页
//     <Redirect from='*' to='/' />
// </Route>
