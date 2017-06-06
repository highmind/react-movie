// import React, { Component } from 'react'
// import {Link} from 'react-router';
// import {ListView} from 'antd-mobile';
// import {Item, Loading, Button} from '../../components';
// import Axios from 'axios';
// import './index.css';
//
// let pageIndex = 0;
//
// class FilmList extends Component{
//     constructor(props){
//         super(props);
//         const dataSource = new ListView.DataSource({ //必须定了rowHasChanged
//           rowHasChanged:(row1, row2) => row1 !== row2,
//         });
//
//         this.state = {
//           dataSource:dataSource.cloneWithRows({}),
//           isLoading: true,
//           count: 7,
//         }
//
//     }
//
//     // type 为通过url传的参数
//     getData(type, pageIndex){
//         //数据返回之前，重新设置state,因为不同路由使用的一个组件，切换时，需要重置状态
//         this.setState({
//           isLoading : true   //loading参数
//         })
//
//         pageIndex++;
//
//         // let self = this;
//         let url = 'http://mockdata/' + type + '?page=0' +'&count=' + this.state.count;
//         Axios.get(url).then((res) => {
//           if(!this.ignoreLastFetch){
//               this.rData = res.data.data;
//               this.setState({
//                   dataSource : this.state.dataSource.cloneWithRows(this.rData),
//                   isLoading : false
//               })
//           }
//         })
//
//         // Axios.get(url).then(function(res){
//         //     if(!self.ignoreLastFetch){
//         //         this.rData = res.data.data;
//         //         self.setState({
//         //             dataSource : self.state.dataSource.cloneWithRows(this.rData),
//         //             isLoading : false
//         //         })
//         //     }
//         // })
//
//     }
//
//     componentDidMount(){
//       this.props.actions.navBarSet("全部影片");
//       this.getData(this.props.params.type, 0);
//     }
//
//     //滑动到底部
//     onEndReached = (event) => {
//       //如果正在加载，返回
//       if(this.state.isLoading){
//         return;
//       }
//
//       this.setState({
//         isLoading : true   //loading参数
//       })
//
//       console.log('bottom');
//
//       let url = 'http://mockdata/' + this.props.params.type + '?page=0' +'&count=' + this.state.count;
//       Axios.get(url).then((res) => {
//         if(!this.ignoreLastFetch){
//             this.rData = [...this.rData, ...res.data.data];
//             this.setState({
//                 dataSource : this.state.dataSource.cloneWithRows(this.rData),
//                 isLoading : false
//             })
//         }
//       })
//     }
//
//     render(){
//       const separator = (sectionID, rowID) => (
//         <div key={`${sectionID}-${rowID}`}
//           style={{
//             backgroundColor: '#F5F5F9',
//             height: 8,
//             borderTop: '1px solid #ECECED',
//             borderBottom: '1px solid #ECECED',
//           }}
//         />
//       );
//
//       const row = (rowData, sectionID, rowID) => {
//         return (
//             <Item key={rowData.id} data={rowData} />
//         );
//       };
//
//
//       return (
//
//         <ListView ref="lv"
//           dataSource={this.state.dataSource}
//           renderHeader={() => (
//               <div className="filmlist-head">
//                  <Link className="filmlist-type-link"
//                    activeClassName="filmlist-active"
//                    to="/filmlist/playing">
//                    正在热映
//                  </Link>
//                  <Link className="filmlist-type-link"
//                    activeClassName="filmlist-active"
//                     to="/filmlist/coming">
//                     即将上映
//                   </Link>
//                </div>)}
//           renderFooter={() => (
//             <div style={{paddingBottom: '20px'}}>
//               <Button clsName="home-more" isPlain>查看更多</Button>
//               <Loading active={this.state.isLoading} />
//             </div>)}
//           renderRow={row}
//           renderSeparator={separator}
//           className="am-list"
//           pageSize={7}
//           useBodyScroll
//           scrollRenderAheadDistance={500}
//           scrollEventThrottle={20}
//           onScroll={() => { console.log('scroll'); }}
//           onEndReached={this.onEndReached}
//           onEndReachedThreshold={10}
//         />
//       );
//
//     }
//
//
// }

// 没有使用 listview的版本，使用按钮
import React, { Component } from 'react'
import {Link} from 'react-router';
import {Item, List, Loading, Button} from '../../components';
import Axios from 'axios';
import './index.css';

