import React,{Component} from 'react';
import './iconfont.css'; //iconfont.cn字体图标，需去掉?传值
class IcoLink extends React.Component{
    render(){
        return (
            <a href={this.props.link}  onClick={this.props.clickEvent} className={this.props.linkCls}>
                <i className={this.props.icoType}></i>
            </a>
        )
    }
}

export default IcoLink;
