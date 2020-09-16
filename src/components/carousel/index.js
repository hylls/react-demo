import React, { memo, useCallback, useEffect, useState } from 'react'
import { Carousel } from 'antd';
import { CarouselItemCss, CarouselCss } from './style'

import { getBanners } from 'api/allApi'

function CarouselItem(props) {
  const contentStyle = {
    height: '285px',
    color: '#fff',
    lineHeight: '285px',
    textAlign: 'center',
    background: '#364d79',
  };
  return (
    <CarouselItemCss>
      <div className="carou" style={contentStyle}>
        <div className="carou-main">
          {/* <div className="main-image">
          </div> */}
          {/* <span>{props.imageUrl}</span> */}
          <img className="main-left" src={props.imageUrl}alt={props.name} />
          <div className="main-right">
            <span>PC 安卓 iPhone WP iPad Mac 六大客户端</span>
          </div>
        </div>
      </div>
    </CarouselItemCss>
  )
}
export default memo(function Carousels() {
  let [carousels, setCarousels] = useState([])
  useEffect(() => {
    (async function() {
      const res = await getBanners()
      setCarousels(res.banners)
    })()
  }, [])
  let [currentIndex, setCurrentIndex] = useState(0)
  const carouRef = React.createRef()
  function carouselNext() {
    carouRef.current.next()
  }
  function carouselPre() {
    carouRef.current.prev()
  }
  const bannerChange = useCallback((from, to) => {
    setTimeout(() => {
      setCurrentIndex(to)
    }, 0);
  }, [])
  const bgImage = carousels[currentIndex] && `${carousels[currentIndex].imageUrl}?imageView&blur=40x20`
  const classCarousel =(
    <CarouselCss bgImage={bgImage}>
      <div className="banner-wrap">
        <div className="carou-btn carou-left" onClick={carouselPre}></div>
        <Carousel beforeChange={bannerChange} effect="fade" ref={carouRef}>
            {
              carousels.map((item, index) => (
                <CarouselItem
                  {...item}
                  key={index}
                />
              ))
            }
        </Carousel>
        <div className="carou-btn carou-right" onClick={carouselNext}></div>
      </div>
    </CarouselCss>
  )
  return classCarousel
})
