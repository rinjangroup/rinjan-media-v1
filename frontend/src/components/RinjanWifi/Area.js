import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'

const Area = () => {
  return (
    <div>
        <Container className='text-center'>
            <Row>
                <Col>
                    <h2 className='text-decoration-underline fw-bold'>CAKUPAN AREA</h2>
                    <p className='fw-bold'>KELURAHAN CIATER | KECAMATAN SERPONG | KOTA TANGERANG SELATAN</p>
                </Col>
            </Row>
        </Container>
        <Container fluid className='my-5 mx-0 px-0'>
            <Row>
                <Col>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15862.273366053914!2d106.68357872333816!3d-6.320289426455782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69e53c40e770ad%3A0x83a1cb43db5bc08e!2sCiater%2C%20Kec.%20Serpong%2C%20Kota%20Tangerang%20Selatan%2C%20Banten!5e0!3m2!1sid!2sid!4v1655455129720!5m2!1sid!2sid" width="100%" height="550" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Area