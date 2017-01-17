import React,{Component} from 'react';
import './iconfont.css'; //iconfont.cn字体图标，需去掉?传值
class Icon extends Component{
    render(){
        return (
            <i className={`iconfont ${this.props.type}`}></i>
        )
    }
}

export default Icon;
