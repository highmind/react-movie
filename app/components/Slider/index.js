import React,{Component} from 'react';
import { Link } from 'react-router';
// import Carousel from 'nuka-carousel';
import { Carousel  } from 'antd-mobile';
import './index.css';
//配置按钮和dots的显示和隐藏
// const noDots = Carousel.getDefaultProps().decorators.slice(2, 3);
// console.log(Carousel.getDefaultProps())
class Slider extends React.Component{
    constructor(props){
        super(props);
        // 相当于ES5 getInitalState
        this.state={

        }
    }

    makeChildren(data){
        console.log(data)
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
