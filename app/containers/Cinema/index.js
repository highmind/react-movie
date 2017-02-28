import React, { Component } from 'react'
import {List, NavBar, Nav, Slider, Loading, Icon} from '../../components';
import Axios from 'axios'; //引入axios处理ajax
import './index.css';
//首页页面
class Cinema extends Component{
    constructor(props){
        super(props);
        this.state = {
        }
        this.props.actions.navBarSet("全部影院")
    }


    componentDidMount(){

    }

    componentDidUpdate(prevProps) {


    }

    componentWillUnmount () {


    }


    render(){
        return(

            <div className="main-con">
                <Loading active={this.state.loading} />
                <div className={this.state.loading ? "con-hide" : "con-show"}>
                </div>
            </div>
        )
    }

}


export default  Cinema
