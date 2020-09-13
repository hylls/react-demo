import React, {memo} from 'react'

import { RedBorderCss } from './style'

export default memo(function RedBorder(props) {
  return (
    <RedBorderCss>
      <div style={props.width} className="redBorder">
        <div className="topNav">
          {props.icon && <i className="decoration-icon" />}
          <div className="titleName">{props.title}</div>
          <div className="middle">{props.middle}</div>
          <div className="right">{props.right}</div>
        </div>
        <div className="content"></div>
      </div>
    </RedBorderCss>
  )
})