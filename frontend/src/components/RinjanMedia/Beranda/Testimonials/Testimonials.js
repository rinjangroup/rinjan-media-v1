import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import avatar1 from '../../../../assets/img/testi/nazar.jpeg'
import avatar2 from '../../../../assets/img/testi/kosim.jpeg'
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";

const dataTestimonials = [
  {
    name: 'Nazar Husain (Direktur Utama PT HARIAN PELITA SEJAHTERA)',
    comment: 'Tim IT Rinjan Web sangat mendukung dan sigap melayani kami dalam perancangan website portal berita. Sehingga berita yang kami sajikan dapat ditampilkan secara cepat dan ter up to date.',
    date: 'Senin, 27 Juni 2022',
    image: avatar1
  },
  {
    name: 'Kosim (Kepala Madrasah Aliyah Nurul Falah Ciater)',
    comment: 'Kami sangat bangga sekali dengan anak didik dan lulusan Aliyah bisa membangun program ataupun layanan yang dikenal Rinjan Media. Pelayanan yang diberikan cukup memuaskan dan sumber daya manusia nya sangat profesional dalam bekerja. Sukses terus dan semangat...',
    date: 'Rabu, 8 Desember 2021',
    image: avatar2
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
                      <Col xs={4} sm={2} xl={2}  className='d-flex justify-content-center'>
                        <img src={val.image} alt='alt' className='img-fluid rounded-circle'/>
                      </Col>
                      <Col xs={8} sm={10} xl={10}>
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
