import styled from 'styled-components'

export const TopBarWrapper = styled.div`
  .topBar {
    &-nav {
      height: 70px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #242424;
      flex-wrap: nowrap;
      font-size: 14px;
      .nav-login {
        color: #787878;
        margin-left: 30px;
        cursor: pointer;
        &:hover {
          color: #999;
          text-decoration: underline;
        }
      }
      .nav-icon {
        display: inline-block;
        background: url(${require('@/assets/img/topbar.png')}) no-repeat;
      }
      .title-icon {
        display: inline-block;
        background: url(${require('@/assets/img/topbar.png')}) no-repeat;
        background-position: 0 0;
        width: 176px;
        height: 69px;
      }
      a {
        flex-shrink: 0;
        height: 100%;
        line-height: 70px;
        padding: 0 19px;
        color: #ccc;
        font-size: 14px;
        &:last-of-type {
          position: relative;
          &::after {
            width: 28px;
            height: 19px;
            position: absolute;
            content: '';
            display: inline-block;
            background: url(${require('@/assets/img/topbar.png')}) no-repeat -190px 0 ;
            top: 21px;
            right: -10px;
          }
        }
      }
    }
    .redWrap {
      height: 35px;
      background-color: #C20C0C;
      border-bottom: 1px solid #a40011;
    }
  }
`