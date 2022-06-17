import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Carousel1 from '../../../../assets/img/carousel1.png'
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
      desc: 'Membangun bisnis jadi lebih mudah bersama tim professional dan berpengalaman!'
    },
    {
      img: Carousel1,
      alt: 'first slide',
      title_bold: 'Temukan Peluang Bisnis Anda Bersama Kami',
      desc: 'Membangun bisnis jadi lebih mudah bersama tim professional dan berpengalaman!'
    },
    {
      img: Carousel1,
      alt: 'first slide',
      title_bold: 'Temukan Peluang Bisnis Anda Bersama Kami',
      desc: 'Membangun bisnis jadi lebih mudah bersama tim professional dan berpengalaman!'
    }
  ]
  return (
    <div className='mt-5 pt-3'>
      <Carousel>
      {dataCarousel.length !== 0 && dataCarousel.map((val, idx) => {
        return (
          <Carousel.Item>
            <img
              className="d-block w-100 img-fluid"
              src={val.img}
              alt={val.alt}
            />
            <Carousel.Caption >
              <Container>
                <Row>
                  <Col sm={4} xs={8} className='text-start '>
                    <h1 className='fw-bold h1'>{val.title_bold}</h1>
                    <h5 className='text-warning'>{val.desc}</h5>
                    <Button className='rounded-pill btn-block my-1 btn-carousel' href={LINKWHATSAPPWEB} target="_blank">Mulai Sekarang</Button>
                  </Col>
                </Row>
              </Container>
            </Carousel.Caption>
          </Carousel.Item>
        )
      })}
      </Carousel>
    </div>
  )
}
export default CarouselSection