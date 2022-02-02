import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Form from 'react-bootstrap/esm/Form';
import Button from 'react-bootstrap/esm/Button';
import toast, { Toaster } from 'react-hot-toast';


export default function TextInputEmail() {
	const notify = () => toast.error('Maaf... Masih dalam pengembangan :(', {
		style: {
			borderRadius: '10px',
			background: '#333',
			color: '#fff'
		}
	});


	return (
		<div>
			<Container style={{marginTop: '100px', marginBottom: '100px'}}>
        <Row>
          <Col>
            <Form className='d-flex justify-content-center'>
              <Form.Floating className="me-3 text-secondary" >
                <Form.Control
                  id="floatingInputCustom"
                  type="email"
                  placeholder="name@example.com"
                  className='border-warning rounded-pill shadow'
                  style={{width: '200px'}}
                />
                <label htmlFor="floatingInputCustom">Masukkan Email</label>
              </Form.Floating>
              <Button className='rounded-pill px-5 shadow' variant='warning' onClick={notify}><strong>Gabung</strong></Button>
            </Form>
          </Col>
        </Row>
				<Toaster 
					position="top-center"
  				reverseOrder={false}
				/>
      </Container>
		</div>
	);
}
