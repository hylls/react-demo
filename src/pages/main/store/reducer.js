import { Map } from 'immutable'

import * as type from './action'
const defaultstate = Map({
  // 进度条位置
  dragLeft: 0,
  moveTime: 0,
  endTime: 0
})

export default (state = defaultstate, action) => {
  switch (action.type) {
    case type.changeDragLeft:
      return state.set('dragLeft', action.dragLeft)
    case type.changeMoveTime:
      return state.set('moveTime', action.moveTime)
    case type.changeEndTime:
      return state.set('moveTime', action.moveTime)
    default: 
      return state
  }
}