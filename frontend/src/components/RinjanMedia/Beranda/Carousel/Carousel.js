import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Carousel1 from '../../../../assets/img/carousel1.png'
import Button from 'react-bootstrap/Button'

const CarouselSection = () => {
  return (
    <div className='mt-5 pt-3'>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src={Carousel1}
            alt="First slide"
          />
          <Carousel.Caption>
            <div className='text-start '>
              <h1 className='fw-bold'>Temukan<br/> Peluang Bisnis Anda <br/> Bersama Kami</h1>
              <h5 className='text-warning'>Membangun bisnis jadi lebih mudah <br/>bersama tim professional <br/> dan berpengalaman!</h5>
              <Button className='rounded-pill px-5 my-4'>Mulai Sekarang</Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src={Carousel1}
            alt="Second slide"
          />
          <Carousel.Caption>
            <div className='text-start '>
              <h1 className='fw-bold'>Temukan<br/> Peluang Bisnis Anda <br/> Bersama Kami</h1>
              <h5 className='text-warning'>Membangun bisnis jadi lebih mudah <br/>bersama tim professional <br/> dan berpengalaman!</h5>
              <Button className='rounded-pill px-5 my-4'>Mulai Sekarang</Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src={Carousel1}
            alt="Third slide"
          />
          <Carousel.Caption>
            <div className='text-start '>
              <h1 className='fw-bold'>Temukan<br/> Peluang Bisnis Anda <br/> Bersama Kami</h1>
              <h5 className='text-warning'>Membangun bisnis jadi lebih mudah <br/>bersama tim professional <br/> dan berpengalaman!</h5>
              <Button className='rounded-pill px-5 my-4'>Mulai Sekarang</Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}
export default CarouselSection