import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import Undraw1 from '../../../../assets/img/undraw1.svg'
import image1 from '../../../../assets/img/image1.jpg'
import image2 from '../../../../assets/img/image2.jpg'
import image3 from '../../../../assets/img/image3.jpg'
import TextInputEmail from '../../../TextInputEmail/TextInputEmail'

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
        <Row className='d-flex align-items-center text-center'>
          <Col sm={12} md={4} xl={4}>
            <img src={Undraw1} alt='alt' className='img-fluid'/>
          </Col>
          <Col sm={12} md={8} xl={8} className='text-primary '>
            <h2 className='h2'>Temukan Bisnis Anda</h2>
            <h1 className='h1'><strong>Pilih Layanan Kami</strong></h1>
          </Col>
        </Row>
      </Container>

      <Container className='my-5'>
        {data !== undefined && data.map((val, idx) => {
            return (
              <Row className='d-flex align-items-center my-5'>
                <Col sm={12} md={4} xl={4} >
                  <Card
                    key={idx}
                    as={Link}
                    to={val.href}
                    className='shadow-lg d-flex justify-content-center card-section-list-project border-0' 
                    style={{ borderRadius: '15px'}}
                    >
                      <img src={val.logo} alt='alt' className='m-5 img-fluid'/>
                  </Card>
                </Col>
                <Col sm={12} md={12} xl={8} className="mt-4">
                  <h3><strong>{val.heading}</strong></h3>
                  <p>{val.paragraf}</p>
                  <Button href={val.href} className='rounded-pill px-5 py-2'><strong>Selengkapnya</strong></Button>
                </Col>
              </Row>
            )
          })
        }
      </Container>

      <TextInputEmail/>

    </>
  )
}
