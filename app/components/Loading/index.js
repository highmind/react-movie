import React, { Component } from 'react';
import './index.css';

class Loading extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }
    //该组件为全屏覆盖，防止页面数据没有加载完成时候，样式和空白页面
    render(){
        return (
            <div className={this.props.active ? 'loading-wrap loading-show' : 'loading-hide'}>
              <div className="loading">
                 <span></span>
                 <span></span>
                 <span></span>
                 <span></span>
                 <span></span>
              </div>
            </div>
        )
    }
}

export default Loading;
