import React from 'react'
import TopBar from 'components/topBar'
import Carousels from 'components/carousel'

function Main() {
  return (
    <div id="music-main">
      <TopBar></TopBar>
      <Carousels></Carousels>
      <span>我是main主页</span>
    </div>
  )
}

export default Main