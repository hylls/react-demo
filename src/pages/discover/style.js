import styled from 'styled-components'

export const DiscoverWrapper = styled.div`
  .discover {
    position: relative;
    font-size: 14px;
    &-top {
      position: absolute;
      top: -26px;
      left: 31%;
      display: flex;
      justify-content: space-around;
      width: 564px;
      a {
        flex-shrink: 1;
      }
    }
  }
`