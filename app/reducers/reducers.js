import { combineReducers } from 'redux'
import { ADD_TODO, DELETE_TODO, SCROLL_POSITION} from '../actions/actions'

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      console.log('todos ... ADD_TODO...reducers')
      return [
        ...state,
        {
          text: action.text
        }
      ]

    default:
      return state
  }
}

function test(state = [], action) {

  switch (action.type) {

    case DELETE_TODO:
      console.log('todos ... DELETE_TODO...reducers')
      return [
        ...state,
        {
          text: action.index
        }
      ]

    default:
      return state
  }
}

function setScroll(state = [], action){
  switch (action.type) {

    case SCROLL_POSITION:
      console.log('setScroll ... SCROLL_POSITION ... reducers')
      return [
        ...state,
        {
          position:action.positionData
        }
      ]


    default:
      return state
  }
}

const rootReducer = combineReducers({
  todos,
  test,
  setScroll
})



export default rootReducer
