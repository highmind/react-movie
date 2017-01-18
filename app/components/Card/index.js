import React, { Component } from 'react';
import './index.css';

class Card extends Component{
    constructor(props){
        super(props);
        this.state={}

    }

    render(){
        let {data} = this.props;
        return (
          <div className="card">
              <img className="card-img" src={data.cover.origin} alt=""/>
              <div className="card-c">
                <div className="card-l">
                  <h4 className="card-title">{data.name}</h4>
                  <p className="card-text">
                    {data.cinemaCount}家影院上映 {data.watchCount}人购票
                  </p>
                </div>
                <div className="card-r">
                  <span className="card-score">{data.grade}</span>
                </div>
              </div>
          </div>
        )
    }

}

export default Card;
