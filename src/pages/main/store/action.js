import * as action from './constant'
export const changeDragLeft = (distance) => ({
  type: action.CHANGE_DRAG_LEFT,
  dragLeft: distance
})
export const changeMoveTime = (time) => ({
  type: action.CHANGE_MOVE_TIME,
  moveTime: time
})
export const changeEndTime = (time) => ({
  type: action.CHANGE_END_TIME,
  endTime: time
})