class FilmList extends Component{
    constructor(props){
        super(props);
        this.ignoreLastFetch = false;
        this.state = {
          filmlist : [],   //新闻列表数据
          page : 0,
          count: 4,
          loading : true,   //loading参数
          bottomLoading : false
        }

        this.handleClick = this.handleClick.bind(this);
    }

    // type 为通过url传的参数
    getData(type){
        //数据返回之前，重新设置state,因为不同路由使用的一个组件，切换时，需要重置状态
        this.setState({
          loading : true   //loading参数
        })

        let self = this;
        let url = 'http://mockdata/' + type + '?page=' + this.state.page +'&count=' + this.state.count;
        Axios.get(url).then(function(res){
            if(!self.ignoreLastFetch){
                self.setState({
                    filmlist : res.data.data,
                    loading : false
                })
            }
            self.setPosition();// 设置滚动条位置
        })

    }

    savePosition() {
        console.log('...savePosition...');
        let scrollTop = document.body.scrollTop;//获取滚动条高度
        let path = this.props.location.pathname;//获取当前的pathname
        let positionData = {
          "scrollTop" : scrollTop,
          "path" : this.props.location.pathname
        };//redux中要存储的数据
        this.props.actions.setScroll(positionData);//通过action设置位置信息
    }

    // 设置滚动条位置
    setPosition(){
        console.log('...setPosition...');
        let posData = this.props.position;//获取store中的滚动条位置信息
        let len = posData.length;         //获取信息数组长度，用于获取最新的位置信息
        let savePos = 0;                  //初始位置为0
        let savePath = '';                //初始pathname为空
        if(len != 0 ){                    //当位置信息数组不为空的时候，设置位置和pathname
            savePos = posData[len - 1].position.scrollTop;
            savePath = posData[len - 1].position.path;
        }

        let path = this.props.location.pathname; //获取当前pathname
        if(path == savePath){                    //当store中路径和当前路径一致时，
          window.scrollTo(0, savePos);           //设置滚动条位置到 相应位置
          let positionData = {"scrollTop" : 0, "path" : this.props.location.pathname};
          this.props.setScroll(positionData);    //设置store中当前path为0，解决导航栏目切换时，滚动条位置
        }
        else{                                   //否则滚动到顶部
          window.scrollTo(0, 0);
        }
    }

    handleClick(){
      let self = this;
      this.setState({
        bottomLoading : true   //loading参数
      })
      // 正常数据情况下
      // let page = this.state.page++;
      // let url = 'http://mockdata/' + this.state.type +
      // '?page='+ this.state.page+'&count=' + this.state.count;
      // mock数据情况下
      let url = 'http://mockdata/' + this.props.params.type +
      '?page='+ 2 +'&count=' + this.state.count;
      Axios.get(url).then(function(res){
          let data = [...self.state.filmlist, ...res.data.data]; //两个数组合并为一个数组
          console.log(data)
          if(!self.ignoreLastFetch){
              self.setState({
                  filmlist : data,
                  bottomLoading : false
              })
          };
      })
    }

    componentDidMount(){
        this.props.actions.navBarSet("全部影片");
        this.getData(this.props.params.type);
    }

    componentDidUpdate(prevProps) {
        // 上面步骤3，通过参数更新数据
        let oldType = prevProps.params.type;
        let type = this.props.params.type;
        if (type !== oldType){
            // 如果路由获取不到参数，获取推荐数据
            if(typeof(type) == 'undefined'){
              this.getData('playing');
            }
            // 否则获取相应栏目数据，根据type查询
            else {
              this.getData(type);
            }
        }
    }

    componentWillUnmount () {
        // 在组件移除前忽略正在进行中的请求
        this.ignoreLastFetch = true;
        this.savePosition();
    }

    render(){
        return(
            <div className="main-con">
               <div className="filmlist-head">
                  <Link className="filmlist-type-link"
                    activeClassName="filmlist-active"
                    to="/filmlist/playing">
                    正在热映
                  </Link>
                  <Link className="filmlist-type-link"
                    activeClassName="filmlist-active"
                     to="/filmlist/coming">
                     即将上映
                   </Link>
                </div>
                <Loading active={this.state.loading} />
                <div className={this.state.loading ? "con-hide" : "con-show"}>
                    <List data={this.state.filmlist} />
                </div>
                <Loading active={this.state.bottomLoading} />
                <Button clsName="home-more" isPlain clickEvent={this.handleClick}>查看更多</Button>
            </div>
        )
    }

}


export default  FilmList
