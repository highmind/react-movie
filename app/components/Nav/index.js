import React from 'react';
import ReactDOM from 'react-dom';
import { Link,IndexLink } from 'react-router';
import NavLink from './NavLink';
import IcoLink from '../IcoLink';
import './index.css';
class Nav extends React.Component{
    constructor(props){
      super(props);
      this.state={
        active : this.props.active
      }
      this.toggleClick = this.toggleClick.bind(this)
      console.log('...nav...')
      console.log(this.props.active)
    }

    // 点击导航链接以后，隐藏导航
    toggleClick(){
      // this.setState({
      //   active : !this.state.active
      // })
      console.log('...nav... click')
      // this.props.setNavActive(!this.state.active);
    }

    // componentDidMount(){
    //   this.setState({
    //     active : this.props.active
    //   })
    // }

    render(){

         let navNodes = this.props.data.map(function(detail, index){
            return(
              <NavLink key={detail.id} name={detail.name} link={detail.link}/>
            )
        })

        return (
          <div className={this.props.active ? "nav" : "nav nav-hide" }
          onClick={this.props.setNavActive}>
            <div className="nav-con">
              {navNodes}
            </div>
          </div>
        )
    }


}

export default Nav;
