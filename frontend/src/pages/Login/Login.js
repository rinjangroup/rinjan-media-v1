import React, { useState } from 'react'
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import FormCheck from 'react-bootstrap/esm/FormCheck'
import Card from 'react-bootstrap/esm/Card'
import { FiChevronLeft } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import Axios from 'axios'
import toast, { Toaster } from 'react-hot-toast';

import Union from '../../assets/components/Union.svg'
import Undraw from '../../assets/components/undraw-skateboard.svg'
import Logo from '../../assets/logo/logo-rinjan-media.svg'
import { hostname } from "../../helpers/constants";

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const notifyError = (val) => toast.error(val);

  const onSubmit = (e) => {
    e.preventDefault();
    const payload = {
      username,
      password
    }
    Axios.post(`${hostname}/login`, payload).then((response) => {
      if (!response.data.auth) {
        notifyError(response.data.message)
      } else {
        localStorage.setItem("token", response.data.token)
        localStorage.setItem("username", response.data.result[0].username)
        navigate("/")
      }
    })
  }
  return (
    <div>
      <Container fluid>
        <Row> 
          <Col sm={0} className='d-flex align-items-center px-0' style={{ backgroundImage: `url(${Union})`,backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '100vh' }}>
            <img src={Undraw} alt='alt' className='img-fluid'/>
          </Col>
          <Col sm={12} md={6} xl={6} className='d-flex align-items-center justify-content-center'>
            <div>
              <img src={Logo} alt='alt' className='img-fluid'/>
              <h1 className='text-primary mt-5'><strong>Sign In</strong></h1>
              <p className='mb-5'><i>Masuk dengan akun Rinjan Media yang sudah terdaftar</i></p>
                <Form className="mt-4" onSubmit={onSubmit}>
                  <Form.Group id="username" className="mb-4 ">
                    <InputGroup >
                      <Form.Control autoFocus required type="text" placeholder='Username/Email' className='rounded-pill py-2' onChange={(e) => setUsername(e.target.value)}/>
                    </InputGroup>
                  </Form.Group>
                  <Form.Group>
                    <Form.Group id="password" className="mb-4">
                      <InputGroup>
                        <Form.Control required type="password" placeholder="Password" className='rounded-pill py-2' onChange={(e) => setPassword(e.target.value)}/>
                      </InputGroup>
                    </Form.Group>
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <Form.Check type="checkbox">
                        <FormCheck.Input id="defaultCheck5" className="me-2" />
                        <FormCheck.Label htmlFor="defaultCheck5" className="mb-0">Ingat saya</FormCheck.Label>
                      </Form.Check>
                    </div>
                  </Form.Group>
                  <Button variant="primary" type="submit" className="w-100 rounded-pill py-2">
                    Login
                  </Button>
                  <Card.Link className="small cursor-pointer"><i>Lupa Password</i></Card.Link>
                </Form>
                <div className='d-flex flex-column'>
                  <span className='text-primary mt-5'><strong>Balum punya akun?</strong></span>
                  <div className='my-3'>
                    <Button variant='primary rounded-pill px-5' as={Link} to={'/sign-up'}>Daftar</Button>
                  </div>
                  <div className='text-primary cursor-pointer' onClick={() => navigate(-1)}>
                    <FiChevronLeft/>
                    <span>kembali</span>
                  </div>
                </div>
            </div>
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
export default Login