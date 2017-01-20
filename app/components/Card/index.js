import React, { Component } from 'react';
import './index.css';

class Card extends Component{
    constructor(props){
        super(props);
        this.state={}

    }

    render(){
        let {data, cardFooter} = this.props;
        console.log(cardFooter)
        return (
          <div className="card">
              <img className="card-img" src={data.cover.origin} alt=""/>
              {cardFooter}
          </div>
        )
    }

}

export default Card;
