import React, { memo, useRef } from 'react'

import { PlayerWrapper } from './style'

export default memo(function Player() {
  const playerRef = useRef()
  function play() {
    playerRef.current.play()
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
          <div className="process d-flex j-c">
            <div className="singer-info d-flex a-c">
              <span>烟花大会</span>
              <span>徐秉龙</span>
              <i className="link" />
            </div>
            <div className="process-song">
              <div className="red-process"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="block icon-playbar">
        <i className="blockBtn icon-playbar c-p"/>
      </div>
      <audio src="https://music.163.com/song/media/outer/url?id=1480280185.mp3" ref={playerRef} />
    </PlayerWrapper>
  )
})