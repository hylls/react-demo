import styled from 'styled-components'

export const TopListItemWrapper = styled.div`
    flex: 1;
  .top-list-item {
    border-right: 1px solid #d3d3d3;
    height: 100%;
    ul {
      display: flex;
      flex-flow: column wrap;
      li {
        height: 32px;
        line-height: 32px;
      }
      li:first-of-type {
        height: 120px;
      }
      li:last-of-type {
        height: 32px;
        line-height: 32px;
      }
    }
  }
`