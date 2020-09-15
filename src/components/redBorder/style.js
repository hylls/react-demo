import styled from 'styled-components'

export const RedBorderCss = styled.div`
  box-sizing: border-box;
  .redBorder {
    /* padding-top: 30px; */
    padding-bottom: 40px;
    width: 689px;
    font-size: 12px;
    .topNav {
      width: 100%;
      height: 35px;
      line-height: 35px;
      border-bottom: 2px solid #C10D0C;
      .decoration-icon {
        /* display: inline-block; */
        margin-top: 3px;
        float: left;
        background: url(${require('@/assets/img/index.png')}) no-repeat;
        background-position: -225px -156px;
        padding: 0 10px 0 34px;
        height: 33px;
        width: 33px;
      }
      .titleName {
        padding-right: 20px;
        float: left;
        font-size: 20px;
      }
      .middle {
        float: left;
      }
      .right {
        float: right;
        &:hover {
          cursor: pointer;
          text-decoration: underline;
        }
      }
      .arrow {
        margin-top: 12px;
        float: right;
        width: 12px;
        height: 12px;
        margin-left: 4px;
        background-position: 0 -240px;
      }
    }
    .content {
      padding: 20px 0;
    }
  }
  
`