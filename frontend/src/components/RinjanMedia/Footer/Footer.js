import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Logo from '../../../assets/logo/logo-footer.png'
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { RiWhatsappFill } from "react-icons/ri";
import { BsYoutube } from "react-icons/bs";


export default function Footer() {
  return (
    <div>
      <div className='bg-footer'/>
      <Container fluid className='content-footer' style={{backgroundColor: '#1759BB'}}>
        <Row>
          <Col>
            <div className='bg-light rounded-pill text-center'>
              <img src={Logo} alt='alt' className='img-fluid p-2'/>
            </div>
            <div className='text-light fs-1 d-flex justify-content-evenly mt-4'>
              <BsFacebook/>
              <AiFillInstagram/>
              <RiWhatsappFill/>
              <BsYoutube/>
            </div>
          </Col>
          <Col className='text-light'>
            <h4 className='text-warning'><strong>Hubungi Kami</strong></h4>
            <p className='mb-0'><strong>Hp:</strong> 0895-0110-0696</p>
            <p className='mb-0'><strong>Email/Contact:</strong> mail@rinjanmedia.com</p>
            <p><strong>Technical Support:</strong> support@rinjanmedia.com</p>
            <p><strong>Tangerang Selatan (Head Office)</strong> <br/>Jl. Swadaya, Kp. Ciater Barat Rt.012 Rw.002 Kel. Ciater Kec. Serpong Kota Tangerang Selatan Banten - 15310</p>
          </Col>
          <Col className='text-light'>
            <h4 className='text-warning'><strong>Layannan</strong></h4>
            <p>Website Murah</p>
            <p>Desain Grafis</p>
            <p>Percetakan</p>
            <p>Wifi Rinjan</p>
          </Col>
          <Col className='text-light'>
            <h4 className='text-warning'><strong>Informasi</strong></h4>
            <p className='mb-0'>Tentang Rinjan Media</p>
            <p className='mb-0'>Kerjasama</p>
            <p className='mb-0'>Perjanjian Layanan</p>
            <p className='mb-0'>Tutorial</p>
            <p className='mb-0'>We're Hiring!</p>
            <p>News!</p>
          </Col>
          <Col className='text-light'>
            <h4 className='text-warning'><strong>Tautan</strong></h4>
            <p>Portofolio</p>
            <p>Studi Kasus</p>
            <p>Blog</p>
          </Col>
        </Row>
      </Container>
      <div className='text-center text-light py-5' style={{backgroundColor: '#1759BB'}}>
        <i>{`All Reserved © Copyright by Rinjan Media 2018 - ${new Date().getFullYear()}`}</i>
      </div>
    </div>
  )
}
