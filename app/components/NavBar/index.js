import React, { Component } from 'react';
import Icon from '../Icon';
import './index.css';
class NavBar extends React.Component{
    constructor(props){
        super(props);
        this.state={};
    }
    // 以子组件集合方式，传入参数
    getChild(content){
      return React.Children.map(content, (child)=>{
        if(!child) {ruturn;}
        return child;
      })
    }

    render(){
        const {rightContent, leftContent, name} = this.props;
        return (
            <div className="head-wrap head-fixed">
              <div className="head">
                  {this.getChild(leftContent)}
                  {this.getChild(rightContent)}
                  <h1 className="title">{name}</h1>
              </div>
            </div>
        )
    }

}
// <a href="#" className="left-btn">
//   <Icon type={"icon-caidan01"} />
// </a>
// <a href="#" className="right-btn-2">
//   <Icon type={"icon-sousuo"} />
// </a>
// <a href="#" className="right-btn-1">
//   <Icon type={"icon-user"} />
// </a>
export default NavBar;
