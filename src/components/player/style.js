import styled from 'styled-components'

export const PlayerWrapper = styled.div`
  position: sticky;
  bottom: 0;
  display: block;
  height: 53px;
  background: url(${require('@/assets/img/playbar.png')});
  background-position: 0 0;
  background-repeat: repeat-x;
  .player-content {
    width: 980px;
    margin: 0 auto;
    height: 100%;
    .player-btns {
      padding-top: 7px;
      height: 100%;
      width: 137px;
      .btn-prev {
        width: 28px;
        height: 28px;
        background-position: 0 -130px;
        &:hover {
          background-position: -30px -130px;
        }
      }
      .btn-play {
        width: 36px;
        height: 36px;
        background-position: 0 -204px;
        &:hover {
          background-position: -40px -204px;
        }
      }
      .btn-next {
        width: 28px;
        height: 28px;
        background-position: -80px -130px;
        &:hover {
          background-position: -110px -130px;
        }
      }
    }
    .player-process {
      width: 630px;
      height: 100%;
      font-size: 12px;
      .process {
        height: 100%;
        flex-flow: column wrap;
        .singer-info {
          flex: 0.4;
          margin-bottom: 8px;
          span:nth-of-type(1) {
            color: #e8e8e8;
          }
          span:nth-of-type(2) {
            margin-left: 15px;
            color: #9b9b9b;
          }
        }
        &-song {
          position: relative;
          height: 9px;
          width: 493px;
          background-position: right 0;
          background: url(${require('@/assets/img/statbar.png')}) no-repeat;
          .red-process {
            position: absolute;
            left: 0;
            top: 0;
            height: 9px;
            width: 493px;
            background-position: left 9999px;
            background: url(${require('@/assets/img/statbar.png')}) no-repeat;
          }
        }
      }
    }
  }
  .block {
    position: absolute;
    right: 20px;
    bottom: 0px;
    width: 52px;
    height: 67px;
    background-position: 0 -380px;
    .unBlockBtb {
      position: absolute;
      background-position: -80px -380px;
      width: 18px;
      height: 18px;
      left: 16px;
      top: 5px;
      &:hover {
        background-position: -80px -400px;
      }
    }
    .blockBtn {
      position: absolute;
      background-position: -100px -380px;
      width: 18px;
      height: 18px;
      left: 16px;
      top: 5px;
      &:hover {
        background-position: -100px -400px;
      }
    }
  }
`