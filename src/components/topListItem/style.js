import styled from 'styled-components'

export const TopListItemWrapper = styled.div`
    flex: 1;
  .top-list-item {
    /* border-right: 1px solid #d3d3d3; */
    height: 100%;
    width: 100%;
    ul {
      display: flex;
      flex-flow: column wrap;
      width: 100%;
      img {
        width: 80px;
        height: 80px;
      }
      li {
        height: 32px;
        line-height: 32px;
      }
      .top-list-li {
        padding-left: 28px;
        width: 230px;
        align-items: center;
        .play {
          background-position: -267px -268px;
          width: 17px;
          height: 17px;
          margin-right: 10px;
          &:hover {
            background-position: -267px -288px;
          }
        }
        .addList {
          background-position: 0 -700px;
          width: 17px;
          height: 17px;
          margin-right: 10px;
          margin-top: 4px;
          &:hover {
            background-position: -22px -700px;
          }
        }
        .collect {
          background-position: -297px -268px;
          width: 17px;
          height: 17px;
          margin-right: 10px;
          &:hover {
            background-position: -297px -288px;
          }
        }
        .index {
          font-size: 16px;
          margin-right: 10px;
        }
        .name {
          flex: 1;
        }
        .btns {
          align-items: center;
          height: 100%;
        }
        &:nth-of-type(-n+3) {
          .index {
            color: #c10d0c;
          }
        }
      }
      li:first-of-type {
        height: 120px;
        padding: 20px 0 0 19px;
        display: flex;
        .right-header {
          padding: 6px 0 0 10px;
          .title {
            display: inline-block;
            font-weight: bold;
            color: #333;
            width: 113px;
          }
        }
        .play {
          background-position: -267px -205px;
          width: 22px;
          height: 22px;
          margin-right: 10px;
          &:hover {
            background-position: -267px -235px;
          }
        }
        .collect {
          background-position: -300px -205px;
          width: 22px;
          height: 22px;
          &:hover {
            background-position: -300px -235px;
          }
        }
      }
      li:last-of-type {
        height: 32px;
        line-height: 32px;
        .check-all {
          float: right;
          margin-right: 32px;
        }
      }
    }
  }
`