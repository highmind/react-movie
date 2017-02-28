import React, { Component } from 'react'
import Axios from 'axios'; //引入axios处理ajax
import {Loading, Button} from '../../components';
// 只使用一个组件
// import Button from 'antd-mobile/lib/button'
// import 'antd-mobile/lib/button/style/index.css'
// import {Button} from 'antd-mobile';// 整个引入
import './index.css';
class Detail extends Component{
    constructor(props){
        super(props);
        this.state = {
            data : {},
            actor: [],
            loading : true
        }
    }

    getData(id){
        let self = this;
        let url = 'http://mockdata/detail';
        Axios.get(url).then(function(res){
            let filmData = res.data.film;
            self.setState({
                data : filmData,
                actor: filmData.actors,
                loading : false
            })

            self.props.actions.navBarSet(filmData.name)
        })
        window.scrollTo(0, 0);
    }

    componentDidMount(){
        // 初始化数据
        let id = this.props.params.id;
        this.getData(id);
    }

    getActor(data){
       let tmpStr = '';
       data.map(function(dData, index){
         if(index == 0){
           tmpStr += ' ' + dData.name;
         }
         else{
           tmpStr += ' / ' + dData.name;
         }
       })
       return tmpStr;
    }

    render(){
        const data = this.state.data;
        const detailHeadstyle = {backgroundImage: `url(${data.origin})`};
        return(
            <div className="detail-wrap">
                <Loading active={this.state.loading} />
                <div className={this.state.loading ? "con-hide" : "con-show"}>
                    <div className="detail-con">

                        <div className="detail-head">
                          <div className="img-filter" style={detailHeadstyle}></div>
                          <div className="detail-h-l">
                            <img width="100%" src={data.origin} alt=""/>
                          </div>
                          <div className="detail-h-r">
                            <p className="detail-title">{data.name}</p>
                            <p>{data.intro}</p>
                            <p className="detail-score">{data.grade}分</p>
                            <p>{data.category}</p>
                            <p>{data.nation}/{data.mins}分钟</p>
                          </div>
                        </div>
                        <div className="pay-btn-wrap">
                          <Button clsName="pay-btn">
                            立即购票
                          </Button>
                        </div>
                        <div className="detail-main">
                          <p>
                            <span>演职人员</span>
                            {this.getActor(this.state.actor)}
                          </p>
                          <p>{data.synopsis}</p>
                        </div>

                    </div>
                </div>
            </div>

        )
    }

}
export default  Detail;
