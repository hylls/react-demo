import { getMusicUrl } from 'api/allApi'
const addPlayerList = (list) => ({
  type: 'ADD_PLAYER_LIST',
  payload: list
})

export const asyncAddPlayerList = (id) => {
  return async (dispatch, getState) => {
    const res = await getMusicUrl(id)
    const playList = getState().getIn(['recommand', 'playerList'])
    const newList = [...playList].concat(res.data)
    // newList.push(res.data)
    dispatch(addPlayerList(newList))
  }
}