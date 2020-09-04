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
        transform: translate(-200%, -50%);
      }
      .carou-right {
        right: 0;
        transform: translate(200%, -50%);
      }
    }
  }
  
`

export const CarouselCss = styled.div`
  /* display: flex; */
  
`