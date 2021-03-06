import styled from 'styled-components'

export const RecommandWrapper = styled.div`
  .recommand {
    &-left {
      width: 730px;
      padding: 20px 20px 40px;
      border-right: 1px solid #d3d3d3;
    }
    &-right {
      flex: 1;
    }
    &-hot {
      flex-wrap: wrap;
      justify-content: space-between;
      .hot-item {
        width: 140px;
        height: 204px;
        .pic-wrap {
          position: relative;
          img {
            cursor: pointer;
            width: 100%;
            height: 140;
          }
          .pic-bottom {
            position: absolute;
            left: 0;
            bottom: 0;
            height: 27px;
            font-size: 12px;
            width: 100%;
            background: url(${require('@/assets/img/coverall.png')}) no-repeat;
            background-position: 0 -537px;
            align-items: center;
            color: #ccc;
            .head {
              width: 14px;
              height: 11px;
              background-position: 0 -24px;
              margin-left: 10px;
            }
            .play-count {
              padding-left: 5px;
              flex-grow: .7;
            }
          }
        }
        .item-name {
          cursor: pointer;
          display: inline-block;
          margin: 8px 0 3px;
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
    &-newCd {
      border: 1px solid #d3d3d3;
      background: #f5f5f5;
      height: 184px;
    }
    &-topList {
      height: 472px;
      /* border: 1px solid #d3d3d3; */
      border-right: none;
      background: url(${require('@/assets/img/index_bill.png')})
    }
  }
`