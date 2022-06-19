import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/esm/Button'

import icCalender from '../../../assets/img/kontak/ic_calender.png'
import icPerson from '../../../assets/img/kontak/ic_person.png'
import icGmail from '../../../assets/img/kontak/ic_gmail.png'

function FormContact() {
  return (
    <div className='my-5'>
      <Container>
        <Row>
          <Col>
            <h1 className='text-primary'><strong>Get</strong> In Touch</h1>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <Row className='d-flex align-items-center my-3'>
              <Col sm={6} xl={2} className="text-center">
                <img alt='alt' src={icCalender} className="img-fluid"/>
              </Col>
              <Col sm={6}>
                <p><strong>Office Hour</strong></p>
                <p className='mb-0 text-muted'>Senin - Minggu</p>
                <p className='text-muted'>09.00 - 21.00 WIB</p>
                <p className='text-muted'>(Termasuk Libur Nasional)</p>
              </Col>
            </Row>
            <Row className='d-flex align-items-center my-4'>
              <Col sm={6} xl={2} className="text-center">
                <img alt='alt' src={icPerson} className="img-fluid"/>
              </Col>
              <Col sm={6}>
                <p><strong>Account Executive</strong></p>
                <p className='text-muted'>+62 895 0110 0696 (Jalal)</p>
                <Button className='px-4 rounded-pill btn-success btn-sm'>WhatsApp</Button>
              </Col>
            </Row>
            <Row className='d-flex align-items-center my-5'>
              <Col sm={6} xl={2} className="text-center">
                <img alt='alt' src={icGmail} className="img-fluid"/>
              </Col>
              <Col sm={6}>
                <p><strong>Email Support</strong></p>
                <p className='mb-0 text-muted'>mail@rinjanmedia.com</p>
                <p className='text-muted'>(Mengisi form = kirim email)</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      <Container>
       <Form className="mt-4">
          <Row>
            <Col>
              <Form.Group id="name" className="mb-4 ">
                <InputGroup>
                  <Form.Control autoFocus required type="text" placeholder='Nama*' className=' py-2' />
                </InputGroup>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group id="company" className="mb-4 ">
                <InputGroup >
                  <Form.Control type="text" placeholder='Perusahaan / Bisnis (Optional)' className=' py-2' />
                </InputGroup>
              </Form.Group>
            </Col>
          </Row>
          <Row>
          <Col>
            <Form.Group id="email" className="mb-4 ">
              <InputGroup >
                <Form.Control required type="email" placeholder='Email*' className='py-2' />
              </InputGroup>
            </Form.Group>
          </Col>
            <Col>
              <Form.Group id="number" className="mb-4">
                <InputGroup>
                  <Form.Control  type="number" placeholder="No HP (Optional)" className='py-2' />
                </InputGroup>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col xl={6}>
              <Form.Group id="Category" className="mb-4 ">
                <Form.Select>
                  <option>Pilih Kategori</option>
                </Form.Select>
              </Form.Group> 
            </Col>
          </Row>

          <Form.Group id="subyek" className="mb-4 ">
            <InputGroup >
              <Form.Control  required type="text" placeholder='Sebyek*' className='py-2' />
            </InputGroup>
          </Form.Group>
          
          <Form.Group id="pesan" className="mb-4 ">
            <InputGroup >
              <Form.Control  required type="text" as={"textarea"} placeholder='pesan*' className='py-2' />
            </InputGroup>
          </Form.Group>

          <Row>
            <Col className='text-center'>
              <Button variant="primary" type="submit" className="py-2 rounded-pill px-4">
                Kirim Pesan
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  )
}

export default FormContact