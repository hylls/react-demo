import { Map } from 'immutable'
import * as type from './actions'
const defaultState = Map({
  playerList: []
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case type.addPlayerList:
      return state.setIn('playerList', action.payload)
    default:
      return state
  }
}