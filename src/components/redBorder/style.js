import styled from 'styled-components'

export const RedBorderCss = styled.div`
  box-sizing: border-box;
  .redBorder {
    padding-top: 30px;
    padding-bottom: 40px;
    width: 689px;
    .topNav {
      width: 100%;
      height: 35px;
      line-height: 35px;
      border-bottom: 2px solid #C10D0C;
      .decoration-icon {
        display: inline-block;
        background: url(${require('@/assets/img/index.png')}) no-repeat;
        background-position: 0 9999px;
        padding: 0 10px 0 34px;
      }
      .titleName {
        padding-right: 20px;
        float: left;
      }
      .middle {
        float: left;
      }
      .right {
        float: right;
      }
    }
    .content {
      padding: 20px 0;
    }
  }
  
`