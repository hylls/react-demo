// import { getMusicUrl } from 'api/allApi'
const addPlayerList = (list) => ({
  type: 'ADD_PLAYER_LIST',
  payload: list
})

export const asyncAddPlayerList = (info) => {
  return (dispatch, getState) => {
    const playList = getState().getIn(['recommand', 'playerList'])
    const state = playList.find(item => item.id === info.id)
    const newList = state ? [...playList] : [...playList].concat(info)
    dispatch(addPlayerList(newList))
  }
}

export const changeCurrentPlaySong = (songInfo) => {
  return {
    type: 'CHANGE_CURRENT_PLAY_SONG',
    payload: songInfo
  }
}