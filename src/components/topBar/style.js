import styled from 'styled-components'

export const TopBarCss = styled.div`
  display: flex;
  /* justify-content: center; */
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
      align-items: center;
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
    height: 34px;
    ul {
      display: flex;
      justify-content: space-evenly;
      width: 564px;
      height: 100%;
      align-items: center;
      color: #fff;
      font-size: 12px;
      margin-left: 227px;
      li {
        height: 100%;
        line-height: 34px;
        padding: 0 10px;
        cursor: pointer;
        &:hover {
          background: #9B0909;
          border-radius: 20px;
        }
      }
    }
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
      position: relative;
      em {
        position: absolute;
        left: 50%;
        top: 90%;
        transform: translateX(-50%);
        width: 0;
        height: 0;
        border-left: 7px solid transparent;
        border-right: 7px solid transparent;
        border-bottom: 7px solid #C20C0C;
      }
      &:hover {
        background-color: #000;
        color: #fff;
      }
    }
  }
`