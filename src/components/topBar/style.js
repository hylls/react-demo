import styled from 'styled-components'

export const TopBarCss = styled.div`
  height: 105px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  .topBar {
    height: 70px;
    width: 100%;
    &_main {
      height: 100%;
      background-color: #242424;
      .top-nav {
        width: 508px;
      }
    }
  }
  .slide {
    width: 100%;
    background-color: #C20C0C;
    height: 35px;
  }
  
`