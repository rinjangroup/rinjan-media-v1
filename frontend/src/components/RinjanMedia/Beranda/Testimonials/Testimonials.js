import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import avatar from '../../../../assets/img/Avatar.jpg'
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";

const dataTestimonials = [
  {
    name: 'Mohammed',
    comment: 'Pelayanan Terbaik Sepanjan Hayat Masih dikandung badan, pokonya bejo.',
    date: 'Rabu, 8 Desember 2021',
    image: avatar
  },
  {
    name: 'Kujem',
    comment: 'Kaga Bakal nyesel sama hasil kerja tim ini.',
    date: 'Rabu, 8 Desember 2021',
    image: avatar
  }
]

export default function Testimonials() {
  return (
    <>
      <div className='bg-linear-gradient-primary mb-5'>
        <Container className='py-5'>
          <Row className='d-flex align-items-center'>
            <Col className='text-white' xs={12} md={12} xl={6}>
              <Row>
                <Col className='d-flex me-5'>
                  <FaQuoteLeft style={{fontSize: '50px'}}/>
                  <div className='mt-5 pt-4'>
                    <h1><strong>Ini Kata Mereka</strong></h1>
                    <h2>Tentang Rinjan Media, untuk setiap layanan yang disediakan. </h2>
                  </div>
                </Col>
              </Row>
              <FaQuoteRight className='float-end me-5' style={{fontSize: '35px'}}/>
            </Col>
            <Col className='bg-light my-5' style={{borderRadius: '15px'}} sm={12} md={12} xl={6}>
              {dataTestimonials !== undefined && dataTestimonials.map((val, idx) => {
                return (
                  <Container>

                    <Row className='d-flex align-items-center mt-3'>
                      <Col sm={2} xl={4} className='d-flex justify-content-center'>
                        <img src={val.image} alt='alt' className='img-fluid'/>
                      </Col>
                      <Col sm={10} xl={8}>
                        <h3><strong>{val.name}</strong></h3>
                        <p>{val.comment}</p>
                        <hr/>
                        <p className='text-primary'>{val.date}</p>
                      </Col>
                    </Row>
                  </Container>
                )
              })}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}
