import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import { shallowEqual, useSelector, useDispatch } from 'react-redux'

import { Slider } from 'antd'

import { PlayerWrapper } from './style'
import { timeStapToTime, numToTime } from 'utils'
import * as actions from 'pages/discover/recommand/store/actions'
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
  // console.log(playList);
  useEffect(() => {
    playerRef.current.play()
      .then(res => setPlay(true)).catch(err => setPlay(false))
    setEndTime(timeStapToTime(currentSong.dt || 0))
  }, [currentSong])
  // 歌词面板
  const [isLyricsShow, setLyrics] = useState(false)
  function openLyricsPanel() {
    setLyrics(!isLyricsShow)
  }
  // 一直显示打开面板 点及其他空白处消失
  const closePanel = useCallback((e) => {
    setLyrics(false)
  }, [])
  // useEffect(() => {
  //   document.querySelector('body').addEventListener('click', closePanel)
  //   return () => {
  //     document.querySelector('body').removeEventListener('click', closePanel)
  //   }
  // }, [closePanel])
  const allwaysOpen = (e) => {
    // e.nativeEvent.stopImmediatePropagation()
    setLyrics(true)
  }
  // 进度条事件
  const [process, setProcess] = useState(0)
  function draging(value) {
    console.log(playerRef.current);
    playerRef.current.pause()
    setPlay(false)
    setMoveTime(numToTime(currentSong.dt, value))
    setProcess(value)
  }
  const afterChange = useCallback((value) => {
    const time = value / 100 * currentSong.dt / 1000
    playerRef.current.currentTime = time
    if (!isPlay) {
      play()
    }
  }, [isPlay, play, currentSong])
  const timeUpdate = e => {
    console.dir(e.target.volume = 0.2)
    const currentTime = e.target.currentTime
    setProcess(currentTime / currentSong.dt * 100 * 1000)
    setMoveTime(timeStapToTime(currentTime * 1000))
  }
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
      <audio id="audio" src={currentSong.url|| ''} onTimeUpdate={timeUpdate} ref={playerRef} />
      { isLyricsShow && <Panel allwaysOpen={allwaysOpen} /> }
    </PlayerWrapper>
  )
})

function Panel(props) {
  const { playList, currentSong } = useSelector((state) => ({
    playList: state.getIn(['recommand', 'playerList']),
    currentSong: state.getIn(['recommand', 'currentSong'])
  }), shallowEqual)
  // 切换当前歌曲
  const dispatch = useDispatch()
  const changeCurrentSong = useCallback((index) => {
    dispatch(actions.changeCurrentPlaySong(playList[index]))
  }, [dispatch, playList])
  // 删除当前歌曲
  const deleteCurrentSong = useCallback((e, index) => {
    e.nativeEvent.stopImmediatePropagation()
    dispatch(actions.deleteCurrentSong(index))
  }, [dispatch])
  function SongList() {
    return (
      <>
          {
            playList.map((item, index) => (
              <div onClick={() => changeCurrentSong(index)} className="list-content d-flex c-p" key={item.id} >
                <div className="icon">
                  { item.id === currentSong.id && <i className="current-icon" /> }
                </div>
                <div className="song d-flex">
                  <span className="song-name text-noWrap">{item.name}</span>
                  <div className="four-icon d-flex">
                    <div className="icons d-flex">
                      <i className="collect icon-play-list" />
                      <i className="share icon-play-list" />
                      <i className="download icon-play-list" />
                      <i onClick={(e) => deleteCurrentSong(e, index)} className="delete icon-play-list" />
                    </div>
                  </div>
                </div>
                <div className="author-name u-line">{item.ar[0].name}</div>
                <div className="end-time">{timeStapToTime(item.dt)}</div>
                <i className="link" />
              </div>
            ))
          }
      </>
    )
  }
  return (
    <div onClick={props.allwaysOpen} className="lyrics-panel">
      <img className="image" src="https://p4.music.126.net/qeN7o2R3_OTPhghmkctFBQ==/764160591569856.jpg" alt=""/>
      <div className="panel-header d-flex">
        <h3 className="play-list">播放列表({playList.length})</h3>
        <div className="collect">
          <i className="collection" />
          <span className="c-p u-line">收藏全部</span>
        </div>
        <span className="line"></span>
        <div className="clear">
          <i className="clear-icon" />
          <span className="c-p u-line">清除</span>
        </div>
        <div className="song-name d-flex">{currentSong.name}</div>
      </div>
      <div className="panel-content d-flex">
        <div className="song-list d-flex">
          {
            playList.length
            ? <SongList/>
            : <div></div>
          }
        </div>
        <div className="lyrics-content"></div>
      </div>
    </div>
  )
}