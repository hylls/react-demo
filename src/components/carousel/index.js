import React, { memo, useState } from 'react'
import { Carousel } from 'antd';
import { CarouselItemCss, CarouselCss } from './style'

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
          <div className="carou-btn carou-left"></div>
          <div className="carou-btn carou-right"></div>
        </div>
      </div>
    </CarouselItemCss>
  )
}
export default memo(function Carousels() {
  let [carousels] = useState([
    {name: '1', img: '', link: ''},
    {name: '1', img: '', link: ''},
    {name: '1', img: '', link: ''},
    {name: '1', img: '', link: ''},
    {name: '1', img: '', link: ''},
    {name: '1', img: '', link: ''},
    {name: '1', img: '', link: ''},
    {name: '1', img: '', link: ''},
    {name: '1', img: '', link: ''},
    {name: '1', img: '', link: ''},
  ])
  return (
    <CarouselCss>
      <Carousel>
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
    </CarouselCss>
  )
})
