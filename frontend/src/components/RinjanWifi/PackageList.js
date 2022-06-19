import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Button from 'react-bootstrap/esm/Button'

import wifi7 from '../../assets/img/wifi/wifi7.jpg'
import wifi10 from '../../assets/img/wifi/wifi10.jpg'
import wifi15 from '../../assets/img/wifi/wifi15.jpg'
import syarat from '../../assets/img/wifi/syarat.png'

const PackageList = () => {
  return (
    <div>
        <Container className='my-3'>
            <Row>
                <Col className='text-center'>
                    <h2 className='text-decoration-underline fw-bold'>PAKET INTERNET</h2>
                    <p>Kami memberikan layanan jaringan internet sebagai media pendukung pembelajaran, multimedia, bisnis online, dengan biaya terjangkau.</p>
                </Col>
            </Row>
        </Container>
        <Container>
            <Row>
                <Col sm={12} xl={4} className='p-5'>
                    <img alt='alt' src={wifi7} className='img-fluid'/>
                </Col>
                <Col sm={12} xl={4} className='p-5'>
                    <img alt='alt' src={wifi10} className='img-fluid'/>
                </Col>
                <Col sm={12} xl={4} className='p-5'>
                    <img alt='alt' src={wifi15} className='img-fluid'/>
                </Col>
            </Row>
        </Container>
        <Container className='text-center my-5'>
            <Row>
                <Col>
                    <Button className='btn-primary-dark px-5 py-3 rounded-pill' > <h4 className='fw-bold mb-0'>Daftar Sekarang</h4></Button>
                </Col>
            </Row>
        </Container>
        <Container fluid className='mx-0 bg-linear-gradient-primary'>
            <Container>
                <Row className='d-flex align-items-center'>
                    <Col className='my-3' sm={12} xl={10}>
                        <h2 className='fw-bold' style={{color: '#FBF400'}}>DISKON</h2>
                        <div className='d-flex align-items-end'>
                            <h1 className='fw-bold text-white'>BIAYA INSTALASI <span style={{color: '#FBF400'}}>Rp. 500.000,-</span></h1>
                            <h5 className='fw-bold text-white ms-2'><del style={{border: 'red'}}>Rp.750.000,-</del></h5>
                        </div>
                    </Col>
                    <Col sm={12} xl={2} className="text-center">
                        <img alt='alt' src={syarat} className="img-fluid"/>
                    </Col>
                </Row>
            </Container>
        </Container>
        <Container className='my-5'>
            <Row>
                <Col className='text-center'>
                    <h2 className='text-decoration-underline fw-bold'>UPGRADE LAYANAN</h2>
                    <p>Di era new normal ini kebutuhan koneksi internet dengan kapasitas yang memadai menjadi hal yang penting dalam menunjang beragam aktivitas sehari - hari. Kebutuhan internet kamu semakin meningkat? Jangan ragu untuk segera upgrade layanan WiFi Rinjan kamu ya. WiFi Rinjan menyediakan pilihan paket internet yang pastinya terjangkau, andal, dan tanpa batas.</p>
                </Col>
            </Row>
        </Container>
        <Container className='text-center my-5'>
            <Row>
                <Col>
                    <Button className='btn-primary-dark px-5 py-3 rounded-pill' > <h4 className='fw-bold mb-0'>Upgrade Sekarang</h4></Button>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default PackageList