import styled from 'styled-components'

export const CdCarouWrapper = styled.div`
  .cd-carou-main {
    position: relative;
    .cd-left {
      position: absolute;
      left: 7px;
      top: 62px;
      width: 17px;
      height: 17px;
      background-position: -260px -75px;
      &:hover {
        background-position: -280px -75px;
      }
    }
    .cd-right {
      position: absolute;
      right: 7px;
      top: 62px;
      width: 17px;
      height: 17px;
      background-position: -300px -75px;
      &:hover {
        background-position: -320px -75px;
      }
    }
  }
`
export const CdCarouItemWrapper = styled.div`
  .cd-carou-item {
    flex-grow: row wrap;
    padding: 20px 30px 16px;
    justify-content: space-between;
    font-size: 12px;
    .item-single {
      height: 150px;
      width: 100px;
      .pic-wrap {
        position: relative;
        img {
          width: 100px;
          height: 100px;
        }
        .play {
          position: absolute;
          right: 10px;
          bottom: 5px;
        }
      }
      &-text {
        display: inline-block;
        width: 100px;
      }
      &-text-name {
        margin-top: -3px;
        display: inline-block;
        width: 100px;
        color: #666; 
      }
    }
  }
`