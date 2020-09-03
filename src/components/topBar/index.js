import React, { memo, useState } from 'react'
import { TopBarCss, NavCss } from './style.js'
function NavItem(props) {
  console.log(props);
  return (
    <li onClick={props.handleClick} style={props.activeTabBar}>{props.name}</li>
  )
}
function Nav() {
  // let [currentIndex, setCurrentIndex] = useState(0)
  function discover(currentIndex) {
    tabArray.forEach((item) => {
      item.isClick = false
    })
    tabArray[currentIndex].isClick = true
    tabArray[currentIndex].activeTabBar = tabArray[currentIndex].isClick
      ? { backgroundColor: '#000', color: '#fff' }
      : {}
    console.log(tabArray);
  }
  const [tabArray] = useState([
    { name: '发现音乐', id: 0, handleClick: discover, isClick: true },
    { name: '我的音乐', id: 1, handleClick: discover, isClick: false },
    { name: '朋友', id: 2, handleClick: discover, isClick: false },
    { name: '商场', id: 3, handleClick: discover, isClick: false },
    { name: '音乐人', id: 4, handleClick: discover, isClick: false },
    { name: '下载客户端', id: 5, handleClick: discover, isClick: false },
  ])
  function handleCurrentIndex(e) {
    console.log(e.target);
  }
  return (
    <NavCss>
      <ul onClick={handleCurrentIndex} className="top-nav">
        {
          tabArray.map((item, index) => (
            <NavItem
              name={item.name}
              key={item.id}
              handleClick={item.handleClick.bind(this, index)}
              activeTabBar={item.activeTabBar} />
          ))
        }
      </ul>
    </NavCss>
  )
}
export default memo(function TopBar() {
  return (
    <TopBarCss>
      <div className="topBar">
        <div className="topBar_main">
          <div className="top-logo"></div>
          <Nav />
          <div className="top-search"></div>
        </div>
      </div>
      <div className="slide"></div>
    </TopBarCss>
  )
})