/*
 * action 类型
 */

export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const SCROLL_POSITION = 'SCROLL_POSITION'; //滚动条位置

/*
 * action 创建函数
 */

export function addTodo(text) {
  console.log('addTodo action创建函数');
  return { type: ADD_TODO, text }
}

export function deleteToDo(index){
    console.log('deleteToDo action创建函数');
    return {type: DELETE_TODO, index}
}

export function setScroll(positionData){
  console.log('scrollPosition action 创建函数');
  return {type: SCROLL_POSITION, positionData}
}
