import React, { createRef, memo, useEffect, useState } from 'react'
import { CdCarouWrapper, CdCarouItemWrapper } from './style'

import { Carousel  } from 'antd'
import { getAlbum } from 'api/allApi'

import { oneToTwoArr } from 'utils'

function CdCarouItem(props) {
  console.log(props);
  return (
    <CdCarouItemWrapper>
      <div className="cd-carou-item d-flex">
        {
          props.arr.map((item) => (
            <div className="item-single" key={item.id}>
              <div className="pic-wrap c-p"><img title={item.name} src={item.picUrl} alt={item.name}/><i className="c-p icon-all music-play-1 play"/></div>
              <span title={item.name} className="item-single-text u-line text-noWrap c-p">{item.name}</span>
              <span title={item.artist.name} className="item-single-text-name u-line text-noWrap c-p">{item.artist.name}</span>
            </div>
          ))
        }
      </div>
    </CdCarouItemWrapper>
  )
}

export default memo(function CdCarou() {
  const [newAlbums, setNewAlbums] = useState([])
  const cdCarouRef = createRef()
  useEffect(() => {
    (async function() {
      const res = await getAlbum()
      setNewAlbums(oneToTwoArr(5, res.monthData))
    })()
  }, [])
  return (
    <CdCarouWrapper>
      <div className="cd-carou-main">
        <i className="icon-index cd-left c-p" onClick={() => cdCarouRef.current.prev()}/>
        <Carousel ref={cdCarouRef} dots={false}>
          {
            newAlbums.map((item, index) => (
              <CdCarouItem arr={item} key={index}/>
            ))
          }
        </Carousel>
        <i className="icon-index cd-right c-p" onClick={() => cdCarouRef.current.next()}/>
      </div>
    </CdCarouWrapper>
  )
})