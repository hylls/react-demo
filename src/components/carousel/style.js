import styled from 'styled-components'

export const CarouselItemCss = styled.div`
  text-align: center;
  .carou {
    display: flex;
    height: 100%;
    justify-content: center;
    .carou-main {
      position: relative;
      width: 980px;
      height: 100%;
      background: pink;
      display: flex;
      .main-left {
        width: 730px;
        height: 100%;
      }
      .main-right {
        position: absolute;
        right: 0;
        top: 0;
        height: 100%;
        width: 254px;
        background: url(${require('@/assets/img/download.png')}) no-repeat;
        background-position: 0 0;
        span {
          display: inline-block;
          font-size: 12px;
          position: absolute;
          bottom: 0;
          left: 0;
          height: 16px;
          line-height: 16px;
          text-align: center;
          margin: 10px auto 17px;
          width: 100%;
          color: #8d8d8d;
        }
      }
      .carou-btn {
        cursor: pointer;
        background-color: yellowgreen;
        position: absolute;
        height: 63px;
        width: 37px;
        top: 50%;
      }
      .carou-left {
        position: absolute;
        /* transform: translate(-200%, -50%); */
      }
      .carou-right {
        position: absolute;
        /* transform: translate(200%, -50%); */
      }
    }
  }
  
`

export const CarouselCss = styled.div`
  /* width: 730px;
  margin: 0 auto;
  background: red; */
  background: yellowgreen;
  .banner-wrap {
    position: relative;
    width: 980px;
    margin: 0 auto;
  }
  .carou-btn {
    cursor: pointer;
    position: absolute;
    height: 63px;
    width: 37px;
    top:37%;
    z-index: 9999;
  }
  .carou-left {
    left: -67px;
    /* transform: translate(-200%, -50%); */
    background: url(${require('@/assets/img/banner.png')}) no-repeat;
    background-position: 0 -360px;
    &:hover {
      background-position: 0 -430px;
    }
  }
  .carou-right {
    right: -67px;
    /* transform: translate(200%, -50%); */
    background: url(${require('@/assets/img/banner.png')}) no-repeat;
    background-position: 0 -508px;
    &:hover {
      background-position: 0 -578px;
    }
  }
`