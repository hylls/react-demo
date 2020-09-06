import React, { useState } from 'react'
import TopBar from 'components/topBar'
import Carousels from 'components/carousel'

import { MainCss, MainBorderCss } from './style'

function Main() {
  const [tabArray, setTab] = useState([
    { name: '发现音乐', id: 0, handleClick: discover, isClick: true },
    { name: '我的音乐', id: 1, handleClick: discover, isClick: false },
    { name: '朋友', id: 2, handleClick: discover, isClick: false },
    { name: '商场', id: 3, handleClick: discover, isClick: false },
    { name: '音乐人', id: 4, handleClick: discover, isClick: false },
    { name: '下载客户端', id: 5, handleClick: discover, isClick: false },
  ])
  let [currentIndex, setCurrent] = useState(0)
  function discover(currentIndex) {
    const newArr = tabArray.map((item) => {
      item.isClick = false
      return item
    })
    newArr[currentIndex].isClick = true
    setTab(newArr)
    handleClick(currentIndex)
  }
  function handleClick(val) {
    setCurrent(val)
  }

  function MainBorder(props) {
    return (
      <MainBorderCss>
        <div className="mainBorder">
          {props.children}
        </div>
      </MainBorderCss>
      
    )
  }
  return (
    <MainCss>
      <div id="music-main">
        <TopBar
          currentIndex={currentIndex}
          handleClick={handleClick}
          tabArray={tabArray}
        />
        <Carousels
          tabArray={tabArray}
        />
        <MainBorder>
          aa
        </MainBorder>
        <span>我是main主页</span>
      </div>
    </MainCss>
  )
}

export default Main