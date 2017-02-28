import React, { ReactDOM,Component } from 'react'
import {Button} from '../../components';
import Axios from 'axios'; //引入axios处理ajax
import './index.css';
//首页页面
class User extends Component{
    constructor(props){
        super(props);
        this.state = {
        }
        this.props.actions.navBarSet("个人中心")
    }


    componentDidMount(){

    }

    componentDidUpdate(prevProps) {


    }

    componentWillUnmount () {

    }

    handleSubmit(){
      let username = this.refs.username.value.trim();
      let password = this.refs.password.value.trim();
      let userInfo = {
        "username" : username,
        "passoword" : password
      }
      console.log(userInfo);
    }

    render(){
        return(
            <div className="main-con">
                <form>
                  <input ref="username" className="user-input user-name" placeholder="用户名" type="text"/>
                  <input ref="password" className="user-input user-pwd" placeholder="密码" type="password"/>
                  <Button type="warning" clsName="login-btn" clickEvent={this.handleSubmit.bind(this)}>
                      登录
                  </Button>
                </form>
            </div>
        )
    }

}


export default  User
