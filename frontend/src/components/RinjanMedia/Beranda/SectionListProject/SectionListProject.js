import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Link } from 'react-router-dom'
import Undraw1 from '../../../../assets/img/undraw1.svg'
import image1 from '../../../../assets/img/image1.jpg'
import image2 from '../../../../assets/img/image2.jpg'
import image3 from '../../../../assets/img/image3.jpg'

const data = [
  {
    title: 'rinjan web developer',
    logo: image1,
    heading: 'Wujudkan Website Impianmu Bersama Kami !',
    paragraf: 'Rinjan Web Developer menyediakan layanan perancangan website dengan rekomendasi domain dan hosting murah dan berkualitas.',
    href: '/web'
  },
  {
    title: 'rinjan design studio',
    logo: image2,
    heading: 'Maksimalkan Bisnis Anda Dengan Desain Kekinian !',
    paragraf: 'Rinjan Designer Studio memberikan layanan jasa desain dan percetakan untuk kebutuhan Bisnis dan promosi.',
    href: '/design-studio'
  },
  {
    title: 'rinjan wifi',
    logo: image3,
    heading: 'Dapatkan Akses Internet Murah Cepat Dan Berkualitas !',
    paragraf: 'Memberikan layanan jaringan internet sebagai media pendukung pembelajaran, bisnis online, dengan biaya terjangkau.',
    href: '/wifi'
  }
]

export default function SectionListProject() {
  return (
    <>
      <Container className='my-5'>
        <Row className='d-flex align-items-center'>
          <Col sm={4}>
            <img src={Undraw1} alt='alt' className='img-fluid'/>
          </Col>
          <Col className='text-primary'>
            <h2>Temukan Bisnis Anda</h2>
            <h1><strong>Pilih Layanan Kami</strong></h1>
          </Col>
        </Row>
      </Container>

      <Container className='my-5'>
        {data !== undefined && data.map((val, idx) => {
            return (
              <Row className='d-flex align-items-center my-5'>
                <Col sm={4} >
                  <Card
                    key={idx}
                    as={Link}
                    to={val.href}
                    className='shadow-lg d-flex justify-content-center card-section-list-project border-0 ' 
                    style={{width: '350px', height: '230px', borderRadius: '15px'}}
                    >
                      <img src={val.logo} alt='alt' className='m-5 img-fluid'/>
                  </Card>
                </Col>
                <Col>
                  <h3><strong>{val.heading}</strong></h3>
                  <p>{val.paragraf}</p>
                  <Button as={Link} to={val.href} className='rounded-pill px-5 py-2'><strong>Selengkapnya</strong></Button>
                </Col>
              </Row>
            )
          })
        }
        {/* <CardAnimations/> */}
      </Container>

      <Container style={{marginTop: '100px', marginBottom: '100px'}}>
        <Row>
          <Col>
            <Form className='d-flex justify-content-center'>
              <Form.Floating className="me-3 text-secondary" >
                <Form.Control
                  id="floatingInputCustom"
                  type="email"
                  placeholder="name@example.com"
                  className='border-warning rounded-pill shadow'
                  style={{width: '350px'}}
                />
                <label htmlFor="floatingInputCustom">Masukkan Email disini</label>
              </Form.Floating>
              <Button className='rounded-pill px-5 shadow' variant='warning' type='submit'><strong>Gabung</strong></Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  )
}
