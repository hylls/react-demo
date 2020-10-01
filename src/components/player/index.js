import React, { memo, useEffect, useRef, useState } from 'react'
import { shallowEqual, useSelector } from 'react-redux'

import { Slider } from 'antd'

import { PlayerWrapper } from './style'
import { timeStapToTime, numToTime } from 'utils'
// import { getMusicUrl } from 'api/allApi'
// import { shallowEqual, useDispatch, useSelector } from 'react-redux'

// import { changeMoveTime } from '../../pages/main/store/action'

export default memo(function Player() {
  const playerRef = useRef()
  const [isPlay, setPlay] = useState(false)
  function playClick(bool) {
    const audio = document.querySelector('#audio')
    if (bool) {
      audio.play()
    } else {
      audio.pause()
    }
  }
  function play() {
    if (isPlay) {
      // playerRef.current.pause().catch(res => console.log(res))
      playClick(true)
      setPlay(false)
    } else {
      // playerRef.current.play().catch(res => console.log(res))
      playClick(false)
      setPlay(true)
    }
  }
  const [moveTime, setMoveTime] = useState('00:00')
  const [endTime, setEndTime] = useState('04:00')
  const { playList, currentSong } = useSelector((state) => ({
    playList: state.getIn(['recommand', 'playerList']),
    currentSong: state.getIn(['recommand', 'currentSong'])
  }), shallowEqual)
  useEffect(() => {
    // playerRef.current.play()
    // setPlay(true)
    // setEndTime(timeStapToTime(currentSong.publishTime || 0))
  }, [currentSong])
  // function getSingTime() {
    
  // }
  function draging(value) {
    // setMoveTime(value)
    setMoveTime(numToTime(currentSong.publishTime, value))
    // setMoveTime(numToTime(4 * 60 * 1000, value))
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
              <span className="end-time">{endTime}</span>
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
      <audio id="audio" src={currentSong.url} ref={playerRef} />
    </PlayerWrapper>
  )
})