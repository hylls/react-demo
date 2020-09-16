import React, { memo, useEffect, useState } from 'react'
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
    <CarouselItemCss {...props}>
      <div className="carou" style={contentStyle}>
        <div className="carou-main">
          {/* <div className="main-image">

          </div> */}
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
      console.log(res)
    })()
  }, [])
  const carouRef = React.createRef()
  function carouselNext() {
    carouRef.current.next()
  }
  function carouselPre() {
    carouRef.current.prev()
  }
  const classCarousel =(
    <CarouselCss>
      <div className="banner-wrap">
        <div className="carou-btn carou-left" onClick={carouselPre}></div>
        <Carousel effect="fade" ref={carouRef}>
            {
              carousels.map((item, index) => (
                <CarouselItem
                  {...item}
                  // name={item.name}
                  // img={item.img}
                  // link={item.img}
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
