import React from 'react';
import ReactDOM from 'react-dom';
import {Link, IndexLink} from 'react-router';
import NavLink from './NavLink';
import './index.css';
class Nav extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        active : this.props.active
      }
    }

    render(){
        let navNodes = this.props.data.map(function(detail, index){
           if(index == 0){
                return(
                  <IndexLink className="nav-link" to="/" activeClassName="route-active">
                    {detail.name}
                    <i className="iconfont icon-xiangyoujiantou"></i>
                  </IndexLink>
                )
            }else{
                  return(
                    <NavLink
                      key={detail.id}
                      name={detail.name}
                      link={detail.link}/>
                  )
            }

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
