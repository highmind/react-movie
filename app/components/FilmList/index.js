import React, { Component } from 'react';
import Item from '../Item';
class FilmList extends Component{
    constructor(props){
        super(props);
        this.state={}
    }

    render(){
        var newsNodes = this.props.data.map(function(detailData){
            return(
                <Item key={detailData.id} data={detailData} />
            );
        });
        return(
          <div>{newsNodes}</div>
        )
    }

}

export default FilmList;
