import React, { Component } from 'react';
import {Link} from 'react-router';
import {Button} from '../../components';
import './index.css';

class Item extends Component{
    constructor(props){
        super(props);
        this.state={}
    }

    render(){
        return (
          <div>
            <Link to={`film/${this.props.data.id}`}>
              <div className="news-wrap">
                  <div className="news-img">
                      <img width="100%" src={this.props.data.cover.origin} alt=""/>
                  </div>
                  <div className="news-con">
                      <h4>{this.props.data.name}</h4>
                      <p className="time-bar">{this.props.data.intro}</p>
                  </div>
                  <div className="news-right">
                    <Button  clsName="movie-more-btn" isPlain>更多</Button>
                  </div>
              </div>
            </Link>
          </div>
        )
    }

}

export default Item;
