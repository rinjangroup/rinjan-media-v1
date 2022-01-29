import React from 'react'
import Container from 'react-bootstrap/Container'
import image1 from '../../../assets/img/image1.jpg'

export default function Carousel() {
  return (
    <div className='pt-3 my-5'>
      <Container className='text-center my-5'>
        <img src={image1} alt='alt'/>
        <h2 className='fw-bold'>Wujudkan Website Impianmu Bersama Kami !</h2>
        <p>Rinjan Web Developer menyediakan layanan perancangan website dengan rekomendasi domain dan hosting murah dan berkualitas. </p>
      </Container>
    </div>
  )
}
