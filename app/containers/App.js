import React, { Component } from 'react'
import {bindActionCreators} from 'redux'
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
            data:[]
        }
    }

    componentDidMount(){
        console.log('-------App--------')
        console.log('主容器App执行componentDidMount')
        // 初始化数据
    }

    render(){
        return(
          <div>
              {React.cloneElement(this.props.children, this.props)}
          </div>
        )
    }

}

// <div>
//               {this.props.children}
//           </div>
function mapStateToProps(state){
    return { position: state.setScroll,todoList : state.todos}
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(actionCreators, dispatch);
}

export default  connect(mapStateToProps, mapDispatchToProps)(App)
