import React, { memo, useRef, useState } from 'react'
import { shallowEqual, useSelector } from 'react-redux'

import { Slider } from 'antd'

import { PlayerWrapper } from './style'
// import { shallowEqual, useDispatch, useSelector } from 'react-redux'

// import { changeMoveTime } from '../../pages/main/store/action'

export default memo(function Player() {
  const playerRef = useRef()
  function play() {
    playerRef.current.play()
  }
  const [moveTime, setMoveTime] = useState(0)
  const [entTime, setEndTime] = useState(0)
  const { playList, currentSong } = useSelector((state) => ({
    playList: state.getIn(['recommand', 'playerList']),
    currentSong: state.getIn(['recommand', 'currentSong'])
  }), shallowEqual)
  // console.log(playList)
  // console.log(currentSong)
  function getSingTime(val) {
    
  }
  function draging(value) {
    setMoveTime(value)
  }
  return (
    <PlayerWrapper>
      <div className="player-content d-flex a-c">
        <div className="player-btns d-flex j-c a-c">
          <i className="btn-prev icon-playbar c-p" />
          <i onClick={play} className="btn-play icon-playbar c-p" />
          <i className="btn-next icon-playbar c-p" />
        </div>
        <div className="player-process d-flex a-c">
          <i className="singer-image" />
          <div className="process d-flex">
            <div className="singer-info d-flex a-c">
              <span>烟花大会</span>
              <span>徐秉龙</span>
              <i className="link" />
            </div>
            <Slider onChange={draging} defaultValue={0} />
            <div className="process-time">
              <span className="move-time">{moveTime}</span>
              <span>/</span>
              <span className="end-time">{entTime}</span>
              {/* {
                playList.map(item => (
                  <span key={item.id}>{item.id}</span>
                ))
              } */}
            </div>
          </div>
          <div className="right-btns">
            <i className="collection" />
          </div>
        </div>
      </div>
      <div className="block icon-playbar">
        <i className="blockBtn icon-playbar c-p" />
      </div>
      <audio src="https://music.163.com/song/media/outer/url?id=1480280185.mp3" ref={playerRef} />
    </PlayerWrapper>
  )
})