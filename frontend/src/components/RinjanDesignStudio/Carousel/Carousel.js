import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import image1 from '../../../assets/img/image2.jpg'
import image2 from '../../../assets/img/animations1.png'
import Button from 'react-bootstrap/esm/Button'
import { LINKWHATSAPPDESIGN } from '../../../helpers/constants'

export default function Carousel() {
  return (
    <div className='pt-3 my-5'>
      <Container className='text-center my-5'>
        <img src={image1} alt='alt' className='img-fluid'/>
        <h2 className='fw-bold mt-3'>Maksimalkan Bisnis Anda Dengan Desain Kekinian !</h2>
        <p>Rinjan Designer Studio memberikan layanan jasa desain dan percetakan untuk kebutuhan Bisnis dan promosi.</p>
      </Container>
      <Container fluid>
          <Row className='d-flex align-items-center'>
              <Col sm={6}>
                <img src={image2} alt='alt' className='img-fluid'/>
              </Col>
              <Col sm={6}>
                  <h1 className='fw-bold'>BUSINESS</h1>
                  <h2>STRATEGY</h2>
                  <strong>Naikkan Kualitas Branding Kamu.</strong>
                  <p>Dengan adanya strategi bisnis, perusahaan mampu menentukan 
                    arah perusahaan dengan mengidentifikasinya dari segi pasar, 
                    pesaing, pelanggan dan lain sebagainya.</p>
                  <Button variant='warning' className='px-5 rounded-pill' href={LINKWHATSAPPDESIGN} target="_blank">Selengkapnya</Button>
              </Col>
          </Row>
      </Container>
    </div>
  )
}
