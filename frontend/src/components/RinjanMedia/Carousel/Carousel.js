import React from 'react'
import Container from 'react-bootstrap/Container'
import './../Carousel/Carousel.module.scss'
import Button from 'react-bootstrap/Button'

const CarouselSection = () => {
  return (
    <div className='mt-5 pt-3'>
      <Container fluid className='section-container px-0 d-flex align-items-center' >
        {/* <Image src={Photo} alt='as' fluid className='px-0 image-carousel' width={'100%'}/> */}
        <Container className='warding-carousel py-5'>
          <h1>Temukan<br/> Peluang Bisnis Anda <br/> Bersama Kami</h1>
          <h5>Membangun bisnis jadi lebih mudah <br/>bersama tim professional <br/> dan berpengalaman!</h5>
          <Button className='px-5 my-4'>Mulai Sekarang</Button>
        </Container>
      </Container>
      {/* <Carousel>
        <Carousel.Item className='d-flex '>
          <img
            className="d-block w-100"
            src={Carousel1}
            alt="First slide"
          />
          <Carousel.Caption>
          <div className='d-flex'>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Carousel1}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Carousel1}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel> */}
    </div>
  )
}
export default CarouselSection