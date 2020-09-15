import styled from 'styled-components'

export const DiscoverWrapper = styled.div`
  .discover {
    position: relative;
    font-size: 14px;
    &-top {
      position: absolute;
      top: -34px;
      left: 31%;
      display: flex;
      justify-content: space-around;
      width: 564px;
      height: 34px;
      align-items: center;
      a {
        display: inline-block;
        height: 22px;
        flex-shrink: 1;
        color: #fff;
        line-height: 22px;
        padding: 0 10px;
        border-radius: 25px 25px;
        &:hover {
          background-color: #9B0909;
        }
      }
      &+div {
        background: yellowgreen;
      }
    }
  }
`