import React,{Component} from 'react';
import {Link} from 'react-router';
import {Carousel} from 'antd-mobile';
import './index.css';
class Slider extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

    makeChildren(data){
        let nodes = data.map(function(detail, index){
            return(
                <Link className="item" key={detail.id} to={detail.url}>
                    <img src={detail.imgUrl}/>
                </Link>
            );
        })

        return nodes;

    }

    render(){
        return (
            <Carousel key={this.props.id} className="h-slider"  infinite >
               {this.makeChildren(this.props.data)}
            </Carousel>
        )
    }
}

export default Slider;
