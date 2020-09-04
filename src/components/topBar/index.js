import React, { memo, useState } from 'react'
import { TopBarCss, NavCss } from './style.js'
import { Input, Button } from 'antd';
const { Search } = Input;
function NavItem(props) {
  const activeTabBar = props.isClick
  ? { backgroundColor: '#000', color: '#fff' }
  : {}
  return (
    <li onClick={props.handleClick} style={activeTabBar}>
      <span>{props.name}</span>
      {
        props.isClick &&
        <em></em>
      }
    </li>
  )
}
function Nav(props) {
  function discover(currentIndex) {
    const newArr = tabArray.map((item) => {
      item.isClick = false
      return item
    })
    newArr[currentIndex].isClick = true
    setTab(newArr)
    props.handleClick(currentIndex)
  }
  const [tabArray, setTab] = useState([
    { name: '发现音乐', id: 0, handleClick: discover, isClick: true },
    { name: '我的音乐', id: 1, handleClick: discover, isClick: false },
    { name: '朋友', id: 2, handleClick: discover, isClick: false },
    { name: '商场', id: 3, handleClick: discover, isClick: false },
    { name: '音乐人', id: 4, handleClick: discover, isClick: false },
    { name: '下载客户端', id: 5, handleClick: discover, isClick: false },
  ])
  function handleCurrentIndex(e) {
    // console.log(e.target);
  }
  return (
    <NavCss>
      <ul onClick={handleCurrentIndex} className="top-nav">
        {
          tabArray.map((item, index) => (
            <NavItem
              isClick={item.isClick}
              name={item.name}
              key={item.id}
              handleClick={item.handleClick.bind(this, index)} />
          ))
        }
      </ul>
    </NavCss>
  )
}
function RightNav() {
  function login() {
    console.log(1);
  }
  return (
    <>
      <Search
        placeholder="音乐/视频/电台/用户"
        onSearch={value => console.log(value)}
        style={{ width: 200, height: 32, marginLeft: 40 }}
      />
      <Button type="primary" shape="round" style={{marginLeft: 10}}>
        创作者中心
      </Button>
      <span onClick={login} style={{color: '#787878', marginLeft: 30}}>登录</span>
    </>
  )
}
function Slide(props) {
  const [slideList] = useState([
    {name: '推荐', link: ''},
    {name: '排行榜', link: ''},
    {name: '歌单', link: ''},
    {name: '主播电台', link: ''},
    {name: '歌手', link: ''},
    {name: '新碟上架', link: ''},
  ])
  return (
    <div className="slide" style={props.currentIndex === 0 ? {height: 34} : {height: 5}}>
      <ul>
        {
          slideList.map((item) => (
            <SlideItem key={item.name} name={item.name} link={item.link}/>
          ))
        }
      </ul>
    </div>
  )
}
function SlideItem(props) {
  return (
    <li>{props.name}</li>
  )
}
export default memo(function TopBar() {
  let [currentIndex, setCurrent] = useState(0)
  function handleClick(val) {
    setCurrent(val)
  }
  return (
    <TopBarCss>
      <div className="topBar">
        <div className="topBar_main">
          <div className="top-logo"></div>
          <Nav currentIndex={currentIndex} handleClick={handleClick} />
          <RightNav/>
        </div>
      </div>
      <Slide currentIndex={currentIndex}/>
    </TopBarCss>
  )
})