import React from 'react'
import Container from 'react-bootstrap/Container'
import image3 from '../../assets/img/image3.jpg'


const Header = () => {
  return (
    <div className='pt-3 my-5'>
        <Container className='text-center my-5'>
            <img src={image3} alt='alt'/>
            <h5 className='fw-bold my-3'>Dapatkan Akses Internet Murah Cepat Dan Berkualitas !</h5>
        </Container>
    </div>
  )
}

export default Header