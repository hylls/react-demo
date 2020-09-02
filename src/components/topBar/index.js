import React, { memo } from 'react'
import { TopBarCss } from './style.js'
export default memo(function TopBar() {
  return (
    <TopBarCss>
      <div className="topBar">
        <div className="topBar_main">
          <div className="logon">logo</div>
          <div className="top-nav"></div>
          <div className="top-search"></div>
        </div>
      </div>
      <div className="slide"></div>
    </TopBarCss>
  )
})