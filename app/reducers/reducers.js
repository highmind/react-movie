import { combineReducers } from 'redux'  //导入合并reducer方法
import { SCROLL_POSITION, NAVBAR_SET} from '../actions/actions' //导入需要的actionType


//功能：设置滚动条数据
//原理：1 默认返回为改变的 state
//     2 SCROLL_POSITION 下，将旧state与新的state合并，并返回
let defaultPos = [
  {
    position :{
      "scrollTop": 0,
      "path": "/"
    }
  }
]

// reducer一般是纯函数，尽量不做逻辑操作。函数名自定义即可
function setScrollTest(state = defaultPos, action){
  switch (action.type) {
    case SCROLL_POSITION:
      console.log('setScroll ... SCROLL_POSITION ... reducers')
      return [
        ...state,
        {
          position:action.positionData
        }
      ]
        //  Object.assign({}, state, {position:action.positionData})

    default:
      return state
  }
}


function navBarSetTest(state = [], action){
  switch (action.type) {
    case NAVBAR_SET:
      return action.text

    default:
      return state
  }
}

//合并多个reducer,大型项目中，合并拆分成文件的 reducer，方便维护
const rootReducer = combineReducers({
  setScrollTest,
  navBarSetTest
})



export default rootReducer
