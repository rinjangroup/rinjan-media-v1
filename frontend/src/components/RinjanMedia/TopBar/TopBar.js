import React from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Logo from '../../../assets/logo/logo-rinjan-media.svg'
import { Link } from 'react-router-dom'

const TopBar = () => {
  return (
    <>
    <Navbar bg="light" expand="lg" className='shadow' fixed="top">
      <Container className='d-flex justify-content-between'>
        <Navbar.Brand as={Link} to={'/'}  >
          <img src={Logo} alt='logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" />
          <Nav className="justify-content-end" activeKey="/">
            <Nav.Item >
              <Nav.Link className='text-primary' href="/">Beranda</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className='text-primary' href="/profile">Profil</Nav.Link>
            </Nav.Item>
            <NavDropdown title={<span className='text-primary'>Layanan</span>} id="basic-nav-dropdown">
              <NavDropdown.Item href="/web">Rijan Website</NavDropdown.Item>
              <NavDropdown.Item href="/design-studio">Rinjan Design</NavDropdown.Item>
              <NavDropdown.Item href="/404">Wifi Rinjan</NavDropdown.Item>
            </NavDropdown>
            <Nav.Item>
              <Nav.Link className='text-primary' href="/team">Tim Rinjan</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className='text-primary' href="/404">Kontak</Nav.Link>
            </Nav.Item>
            <NavDropdown className='text-primary' title={<span className='text-primary'>Bahasa</span>} id="basic-nav-dropdown">
              <NavDropdown.Item>Indonesia</NavDropdown.Item>
              <NavDropdown.Item>English</NavDropdown.Item>
            </NavDropdown>
            <Nav.Item className='mx-3'>
              <Button variant='primary' href={'/404'} >Sign In</Button>
            </Nav.Item>
            <Nav.Item>
              <Button variant='warning' href={'/404'} className='text-light'>Sign Up</Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default TopBar
