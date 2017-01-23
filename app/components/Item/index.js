import React, { Component } from 'react';
import {Link} from 'react-router';
import './index.css';

class Item extends Component{
    constructor(props){
        super(props);
        this.state={}
    }

    render(){

        return (
          <div>
            <div className="news-wrap">
                <div className="news-img">
                    <Link to={`film/${this.props.data.id}`}>
                        <img width="100%" src={this.props.data.cover.origin} alt=""/>
                    </Link>
                </div>
                <div className="news-con">
                    <h4>
                        <Link to={`film/${this.props.data.id}`}>
                            {this.props.data.name}
                        </Link>
                    </h4>
                    <p className="time-bar">{this.props.data.intro}</p>
                </div>
            </div>
          </div>
        )
    }

}

export default Item;
