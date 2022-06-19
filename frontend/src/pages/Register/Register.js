import React, { useState } from 'react'
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import { Link, useNavigate } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { FiChevronLeft } from "react-icons/fi";
import toast, { Toaster } from 'react-hot-toast';
import Axios from 'axios'

import Union from '../../assets/components/Union-right.svg'
import Undraw from '../../assets/components/undraw-right.svg'
import Logo from '../../assets/logo/logo-rinjan-media.svg'
import Gmail from '../../assets/logo/Gmail.svg'
import Instagram from '../../assets/logo/Instagram.svg'
import { hostname } from "../../helpers/constants";


const Register = () => {
  const [newRegister, setNewRegister] = useState({})
  const navigate = useNavigate()

  const notifySuccess = () => toast.success('Berhasil Terdaftar!');
  const notifyError = (val) => toast.error(val);

  const onChange = (value, key) => {
    setNewRegister({
        ...newRegister, [key]: value
    })
  }
  
  const onSubmit = (e) => {
    e.preventDefault();
    if (newRegister.password !== newRegister.confirm_password) {
      notifyError('Konfirmasi password tidak sesuai!')
    } else {
      Axios.post(`${hostname}/register`, newRegister).then((response) => {
        if(response.data.message) {
          notifySuccess()
          setTimeout(() => {
            navigate('/sign-in')
          }, 2000)
        } else {
          notifyError('Gagal terdaftar!')
        }
      })
    }
  }

  return (
    <div>
      <Container fluid>
        <Row> 
          <Col sm={12} md={6} xl={6} className='d-flex align-items-center justify-content-center'>
            <div className='d-block'>
              <img src={Logo} alt='alt' className='img-fluid mt-5'/>
              <h1 className='text-primary mt-4'><strong>Sign Up</strong></h1>
                <Form className="mt-4" onSubmit={onSubmit}>
                  <Row>
                    <Col>
                      <Form.Group id="first_name" className="mb-4 ">
                        <InputGroup >
                          <Form.Control autoFocus required type="text" placeholder='Nama Depan' className='rounded-pill py-2' onChange={(e) => onChange(e.target.value, 'first_name')}/>
                        </InputGroup>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group id="last_name" className="mb-4 ">
                        <InputGroup >
                          <Form.Control required type="text" placeholder='Nama Belakang' className='rounded-pill py-2' onChange={(e) => onChange(e.target.value, 'last_name')}/>
                        </InputGroup>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Group id="email" className="mb-4 ">
                    <InputGroup >
                      <Form.Control required type="email" placeholder='contoh@gmail.com' className='rounded-pill py-2' onChange={(e) => onChange(e.target.value, 'email')}/>
                    </InputGroup>
                  </Form.Group>
                  <Row>
                    <Col>
                      <Form.Group id="password" className="mb-4">
                        <InputGroup>
                          <Form.Control required type="password" placeholder="Password" className='rounded-pill py-2' onChange={(e) => onChange(e.target.value, 'password')}/>
                        </InputGroup>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group id="confirm_password" className="mb-4">
                        <InputGroup>
                          <Form.Control required type="password" placeholder="Konfirmasi password" className='rounded-pill py-2' onChange={(e) => onChange(e.target.value, 'confirm_password')}/>
                        </InputGroup>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Group id="phone_number" className="mb-4 ">
                    <InputGroup >
                      <Form.Control  required type="number" placeholder='No. Handphone' className='rounded-pill py-2' onChange={(e) => onChange(e.target.value, 'phone_number')}/>
                    </InputGroup>
                  </Form.Group>
                  <Form.Group id="address" className="mb-4 ">
                    <InputGroup >
                      <Form.Control  required type="text" placeholder='Alamat' className='rounded-pill py-2' onChange={(e) => onChange(e.target.value, 'address')}/>
                    </InputGroup>
                  </Form.Group>
                  <Button variant="primary" type="submit" className="w-100 rounded-pill py-2">
                    Daftar
                  </Button>
                </Form>
                <p className='text-primary my-2 text-center'><strong>Daftar dengan akun media sosial</strong></p>
                <div className='d-flex flex-column'>
                  <Button className="w-100 rounded-pill" variant='outline-primary'><img src={Gmail} alt='alt' height={25} width={25} className='me-2'/> Daftar dengan akun Google</Button>
                  <Button className="w-100 rounded-pill my-3" variant='outline-primary'><BsFacebook style={{style: 'blue', height: '25px', width: '25px'}} className='me-2 text-center'/>Daftar dengan akun Facebook</Button>
                  <Button className="w-100 rounded-pill" variant='outline-primary'><img src={Instagram} alt='alt' height={25} width={25} className='me-2'/> Daftar dengan akun Instagram</Button>
                </div>
                <p className='mb-0 mt-4 text-primary'><strong>Sudah punya akun? </strong></p>
                <Button variant='primary' className='rounded-pill pe-4 my-3' as={Link} to={'/sign-in'}> <FiChevronLeft/> Sign In</Button>
                <div className='text-primary cursor-pointer mb-5' onClick={() => navigate(-1)}>
                  <FiChevronLeft/>
                  <span>kembali</span>
                </div>
            </div>
          </Col>
          <Col sm={0} className='d-flex align-items-center px-0' style={{ backgroundImage: `url(${Union})`,backgroundRepeat: 'no-repeat', backgroundPosition: "right top" }}>
            <img src={Undraw} alt='alt' className='img-fluid'/>
          </Col>
        </Row>
      </Container>
      <Toaster 
        position="top-center"
        reverseOrder={false}
      />
    </div>
  )
}
export default Register