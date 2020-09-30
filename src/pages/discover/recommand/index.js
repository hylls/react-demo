import React, { memo, useEffect, useState } from 'react'
import Carousels from 'components/carousel'
import RedBorder from 'components/redBorder'
import CdCarou from 'components/cd-carousel'
import TopListItem from 'components/topListItem'
import RecommandRight from 'components/recommand-right'
import { RecommandWrapper } from './style'
import { personalized, getTopList, getRankingList } from 'api/allApi'
import { getPersonCount } from 'utils'


function Hot() {
  const [hotList, setHotList] = useState([])
  useEffect(() => {
    const fetch = async () => {
      const res = await personalized()
      setHotList(res.result)
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

function NewCd() {
  return (
    <>
      <CdCarou/>
    </>
  )
}

function TopList() {
  // const list =  [1, 2, 3]
  const [topList, setTopList] = useState([])
  useEffect(() => {
    (async function() {
      const res = await getTopList()
      const list = res.list.slice(0, 3)
      const res2 = await Promise.all([getRankingList(list[0].id), getRankingList(list[1].id), getRankingList(list[2].id)])
      setTopList(res2)
    })()
  }, [])
  return (
    <>
      {
        topList.map((item, index) => (
          <TopListItem {...item.playlist} key={index}/>
        ))
      }
    </>
  )
}

export default memo(function Recommand() {
  const topRecommand = {
    title: '热门推荐',
    middle: '22',
    right: '更多',
    icon: true,
    rightIcon: true
  }
  const newCd = {
    title: '新碟上架',
    right: '更多',
    icon: true,
    rightIcon: true
  }
  const topList = {
    title: '榜单',
    right: '更多',
    icon: true,
    rightIcon: true
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
            <RedBorder {...newCd}>
              <div className="recommand-newCd">
                <NewCd></NewCd>
              </div>
            </RedBorder>
            <RedBorder {...topList}>
              <div className="recommand-topList d-flex">
                <TopList></TopList>
              </div>
            </RedBorder>
          </div>
          <div className="recommand-right">
            <RecommandRight/>
          </div>
        </div>
      </div>
    </RecommandWrapper>
  )
})