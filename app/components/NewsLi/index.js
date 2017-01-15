import React, { Component } from 'react';
import {Link} from 'react-router';
import './index.css';

class NewsLi extends React.Component{
    constructor(props){
        super(props);
        // 相当于ES5 getInitalState
        this.state={}
    }

    getImgNodes(imgData){
        let imgNodes = imgData.map(function(imgDetailData, index){
            return (
              <img width="100%" src={imgDetailData} key={index} alt="" />
            )
        })
        return imgNodes
    }

    getNodes(type){
      let imgNodes = this.getImgNodes(this.props.data.imgUrl);
      switch (type){
        // 单张图形式
        case 1:
          return(
            <div className="news-wrap">
                <div className="news-img">

                    <Link to={this.props.data.url}>
                        {imgNodes}
                    </Link>
                </div>
                <div className="news-con">
                    <h4>
                        <Link to={this.props.data.url}>
                            {this.props.data.title}
                        </Link>
                    </h4>
                    <p className="time-bar">{this.props.data.time}</p>
                </div>
            </div>
          )
        break;
        // 三张图形式
        case 2:
            return(
              <div className="news-wrap2">
                  <div className="news-con2">
                      <h4>
                          <Link to={this.props.data.url}>
                              {this.props.data.title}
                          </Link>
                      </h4>
                  </div>
                  <div className="news-img2">

                      <Link className="img-wrap" to={this.props.data.url}>
                          {imgNodes}
                      </Link>

                  </div>
                  <p className="time-bar">{this.props.data.time}</p>
              </div>
            )
        break;
      }
    }

    render(){
        let newsNodes = this.getNodes(this.props.data.displayType);
        return (
          <div>
              {newsNodes}
          </div>
        )
    }

}

export default NewsLi;
