import styled from 'styled-components'

export const TopBarCss = styled.div`
  height: 105px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  .topBar {
    height: 70px;
    width: 100%;
    &_main {
      height: 100%;
      background-color: #242424;
      text-align: center;
      display: flex;
      justify-content: center;
      .top-logo {
        display: inline-block;
        background: url(${require('@/assets/img/topbar.png')}) no-repeat;
        width: 176px;
        height: 69px;
      }
    }
  }
  .slide {
    width: 100%;
    background-color: #C20C0C;
    height: 35px;
  }
`

export const NavCss = styled.div`
  width: 508px;
  display: flex;
  align-items: center;
  .top-nav {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    li {
      padding: 0 19px;
      color: #CCC;
      font-size: 14px;
      height: 100%;
      line-height: 70px;
      cursor: pointer;
      &:hover {
        background-color: #000;
        color: #fff;
      }
    }
  }
`