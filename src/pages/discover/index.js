import React, { memo } from 'react'
import { NavLink, Switch, Route } from 'react-router-dom'

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
            <NavLink to={item.to} key={item.to}>{item.name}</NavLink>
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
            tuijian
          </Route>
          <Route path="/discover/toplist">
            asd
          </Route>
          <Route path="/discover/playlist">
            zz
          </Route>
          <Route path="/discover/djradio">
            123
          </Route>
          <Route path="/discover/artist">
            tuij56ianzzzz
          </Route>
          <Route path="/discover/album">
            98978978
          </Route>
        </Switch>
      </div>
    </DiscoverWrapper>
  )
})