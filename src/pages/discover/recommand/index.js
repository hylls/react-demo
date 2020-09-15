import React, { memo, useEffect, useState } from 'react'
import Carousels from 'components/carousel'
import { RecommandWrapper } from './style'
import RedBorder from 'components/redBorder'
import { personalized } from 'api/allApi'
import { getPersonCount } from 'utils'

function Hot() {
  const [hotList, setHotList] = useState([])
  useEffect(() => {
    const fetch = async () => {
      const res = await personalized()
      setHotList(res.result)
      console.log(res.result)
    }
    fetch()
  }, [])
  return (
    <>
      {
        hotList.map((item) => (
          <div className="hot-item" key={item.id}>
            <div className="pic-wrap">
              <img src={item.picUrl} alt={item.name}/>
              <div className="pic-bottom d-flex">
                <i className="icon-all head"/>
                <span className="play-count">{getPersonCount(item.playCount)}</span>
                <i className="icon-all music-play" onClick={() => console.log('播放音乐')}/>
              </div>
            </div>
            <span className="item-name">{item.name}</span>
          </div>
        ))
      }
    </>
  )
}

export default memo(function Recommand() {
  const topRecommand = {
    title: '热门推荐',
    middle: '22',
    right: '更多'
  }
  return (
    <RecommandWrapper>
      <div className="recommand">
        <Carousels/>
        <div className="wrap-980 d-flex">
          <div className="recommand-left">
            <RedBorder {...topRecommand}>
              <div className="d-flex recommand-hot">
                <Hot></Hot>
              </div>
            </RedBorder>
          </div>
          <div className="recommand-right">
            我是右边
          </div>
        </div>
      </div>
    </RecommandWrapper>
  )
})