import React, { memo, useCallback, useState } from 'react'
import { TopListItemWrapper } from './style'
import { useDispatch } from 'react-redux'

import * as actions from 'pages/discover/recommand/store/actions'

// import { getMusicUrl } from 'api/allApi'

function ListItemLi(props) {
  const [state, setState] = useState(false)
  const dispatch = useDispatch()
  function buttonShow() {
    setState(true)
  }
  function buttonHidden() {
    setState(false)
  }
  const playClick = useCallback(() => {
    dispatch(actions.asyncAddPlayerList(props))
    dispatch(actions.changeCurrentPlaySong(props))
  }, [dispatch, props])
  function addListClick() {
    
  }
  function collectClick() {
    
  }
  return (
    <li className="top-list-li text-noWrap d-flex" onMouseEnter={buttonShow} onMouseLeave={buttonHidden}>
      <span className="index">{props.index}</span>
      <span title={props.name} className="name text-noWrap c-p u-line">{props.name}</span>
      {
        state && 
        <div className="d-flex btns">
          <i className="icon-index play c-p" onClick={playClick}/>
          <i className="icon-many addList c-p" onClick={addListClick}/>
          <i className="icon-index collect c-p" onClick={collectClick}/>
        </div>
      }
    </li>
  )
}

export default memo(function TopListItem(props) {
  const rankList = props.tracks.slice(0, 10)
  return (
    <TopListItemWrapper>
      <div className="top-list-item">
        <ul>
          <li className="item-header">
            <img className="c-p" alt={props.name} src={`${props.coverImgUrl}?param=100y100`} />
            <div className="right-header"><span className="c-p u-line title">{props.name}</span><i className="play icon-index c-p"/><i className="collect icon-index c-p"/></div>
          </li>
          {
            rankList.map((item, index) => (
              <ListItemLi key={item.id} index={index+1} {...item}/>
            ))
          }
          <li className="clear"><span className="c-p check-all u-line">查看全部&gt;</span></li>
        </ul>
      </div>
    </TopListItemWrapper>
  )
})