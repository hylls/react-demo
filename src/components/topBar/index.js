import React, { memo } from 'react'
import { TopBarCss } from './style.js'
export default memo(function TopBar() {
  return (
    <TopBarCss>
      <div className="topBar">
        <div></div>
      </div>
    </TopBarCss>
  )
})