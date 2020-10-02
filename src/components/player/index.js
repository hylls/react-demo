import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import { shallowEqual, useSelector } from 'react-redux'

import { Slider } from 'antd'

import { PlayerWrapper } from './style'
import { timeStapToTime, numToTime } from 'utils'
// import { getMusicUrl } from 'api/allApi'
// import { shallowEqual, useDispatch, useSelector } from 'react-redux'

// import { changeMoveTime } from '../../pages/main/store/action'

export default memo(function Player() {
  // 播放按钮
  const playerRef = useRef()
  const [isPlay, setPlay] = useState(false)
  const play = useCallback(() => {
    setPlay(!isPlay)
    !isPlay ? playerRef.current.play().catch(err => setPlay(false))
    : playerRef.current.pause()
  }, [isPlay])
  const [moveTime, setMoveTime] = useState('00:00')
  const [endTime, setEndTime] = useState('00:00')
  const { playList, currentSong } = useSelector((state) => ({
    playList: state.getIn(['recommand', 'playerList']),
    currentSong: state.getIn(['recommand', 'currentSong'])
  }), shallowEqual)
  useEffect(() => {
    playerRef.current.play()
      .then(res => setPlay(true)).catch(err => setPlay(false))
    setEndTime(timeStapToTime(currentSong.dt || 0))
    console.log(currentSong);
  }, [currentSong])
  function draging(value) {
    setMoveTime(numToTime(currentSong.dt, value))
  }
  // 歌词面板
  const [isLyricsShow, setLyrics] = useState(false)
  function openLyricsPanel() {
    setLyrics(!isLyricsShow)
  }
  // 一直显示打开面板 点及其他空白处消失
  const closePanel = useCallback((e) => {
    setLyrics(false)
  }, [])
  useEffect(() => {
    document.getElementById('root').addEventListener('click', closePanel)
    return () => {
      document.getElementById('root').removeEventListener('click', closePanel)
    }
  }, [closePanel])
  function allwaysOpen(e) {
    setLyrics(true)
  }
  // 进度条事件
  function afterChange(value) {
    console.log(value)
  }
  const [process, setProcess] = useState(0)
  const timeSetProcess = useCallback(() => {
    setInterval(() => {
      setProcess(100/currentSong.dt * 1000 * 5)
    }, 200)
  }, [currentSong])
  useEffect(() => {
    timeSetProcess()
  }, [timeSetProcess])
  return (
    <PlayerWrapper>
      <div className="player-content d-flex a-c">
        <div className="player-btns d-flex j-c a-c">
          <i className="btn-prev icon-playbar c-p" />
          <i onClick={play} className={[isPlay === false ? 'btn-play' : 'btn-pause', 'icon-playbar', 'c-p'].join(' ')} />
          <i className="btn-next icon-playbar c-p" />
        </div>
        <div className="player-process d-flex a-c">
          {
            JSON.stringify(currentSong) === "{}"
            ? <img className="noPic icon-playbar_8" src="http://s4.music.126.net/style/web2/img/default/default_album.jpg" alt="歌手图片" />
            : <img style={{ width: 34, height: 35 }} src={currentSong.al.picUrl} alt="歌手图片" />
          }
          <div className="process">
            <div className="singer-info d-flex a-c">
              { JSON.stringify(currentSong) !== "{}" && <span>{currentSong.name}</span> }
              { JSON.stringify(currentSong) !== "{}" && <span>{currentSong.ar[0].name}</span> }
              <i className="link" />
            </div>
            <Slider onChange={draging} onAfterChange={afterChange} value={process} />
          </div>
          <div className="process-time">
              <span className="move-time">{moveTime}</span>
              <span>/</span>
              <span className="end-time">{endTime}</span>
            </div>
          <div className="right-btns d-flex c-p">
            <i className="collection icon-playbar_8 c-p" />
            <i className="share icon-playbar_8 c-p" />
            <i className="line icon-playbar_8 c-p" />
            <i className="volume icon-playbar_8 c-p" />
            <i className="play-type icon-playbar_8 c-p" />
            <i onClick={openLyricsPanel} className="play-list icon-playbar_8 c-p" />
          </div>
        </div>
      </div>
      <div className="block icon-playbar">
        <i className="blockBtn icon-playbar c-p" />
      </div>
      <audio id="audio" src={currentSong.url|| ''} ref={playerRef} />
      { isLyricsShow &&
        <div onClick={allwaysOpen} className="lyrics-panel">
          <div className="panel-header"></div>
          <div className="panel-content"></div>
        </div>
      }
    </PlayerWrapper>
  )
})