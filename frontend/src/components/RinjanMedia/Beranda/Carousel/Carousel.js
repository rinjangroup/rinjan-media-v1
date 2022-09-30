import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Carousel1 from '../../../../assets/img/carousel1.png'
import Carousel2 from '../../../../assets/img/carousel2.jpeg'
import Carousel3 from '../../../../assets/img/carousel3.jpeg'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import { LINKWHATSAPPWEB } from '../../../../helpers/constants'


const CarouselSection = () => {
  const dataCarousel = [
    {
      img: Carousel1,
      alt: 'first slide',
      title_bold: 'Temukan Peluang Bisnis Anda Bersama Kami',
      desc: 'Membangun bisnis jadi lebih mudah bersama tim professional dan berpengalaman!',
      btn: true
    },
    {
      img: Carousel2,
      alt: 'first slide',
      title_bold: '',
      desc: '',
      btn: false
    },
    {
      img:  Carousel3,
      alt: 'first slide',
      title_bold: '',
      desc: '',
      btn: false
    }
  ]
  return (
    <div className='mt-5 pt-3'>
      <Carousel>
      {/* {dataCarousel.length !== 0 && dataCarousel.map((val, idx) => {
        return ( */}
          <Carousel.Item>
            <img
              className="d-block w-100 img-fluid"
              src={Carousel1}
              alt='alt'
            />
            <Carousel.Caption >
              <Container>
                <Row>
                  <Col sm={4} xs={8} className='text-start '>
                    <h1 className='fw-bold h1'>Temukan Peluang Bisnis Anda Bersama Kami</h1>
                    <h5 className='text-warning'>Membangun bisnis jadi lebih mudah bersama tim professional dan berpengalaman!</h5>
                    <Button className='rounded-pill btn-block my-1 btn-carousel' href={LINKWHATSAPPWEB} target="_blank">Mulai Sekarang</Button>
                    
                  </Col>
                </Row>
              </Container>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item  className='text-center'>
            <img
              className="d-block w-100 img-fluid"
              src={Carousel2}
              alt='alt'
            />
            <Carousel.Caption>
            <Container>
              <Row>
                <Col xs={2} xl={3}>
                  <div/>
                </Col>
                <Col xs={8} xl={6}>
                  <h1 className='fw-bold h1 text-warning my-5'>Rinjan Design Studio</h1>
                  <h5 className='text-body'>Membantu kamu menemukan design yang sesuai dengan brand kamu Lebih Menarik, lebih kekinian atau sesuai seleramu</h5>
                  <h5 className='text-body mb-5'>Anggaran Minmal Desgin Maximal</h5>
                  <Button variant="outline-warning" className='rounded-pill btn-block btn-carousel' href={LINKWHATSAPPWEB} target="_blank">Mulai Sekarang</Button>
                </Col>
                <Col xs={2} xl={3}>
                  <div/>
                </Col>
              </Row>
            </Container>
              
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 img-fluid"
              src={Carousel3}
              alt='alt'
            />
            <Carousel.Caption >
              <Container>
                <Row>
                  <Col sm={4} xs={8} className='text-start '>
                    <h1 className='fw-bold h1 text-primary my-3'>Rinjan Web Dev</h1>
                    <h5 className='text-body'>Buat kamu yang punya bisnis tapi sampai hari ini belum punya website, sebaiknya buruan buat deh karena semuan bisnis sudah masuk ke area digital,</h5>
                    {/* <h5 className='text-body'>temukan gaya website impian bersama kami di Rinjan</h5> */}
                    <Button className='rounded-pill btn-block my-1 btn-carousel' href={LINKWHATSAPPWEB} target="_blank">Gabung Sekarang</Button>
                    
                  </Col>
                </Row>
              </Container>
            </Carousel.Caption>
          </Carousel.Item>
        {/* )
      })} */}
      </Carousel>
    </div>
  )
}
export default CarouselSection