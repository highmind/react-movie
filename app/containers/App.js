import React, { Component } from 'react'
import {bindActionCreators} from 'redux'
import {NavBar, Nav, Icon} from '../components';
import Axios from 'axios';
import * as actionCreators from '../actions/actions'
import {connect} from 'react-redux';
// 主容器
class App extends Component{
    constructor(props){
        super(props);
        console.log('-------App--------')
        console.log('主容器App执行getInitialState')
        this.state = {
            navActive:false,
            nav:[],        //导航数据
            data:[]
        }
        this.toggleNav = this.toggleNav.bind(this);
        this.getNavBarText = this.getNavBarText.bind(this);
    }

    // NavBar按钮点击，切换Nav的显示和隐藏，且用于与Nav组件通信
    toggleNav(){
      this.setState({
        navActive : !this.state.navActive
      })
    }

    componentDidMount(){
        console.log('-------App--------')
        console.log('主容器App执行componentDidMount')
        // 初始化导航数据
        let url = 'http://mockdata/get/nav';
        let self = this;
        let NavData = localStorage.getItem('NavData');
        // 如果导航数据在本地存在，则不请求远程数据
        if(NavData != null){
            self.setState({nav:JSON.parse(NavData)})
        }else{
            Axios.get(url).then(function(res){
                self.setState({nav:res.data.data})
                localStorage.setItem("NavData", JSON.stringify(res.data.data));
            })
        }
    }

    getNavBarText(){
      let textArr = this.props.navBarText;
      let len = textArr.length;
      if(len != 0){
        return textArr[len - 1].text;
      }else{
        return "芝麻电影"
      }
    }

    render(){
      // NavBar左侧子组件
      let navBarLeftNode = [
        <span className="left-btn"  onClick={this.toggleNav}>
          <Icon key="2" type="icon-caidan01" />
        </span>
      ];
      // NavBar右侧子组件
      let navBarRightNode = [
        <a className="right-btn-1" href="#">
          <Icon key="0" type="icon-user" />
        </a>,
        <a className="right-btn-2" href="#"><span className="city">秦皇岛</span><Icon key="1" type="icon-xiangxiajiantou" /></a>
      ];

      return(
          <div>
              <NavBar name={this.getNavBarText()}
                leftContent={[navBarLeftNode]}
                rightContent={[navBarRightNode]} />
              <Nav data={this.state.nav}
                active={this.state.navActive}
                setNavActive={this.toggleNav} />
              {React.cloneElement(this.props.children, this.props)}
          </div>
        )
    }

}

function mapStateToProps(state){
    return {
      position: state.setScroll,
      todoList : state.todos,
      navBarText : state.navBarSet
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(actionCreators, dispatch);
}

export default  connect(mapStateToProps, mapDispatchToProps)(App)
