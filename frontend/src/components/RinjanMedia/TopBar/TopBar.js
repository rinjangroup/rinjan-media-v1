import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Link, useNavigate } from 'react-router-dom'
import Axios from 'axios'

import Logo from '../../../assets/logo/logo-rinjan-media.svg'
import Avatar from '../../../assets/img/profile.jpg'
import { hostname } from '../../../helpers/constants'

const TopBar = () => {
  const [username, setUsername] = useState('')
  const navigate = useNavigate()
  Axios.defaults.withCredentials = true

  useEffect(() => {
    Axios.get(`${hostname}/isUserAuth`, {
      headers: {
        "x-access-token": localStorage.getItem("token")
      },
    }).then(() => {
      if (localStorage.getItem("token")) {
        setUsername(localStorage.getItem("username"))
      }
    })
  }, [navigate])

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    window.location.reload(false)
  }
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
              <NavDropdown.Item href="/web">Rinjan Website</NavDropdown.Item>
              <NavDropdown.Item href="/design-studio">Rinjan Design</NavDropdown.Item>
              <NavDropdown.Item href="/wifi">Wifi Rinjan</NavDropdown.Item>
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
            {localStorage.getItem('token') ? 
              <NavDropdown className='text-primary p-0 profile-dropdown ms-5' title={
                <div>
                  <img src={Avatar} className="user-avatar md-avatar rounded-circle img-fluid p-0" alt='alt' height={40} width={40}/>
                  <span className='ms-2'>{`Hi ${username}`}</span>
                </div>
                } id="basic-nav-dropdown">
                <NavDropdown.Item>My Profile</NavDropdown.Item>
                <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
              </NavDropdown> :
              <>
                <Nav.Item className='mx-1'>
                  <Button variant='primary' href={'/sign-in'}>Sign In</Button>
                </Nav.Item>
                <Nav.Item className='mx-1'>
                    <Button variant='warning' href={'/sign-up'} className='text-light'>Sign Up</Button>
                </Nav.Item>
              </>
            }
            
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default TopBar
