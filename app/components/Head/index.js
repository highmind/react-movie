import React, { Component } from 'react';
import IcoLink from '../IcoLink';
import './index.css';
class Head extends React.Component{
    constructor(props){
        super(props);
        // 相当于ES5 getInitalState
        this.state={};
    }

    getNodes(type){
        console.log('Head ...')
        console.log(this.props)
        switch (type){
            case 'MainHead':
                    return (
                        <div className="head">
                            <IcoLink link={"http://www.baidu.com"} icoType={"iconfont icon-user"} linkCls={"user-center-btn"} />
                            <IcoLink link={"http://www.qq.com"} icoType={"iconfont icon-sousuolansousuo"} linkCls={"search-btn"} />
                            <h1 className="title">{this.props.name}</h1>
                        </div>
                    )
            break;
            case 'BackHead':
                    return (
                            <div className="head">
                                <IcoLink link={"javascript:history.back();"} icoType={"iconfont icon-fanhui"} linkCls={"back-btn"} />
                                <h1 className="title">{this.props.name}</h1>
                            </div>
                    )
            break;
        }
    }

    render(){
        let headNodes = this.getNodes(this.props.type);
        return (
            <div className={(this.props.type == "BackHead") ? "head-wrap head-fixed" : "head-wrap"}>
                {headNodes}
            </div>
        )
    }

}

export default Head;
