import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ReactStars from "react-rating-stars-component";
import Form from 'react-bootstrap/Form'

const PriceList = () => {
	const dataPriceList = [
		{
			title: 'Design Logo',
			price: 'Rp. 500.000,-',
			rating: '4',
		},
		{
			title: 'Desain Banner',
			price: 'Rp. 70.000,-',
			rating: '4',
		},
		{
			title: 'Desain Sertifikat',
			price: 'Rp. 70.000,-',
			rating: '4',
		},
		{
			title: 'Desain Sablon',
			price: 'Rp. 150.000,-',
			rating: '4',
		},
		{
			title: 'Desain Website',
			price: 'Rp. 1.500.000,-',
			rating: '4',
		},
		{
			title: 'Desain Ui/Ux',
			price: 'Rp. 1.000.000,-',
			rating: '4',
		},
		{
			title: 'Desain Branding',
			price: 'Rp. 500.000,-',
			rating: '4',
		},
		{
			title: 'Paket Event',
			price: 'Rp. 3.000.000,-',
			rating: '4',
		}
	]
	const dataPercetakan = [
		'Banner',
		'Sertifikat',
		'Stiker',
		'Kop Surat',
		'Atk',
		'Undangan',
		'Merchandise',
		'Signage',
		'Paket Lengkap'
	]
	return (
		<>
			<Container>
				<h1 className='my-5 py-5 text-center'>Desain Yang Kami Kerjakan</h1>
				<Row>
				{dataPriceList !== undefined && dataPriceList.map((val, idx) => {
            return (
              <Col key={idx} sm={6} className='text-center'>
                <Card
                  className='bg-linear-gradient-primary pt-5 border-0 shadow-lg'
                  style={{borderRadius: '15px'}}
                >
                  <h2 className='text-light fw-bold'>{val.title}</h2>
                  <div className='d-flex justify-content-center align-items-center mb-5'>
                  	<h4 className='text-light mb-0 me-4'>Mulai <strong>{val.price}</strong></h4>
                    <ReactStars
                      count={5}
                      value={val.rating}
                      size={35}
                      edit={false}
                      isHalf={true}
                      emptyIcon={<i className="far fa-star"></i>}
                      activeColor="#ffd700"
                      color={"#fff"}
                    />
                  </div>
									<div>
										<Button variant='warning' className='rounded-pill px-4 shadow mb-4'>Pesan Sekarang</Button>
									</div>
                </Card>
              </Col>
            )
          })}
				</Row>
			</Container>
			<Container className='my-5'>
				<h1 className='text-center'>Kami Juga Menyediakan Tambahan Layanan Percetakan</h1>
				<p className='text-center'>Sehingga anda tidak perlu repot mencari percetakan setelah anda mendesain, karna kami memahami kebutuhan bisnis anda, maka kami berusaha melayani dengan se-maksimal mungkin membuat anda nyaman dan memudahkan proses kerja anda dan tim anda</p>
			</Container>
			<Container>
				<Row>
				{dataPercetakan.length !== 0 && dataPercetakan.map((val, idx) => {
					return (
						<Col sm={4}>
							<Card 
								className='bg-linear-gradient-primary border-0 shadow-lg py-3'
								style={{borderRadius: '15px'}}
							>
								<h1 className='text-light text-center'><strong>{val}</strong></h1>
							</Card>
						</Col>
					)
				})}
				</Row>
			</Container>

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
                  style={{width: '350px'}}
                />
                <label htmlFor="floatingInputCustom">Masukkan Email disini</label>
              </Form.Floating>
              <Button className='rounded-pill px-5 shadow' variant='warning' type='submit'><strong>Gabung</strong></Button>
            </Form>
          </Col>
        </Row>
      </Container>
		</>
	)
}
export default PriceList