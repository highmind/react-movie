import React, { Component } from 'react';
import './index.css';

class Card extends Component{
    constructor(props){
        super(props);
        this.state={}
    }
    
    render(){
        let {data, cardFooterLeft, cardFooterRight} = this.props;
        return (
          <div className="card">
              <img className="card-img" src={data.cover.origin} alt=""/>
                <div className="card-c">
                  <div className="card-l">
                    {cardFooterLeft}
                  </div>
                  <div className="card-r">
                    {cardFooterRight}
                  </div>
                </div>
          </div>
        )
    }

}

export default Card;
