import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { Input, Button } from 'antd'
import { TopBarWrapper } from './style'

const { Search } = Input;

export default memo(function TopBar() {
  const links = [
    { to: '/discover', name: '发现音乐' },
    { to: '/myMusic', name: '我的音乐' },
    { to: '/friend', name: '朋友' },
    { to: 'https://music.163.com/store/product', name: '商城' },
    { to: 'https://music.163.com/nmusician/web/index#/', name: '音乐人' },
    { to: '/download', name: '下载客户端' }
  ]
  function Navs() {
    return (
      <>
        {
          links.map((item, index) => {
            if (index < 3 || index > 4) {
              return <NavLink
                      activeStyle={{
                        backgroundColor: '#000',
                        color: '#fff'
                      }}
                      key={item.to}
                      to={item.to}>
                        {item.name}
                      </NavLink>
            } else {
              return <a className="nav-a-item" key={item.to} href={item.to} rel="noopener noreferrer" target="_blank">{item.name}</a>
            }
          })
        }
      </>
    )
  }
  return (
    <TopBarWrapper>
      <div className="topBar">
        <div className="topBar-nav">
          <i className="title-icon"></i>
          <Navs/>
          <Search
            placeholder="音乐/视频/电台/用户"
            onSearch={value => console.log(value)}
            style={{ width: 158, height: 32, lineHeight: 32, marginLeft: 80 }}
          />
          <Button
            type="primary"
            shape="round"
            className="creator"
            style={{
              backgroundColor: '#242424', color: '#ccc', borderColor: '#4F4F4F', marginLeft: 20
            }}>创作者中心</Button>
          <span className="nav-login">登录</span>
        </div>
        <div className="redWrap"></div>
      </div>
    </TopBarWrapper>
  )
})