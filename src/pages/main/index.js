import React, { memo } from 'react'
import TopBar from 'components/topBar'
import { Switch, Route, Redirect } from 'react-router-dom'

import MyMusic from '../myMusic/index'
import Discover from '../discover/index'
import Friend from '../friend/index'
import Download from '../discover/index'

export default memo(function Main() {
  return (
    <div>
      <TopBar/>
      <Switch>
        <Route path="/discover">
          <Discover/>
        </Route>
        <Route path="/myMusic">
          <MyMusic/>
        </Route>
        <Route path="/friend">
          <Friend/>
        </Route>
        <Route path="/download">
          <Download/>
        </Route>
        <Route exact path="/">
          <Redirect to="/discover"/>
        </Route>
      </Switch>
    </div>
  )
})