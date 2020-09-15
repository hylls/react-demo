import React, { memo } from 'react'
import { NavLink, Switch, Route } from 'react-router-dom'
import Recommand from './recommand'
import TopList from './topList'
import PlayList from './playList'
import Djradio from './djradio'
import Artist from './artist'
import Album from './album'

import { DiscoverWrapper } from './style'

export default memo(function Discover() {
  const discoverLinks = [
    { to: '/discover', name: '推荐' },
    { to: '/discover/toplist', name: '排行榜' },
    { to: '/discover/playlist', name: '歌单' },
    { to: '/discover/djradio', name: '主播电台' },
    { to: '/discover/artist', name: '歌手' },
    { to: '/discover/album', name: '新碟上架' }
  ]
  function DiscoverLinks() {
    return (
      <>
        {
          discoverLinks.map((item) => (
            <NavLink exact activeStyle={{backgroundColor: '#9b0909'}} to={item.to} key={item.to}>{item.name}</NavLink>
          ))
        }
      </>
    )
  }
  return (
    <DiscoverWrapper>
      <div className="discover">
        <div className="discover-top">
          <DiscoverLinks/>
        </div>
        <Switch>
          <Route exact path="/discover">
            <Recommand/>
          </Route>
          <Route path="/discover/toplist">
            <TopList/>
          </Route>
          <Route path="/discover/playlist">
            <PlayList/>
          </Route>
          <Route path="/discover/djradio">
            <Djradio/>
          </Route>
          <Route path="/discover/artist">
            <Artist/>
          </Route>
          <Route path="/discover/album">
            <Album/>
          </Route>
        </Switch>
      </div>
    </DiscoverWrapper>
  )
})