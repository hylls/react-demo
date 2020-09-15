import styled from 'styled-components'

export const CarouselItemCss = styled.div`
  text-align: center;
  .carou {
    display: flex;
    height: 100%;
    justify-content: center;
    .carou-main {
      position: relative;
      width: 730px;
      height: 100%;
      background: pink;
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
  width: 730px;
  margin: 0 auto;
  .banner-wrap {
    position: relative;
    width: 730px;
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
    left: 100px;
    /* transform: translate(-200%, -50%); */
    background: url(${require('@/assets/img/banner.png')}) no-repeat;
    background-position: 0 -360px;
    &:hover {
      background-position: 0 -430px;
    }
  }
  .carou-right {
    right: 100px;
    /* transform: translate(200%, -50%); */
    background: url(${require('@/assets/img/banner.png')}) no-repeat;
    background-position: 0 -508px;
    &:hover {
      background-position: 0 -578px;
    }
  }
`