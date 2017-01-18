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
        // 相当于ES5 getInitalState,
        console.log('-------App--------')
        console.log('主容器App执行getInitialState')
        this.state = {
            navActive:false,
            nav : [],        //导航数据
            data:[]
        }

        this.toggleNav = this.toggleNav.bind(this);
        this.setNavActive = this.setNavActive.bind(this);
    }

    // NavBar按钮点击，切换Nav的显示和隐藏
    toggleNav(){
      console.log('toggleNav');
      this.setState({
        navActive : !this.state.navActive
      })
    }

    setNavActive(){
      this.setState({
        navActive : !this.state.navActive
      });
    }

    componentDidMount(){
        console.log('-------App--------')
        console.log('主容器App执行componentDidMount')
        // 初始化数据
        let url = 'http://mockdata/get/nav';
        let self = this;
        let NavData = localStorage.getItem('NavData');
        // 如果导航数据在本地存在，则不请求远程数据
        if(NavData != null){
            self.setState({
                nav:JSON.parse(NavData)
            })
        }else{
            Axios.get(url).then(function(res){
              console.log(res.data)
                self.setState({
                    nav:res.data.data
                })
                localStorage.setItem("NavData", JSON.stringify(res.data.data));
            })
        }
    }

    render(){
      // NavBar左侧子组件
      let navBarLeftNode = [
        <a className="left-btn" href="javascript:void(0);" onClick={this.toggleNav}>
          <Icon key="2" type="icon-caidan01" />
        </a>
      ];
      // NavBar右侧子组件
      let navBarRightNode = [
        <a className="right-btn-1" href="#">
          <Icon key="0" type="icon-user" />
        </a>,
        <a className="right-btn-2" href="#">
          <span className="city">秦皇岛</span>
          <Icon key="1" type="icon-xiangxiajiantou" />
        </a>
      ];

        return(
          <div>
              <NavBar name="芝麻电影"
                leftContent={[navBarLeftNode]}
                rightContent={[navBarRightNode]} />
              <Nav data={this.state.nav}
                active={this.state.navActive}
                setNavActive={this.setNavActive} />
              {React.cloneElement(this.props.children, this.props)}
          </div>
        )
    }

}

// <div>
//               {this.props.children}
//           </div>
function mapStateToProps(state){
    return {
      position: state.setScroll,
      todoList : state.todos,
      navActiveData : state.navActive
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(actionCreators, dispatch);
}

export default  connect(mapStateToProps, mapDispatchToProps)(App)
