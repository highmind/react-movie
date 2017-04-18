import React, { Component } from 'react'
import {Card, Slider, Loading, Button} from '../../components';
import {Link} from 'react-router';
import Axios from 'axios';
import './index.css';

class Home extends Component{
    constructor(props){
        super(props);
        this.ignoreLastFetch = false;
        this.state = {
          playingData : [],   //正在上映数据
          comingData : [],   //即将上映数据
          slider : [],     //轮播图数据
          sliderId : 0,    //轮播图组件id
          loading : true   //loading参数
        }
        this.props.actions.navBarSet("芝麻电影");
    }

    getData(){
        //数据返回之前，重新设置state,因为不同路由使用的一个组件，
        // 切换时，需要重置状态
        this.setState({
          loading : true   //loading参数
        })

        //测试webpack反向代理，完整接口数据http://api.chinaplat.com/getval_2017
        Axios.post('/getval_2017', {
          Action : 'GetCourseTypesList',
          kc_types : '1'
        })
        .then(function (response) {
          console.log(response.data);
        })
        .catch(function (response) {
          console.log(response);
        });


        let self = this;
        let url = 'http://mockdata/filmlist';
        Axios.get(url).then(function(res){
            console.log('--------Containers/Home--------');
            let data = res.data;
            if(!self.ignoreLastFetch){
                self.setState({
                    playingData : data.playingData,
                    comingData : data.comingData,
                    slider : data.slider.data,
                    sliderId : data.slider.id,
                    loading : false
                })
            }

            // 设置滚动条位置
            self.setPosition();
        })

    }

    savePosition() {
        console.log('...savePosition...');
        let scrollTop = document.body.scrollTop;//获取滚动条高度
        let path = this.props.location.pathname;//获取当前的pathname
        let positionData = {"scrollTop" : scrollTop, "path" : this.props.location.pathname};//redux中要存储的数据
        this.props.actions.setScroll(positionData);//通过action设置位置信息
    }

    // 设置滚动条位置
    setPosition(){
        console.log('...setPosition...');
        console.log(this.props.position);
        let posData = this.props.position;//获取store中的滚动条位置信息
        let len = posData.length;         //获取信息数组长度，用于获取最新的位置信息
        // let savePos = 0;                  //初始位置为0
        // let savePath = '';                //初始pathname为空
        // if(len != 0 ){                    //当位置信息数组不为空的时候，设置位置和pathname
        let  savePos = posData[len - 1].position.scrollTop;
        let  savePath = posData[len - 1].position.path;
        console.log(savePos);
        console.log(savePath)
        // }

        let path = this.props.location.pathname; //获取当前pathname
        if(path == savePath){                    //当store中路径和当前路径一致时，
             window.scrollTo(0, savePos);           //设置滚动条位置到 相应位置
             let positionData = {"scrollTop" : 0, "path" : this.props.location.pathname};
             //this.props.setScroll(positionData);    //设置store中当前path为0，解决导航栏目切换时，滚动条位置
         }
        else{    //否则滚动到顶部
           window.scrollTo(0, 0);
        }

    }

    componentDidMount(){
        console.log('--------Containers/Home---componentDidMount--------');
        this.getData();
    }

    componentWillUnmount () {
        // 上面步骤四，在组件移除前忽略正在进行中的请求
        this.ignoreLastFetch = true
        this.savePosition()
    }

    getFilmList(data){
      let nodes = data.map(function(dData){
        let cardFLNode = <div>
          <h4 className="card-title">{dData.name}</h4>
          <p className="card-text">
            {dData.cinemaCount}家影院上映 {dData.watchCount}人购票
          </p>
        </div>;
        let cardFRNode = <span className="card-score">{dData.grade}</span>;
        return(
          <Link key={dData.id} to={`/film/${dData.id}`}>
            <Card
              key={dData.id}
              data={dData}
              cardFooterLeft={cardFLNode}
              cardFooterRight={cardFRNode}
            />
          </Link>
        )
      })

      return (
        <div className="film-list">
          {nodes}
        </div>
      )

    }

    getCommingFilmList(data){
      let nodes = data.map(function(dData){
        let cardFLNode = <h4 className="card-title2">{dData.name}</h4>;
        let cardFRNode = <span className="card-time">{dData.showTime}上映</span>;
        return(
          <Link key={dData.id} to={`/film/${dData.id}`}>
            <Card
              key={dData.id}
              data={dData}
              cardFooterLeft={cardFLNode}
              cardFooterRight={cardFRNode}
            />
          </Link>
        )
      })

      return (
        <div className="film-list">
          {nodes}
        </div>
      )

    }

    render(){
        return(
            <div className="main-con">
                <Loading active={this.state.loading} />
                <div className={this.state.loading ? "con-hide" : "con-show"}>
                    <Slider id={this.state.sliderId} data={this.state.slider} />
                    {this.getFilmList(this.state.playingData)}
                    <Link to="/filmlist/playing">
                      <Button type="ghost" clsName="home-more">更多热映电影</Button>
                    </Link>
                    {this.getCommingFilmList(this.state.comingData)}
                    <Link to="/filmlist/coming">
                      <Button type="ghost" clsName="home-more">更多即将上映电影</Button>
                    </Link>
                </div>
            </div>
        )
    }

}

export default  Home
