import React, { Component } from 'react'
import Axios from 'axios'; //引入axios处理ajax
import {Head, Loading, NewsListView} from '../../components';
import './index.css';
class Detail extends Component{
    constructor(props){
        super(props);
        console.log('--------Container/Detail--------');
        console.log('执行getInitialState');
        this.state = {
            data : [],
            imgUrls : [],
            loading : true
        }
    }

    getData(id){
        let self = this;
        let url = 'http://mockdata/get/detail';
        console.log('--------Container/Detail--------');
        console.log('请求的url为：' + url);
        Axios.get(url).then(function(res){
            let resData = res.data;
            console.log('--------Container/Detail--------');
            console.log('详情页面获取到的数据为：');
            console.log(resData);

            self.setState({
                data : resData.data,
                imgUrls : resData.data.imgUrls,
                loading : false
            })
        })
        window.scrollTo(0, 0);
    }

    componentDidMount(){
        console.log('--------Container/Detail--------');
        console.log('执行componentDidMount')
        // 初始化数据
        let id = this.props.params.id;
        console.log('详情页获取到的传值id: '+ id)
        this.getData(id);
    }


    render(){
        // 图片数据为数组，生成图片节点
        let imgNodes = this.state.imgUrls.map(function(data){
            return (
                <img width="100%" src={data.url} key={data.id} alt="" />
            )
        })

        return(

            <div className="detail-wrap">
                <Head name="橙子新闻" type="BackHead" />
                <NewsListView />
                <Loading active={this.state.loading} />
                <div className={this.state.loading ? "con-hide" : "con-show"}>
                    <div className="detail-con">
                        <h4 className="detail-title">{this.state.data.title}</h4>
                        <div className="detail-bar">
                            <span className="detail-author">{this.state.data.author}</span>
                            &nbsp;<span className="detail-time">{this.state.data.time}</span>
                        </div>
                        {imgNodes}
                        <div className="detail-text" dangerouslySetInnerHTML={{__html:this.state.data.content}}></div>
                    </div>
                </div>
            </div>

        )
    }

}
export default  Detail;
