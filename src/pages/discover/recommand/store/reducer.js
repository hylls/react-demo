import { Map} from 'immutable'
const defaultState = Map({
  playerList: []
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_PLAYER_LIST':
      return state.set('playerList', action.payload)
    default:
      return state
  }
}