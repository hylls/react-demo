import React, { memo, useState } from 'react'
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
          {props.name}
        </div>
      </div>
    </CarouselItemCss>
  )
}
export default memo(function Carousels() {
  let [carousels] = useState([
    {name: '1', img: '', link: ''},
    {name: '2', img: '', link: ''},
    {name: '3', img: '', link: ''},
    {name: '4', img: '', link: ''},
    {name: '5', img: '', link: ''},
    {name: '1', img: '', link: ''},
    {name: '1', img: '', link: ''},
    {name: '1', img: '', link: ''},
    {name: '1', img: '', link: ''},
    {name: '1', img: '', link: ''},
  ])
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
                  name={item.name}
                  img={item.img}
                  link={item.img}
                  key={index}
                />
              ))
            }
        </Carousel>
        <div className="carou-btn carou-right" onClick={carouselNext}></div>
      </div>
    </CarouselCss>
  )
  getBanners().then((res) => {
    console.log(res);
  })
  return classCarousel
})
