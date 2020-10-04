import { getMusicUrl } from 'api/allApi'
const addPlayerList = (list) => ({
  type: 'ADD_PLAYER_LIST',
  payload: list
})

const changeCurrentSong = (song) => (
  {
    type: 'CHANGE_CURRENT_PLAY_SONG',
    payload: song
  }
)

export const asyncAddPlayerList = (info) => {
  return (dispatch, getState) => {
    const playList = getState().getIn(['recommand', 'playerList'])
    const state = playList.find(item => item.id === info.id)
    const newList = state ? [...playList] : [...playList].concat(info)
    dispatch(addPlayerList(newList))
  }
}

// 更改当前歌曲
export const changeCurrentPlaySong = (songInfo) => {
  return async (dispatch) => {
    const res = await getMusicUrl(songInfo.id)
    // console.log(res)
    dispatch(changeCurrentSong({...songInfo, ...res.data[0]}))
  }
}

// 删除当前歌曲
export const deleteCurrentSong = (index) => {
  return (dispatch, getState) => {
    const playList = getState().getIn(['recommand', 'playerList'])
    playList.splice(index, 1)
    console.log(playList);
    dispatch({
      type: 'DELETE_CURRENT_SONG',
      payload: playList
    })
  }
}