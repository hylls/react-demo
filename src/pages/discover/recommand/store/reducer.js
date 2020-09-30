import { Map} from 'immutable'
const defaultState = Map({
  playerList: [],
  currentSong: {}
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_PLAYER_LIST':
      return state.set('playerList', action.payload)
    case 'CHANGE_CURRENT_PLAY_SONG':
      return state.set('currentSong', action.payload)
    default:
      return state
  }
}