import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Carousel from 'react-bootstrap/Carousel'


import promo from '../../../assets/img/wifi/promo1.jpg'
import promo1 from '../../../assets/img/wifi/promo1.jpeg'



const PromoPackage = () => {
  return (
    <div>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100 img-fluid"
              src={promo}
              alt='alt'
            />
          </Carousel.Item>
          <Carousel.Item  className='text-center'>
            <img
              className="d-block w-100 img-fluid"
              src={promo1}
              alt='alt'
            />
          </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default PromoPackage