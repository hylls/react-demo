import styled from 'styled-components'

export const RecommandRightWrapper = styled.div`
  .right {
    .no-login {
      height: 126px;
      width: 248px;
      background-position: 0 0;
      padding: 16px 22px;
      font-size: 12px;
      color: #666;
      text-align: center;
      p {
        line-height: 20px;
        text-align: left;
      }
      .btn-login {
        width: 100px;
        height: 31px;
        line-height: 31px;
        text-align: center;
        background-position: 0 -195px;
        color: #fff;
        margin-top: 20px;
        &:hover {
          background-position: -110px -195px;
        }
      }
    }
    .side-wrap {
      padding: 12px 15px;
      font-size: 12px;
      .singer {
        &-top {
          height: 24px;
          line-height: 16px;
        }
      }
      .divider {
        border-bottom: 1px solid #ccc;
      }
    }
  }
`
