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
      .btn-pause {
        width: 36px;
        height: 36px;
        background-position: 0 -165px;
        &:hover {
          background-position: -40px -165px;
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
      padding-top: 4px;
      &>img {
        margin-right: 15px;
      }
      .noPic {
        width: 34px;
        height: 35px;
        background-position: 0 -80px;
      }
      .process {
        height: 100%;
        width: 100%;
        /* flex-flow: column wrap; */
        /* justify-content: flex-end; */
        padding-top: 7px;
        .ant-slider {
          width: 493px;
          margin-top: 6px;
          .ant-slider-rail {
            background: url(${require('@/assets/img/statbar.png')}) no-repeat;
            height: 9px;
            width: 100%;
            background-position: left 0px;
          }
          .ant-slider-track {
            background: url(${require('@/assets/img/statbar.png')}) no-repeat;
            height: 9px;
            width: 100%;
            background-position: left -66px;
          }
          .ant-slider-handle {
            width: 22px;
            height: 24px;
            background-position: 0 -250px !important;
            border: none;
            bottom: -9px;
            background: url(${require('@/assets/img/iconall.png')}) no-repeat;
          }
        }
        .singer-info {
          padding-top: 2px;
          padding-left: 7px;
          height: 12px;
          span:nth-of-type(1) {
            color: #e8e8e8;
          }
          span:nth-of-type(2) {
            margin-left: 15px;
            color: #9b9b9b;
          }
        }
        &-time {
          color: #a1a1a1;
          position: relative;
          top: 8px;
          margin-left: 8px;
        }
      }
      .right-btns {
        justify-content: space-between;
        align-items: center;
        margin-left: 30px;
        padding-top: 4px;
        i {
          margin-right: 5px;
        }
        .collection {
          width: 25px;
          height: 25px;
          background-position: -88px -163px;
          &:hover {
            background-position: -88px -189px;
          }
        }
        .share {
          width: 25px;
          height: 25px;
          background-position: -114px -163px;
          &:hover {
            background-position: -114px -189px;
          }
        }
        .line {
          width: 7px;
          height: 25px;
          background-position: -147px -238px;
        }
        .volume {
          width: 25px;
          height: 25px;
          background-position: -2px -248px;
          &:hover {
            background-position: -31px -248px;
          }
        }
        .play-type {
          width: 25px;
          height: 25px;
          background-position: -66px -344px;
          &:hover {
            background-position: -93px -344px;
          }
        }
        .play-list {
          width: 38px;
          height: 25px;
          background-position: -42px -68px;
          &:hover {
            background-position: -42px -98px;
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
  .lyrics-panel {
    position: absolute;
    bottom: 47px;
    width: 986px;
    left: 50%;
    transform: translate(-50%);
    overflow: hidden;
    .image {
      z-index: 1;
      width: 980px;
      height: auto;
      opacity: .2;
      position: absolute;
      top: 41px;
    }
    .panel-header {
      background: url(${require('@/assets/img/playlist_bg.png')}) no-repeat;
      height: 41px;
      align-items: center;
      font-size: 12px;
      color: #ccc;
      .play-list {
        color: #e2e2e2;
        font-weight: 700;
        font-size: 14px;
        flex-grow: 2.8;
        padding-left: 25px;
      }
      .collect {
        height: 41px;
        line-height: 41px;
        margin-right: 14px;
        .collection {
          display: inline-block;
          background: url(${require('@/assets/img/playlist_8.png')}) no-repeat;
          background-position: -24px 0;
          width: 16px;
          height: 16px;
          vertical-align: middle;
          margin-right: 4px;
        }
      }
      .clear {
        height: 41px;
        line-height: 41px;
        .clear-icon {
          display: inline-block;
          background: url(${require('@/assets/img/playlist_8.png')}) no-repeat;
          background-position: -51px 0;
          width: 16px;
          height: 16px;
          vertical-align: middle;
          margin-right: 4px;
        }
      }
      .line {
        height: 15px;
        border-left: 1px solid #000;
        border-right: 1px solid #2c2c2c;
        margin-right: 14px;
      }
      .song-name {
        height: 100%;
        line-height: 41px;
        width: 437px;
        justify-content: center;
        font-size: 14px;
        color: #fff;
      }
    }
    .panel-content {
      background: url(${require('@/assets/img/playlist_bg.png')}) -1014px 0;
      background-repeat: repeat-y;
      height: 260px;
      position: relative;
      z-index: 2;
      flex-flow: row nowrap;
      .song-list {
        flex-flow: column wrap;
        .list-content {
          width: 553px;
          font-size: 12px;
          position: relative;
          z-index: 3;
          height: 28px;
          line-height: 28px;
          align-items: center;
          &:hover {
            .icons {
              visibility: visible !important;
            }
          }
          .icon {
            width: 27px;
            text-align: center;
            .current-icon {
              display: inline-block;
              width: 10px;
              height: 13px;
              background: url(${require('@/assets/img/playlist.png')}) -182px 0;
            }
          }
          .song {
            flex: 1;
            align-items: center;
            .song-name {
              color: #ccc;
              flex: 1;
              display: inline-block;
              width: 266px;
            }
            .four-icon {
              width: 100px;
              height: 100%;
              /* align-items: center; */
              /* justify-content: space-evenly; */
              margin-top: 2px;
              .icons {
                visibility: hidden;
                width: 100px;
                height: 100%;
                align-items: center;
                justify-content: space-evenly;
              }
              .collect {
                display: inline-block;
                height: 16px;
                width: 16px;
                background-position: -24px 0;
                &:hover {
                  background-position: -24px -20px;
                }
              }
              .share {
                display: inline-block;
                height: 16px;
                width: 16px;
                background-position: 0 0;
                &:hover {
                  background-position: 0 -20px;
                }
              }
              .download {
                display: inline-block;
                height: 16px;
                width: 16px;
                background-position: -57px -50px;
                &:hover {
                  background-position: -80px -50px;
                }
              }
              .delete {
                display: inline-block;
                height: 16px;
                width: 16px;
                background-position: -51px 0;
                &:hover {
                  background-position: -51px -20px;
                }
              }
            }
          }
          .author-name {
            width: 80px;
            color: #9b9b9b;
          }
          .end-time {
            width: 80px;
            color: #666;
          }
          .link {
            width: 14px;
            height: 16px;
            vertical-align: middle;
            background: url(${require('@/assets/img/playlist.png')}) -182px 0;
            background-position: -80px 0px;
            &:hover {
              background-position: -80px -20px;
            }
          }
        }
        .lyrics-content {
          width: 433px;
        }
      }
    }
  }
`