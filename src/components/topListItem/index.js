import React, { memo } from 'react'
import { TopListItemWrapper } from './style'

function ListItemLi(props) {
  return (
    <li>{props.name}</li>
  )
}

export default memo(function TopListItem(props) {
  console.log(props);
  const rankList = props.tracks.slice(0, 10)
  return (
    <TopListItemWrapper>
      <div className="top-list-item">
        <ul>
          <li>{props.name}</li>
          {
            rankList.map(item => (
              <ListItemLi key={item.id} {...item}/>
            ))
          }
          <li className="c-p u-line">查看全部</li>
        </ul>
      </div>
    </TopListItemWrapper>
  )
})