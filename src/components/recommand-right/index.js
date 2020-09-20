import React, { memo, useEffect, useState } from 'react'

import { RecommandRightWrapper } from './style'

function UserInfo() {
  return (
    <>
      <div className="no-login icon-index">
        <p>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
        <span className="btn-login icon-index c-p">用户登录</span>
      </div>
    </>
  )
}

function ResidentSinger() {
  const [singerList] = useState([])
  useEffect(() => {
    
  }, [])
  function SingerItem(props) {
    return (
      <div>

      </div>
    )
  }
  return (
    <div className="singer">
      <div className="singer-top clear divider">
        <span>入驻歌手</span>
        <span className="c-p u-line f-r">查看全部&gt;</span>
      </div>
      {
        singerList.map((item) => (
          <SingerItem {...item}/>
        ))
      }
    </div>
  )
}

export default memo(function RecommandRight() {
  return (
    <RecommandRightWrapper>
      <div className="right">
        <UserInfo/>
        <div className="side-wrap">
          <ResidentSinger/>
        </div>
      </div>
    </RecommandRightWrapper>
  )
})