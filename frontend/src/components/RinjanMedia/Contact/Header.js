import React from 'react'
import Button from 'react-bootstrap/esm/Button'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'

import imgHeader from '../../../assets/img/kontak/header.svg'

function Header() {
  return (
    <div className='pt-3 my-5'>
        <Container>
            <Row className='d-flex align-items-center'>
                <Col className="my-3">
                    <h1 className='text-primary'><strong>Hubungi</strong> Kami</h1>
                    <p>Punya pertanyaan tentang layanan? / butuh bantuan terkait project? / butuh penawaran layanan custom dari Rinjan Media / sekedar menyampaikan kritik dan saran.
Hubungi kami melalui formulir dibawah ini sekarang juga!</p>
                    <Button className='px-4 btn-warning rounded-pill'>Call Now</Button>
                </Col>
                <Col className='text-center'>
                    <img alt='alt' src={imgHeader} className="img-fluid"/>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Header