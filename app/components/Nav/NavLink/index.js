import React,{Component} from 'react';
import { Link } from 'react-router';
import './index.css';
class NavLink extends React.Component{
    render(){
        return (
            <Link to={this.props.link} activeClassName="route-active" className={this.props.active ? 'nav-link-active' : 'nav-link-disabled'}  key={this.props.id}>{this.props.name}</Link>
        )
    }

}

export default NavLink;
