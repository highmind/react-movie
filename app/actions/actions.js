/*
 * action 类型
 */

export const SCROLL_POSITION = 'SCROLL_POSITION'; //滚动条位置
export const NAVBAR_SET = 'NAVBAR_SET';//NavBar文字


/*
 * action 创建函数
   action creator 函数
 */

export function setScroll(positionData){
  console.log('scrollPosition action 创建函数');
  return {type: SCROLL_POSITION, positionData}
}



export function navBarSet(text){
  console.log('activeNav action 创建函数');
  return {type: NAVBAR_SET, text}
}
