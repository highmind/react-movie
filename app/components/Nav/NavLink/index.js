import React,{Component} from 'react';
import { Link } from 'react-router';
import Icon from '../../Icon';
import './index.css';
class NavLink extends Component{
    render(){
        const {link, active, id, name} = this.props;
        return (

            <Link to={link} activeClassName="route-active"
              className="nav-link"
              key={id}>
              {name}
             <Icon type="icon-xiangyoujiantou" />
            </Link>

  
        )
    }

}

export default NavLink;
