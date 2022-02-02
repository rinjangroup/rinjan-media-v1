import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ReactStars from "react-rating-stars-component";
import { LINKWHATSAPPWEB } from '../../../helpers/constants'
import toast, { Toaster } from 'react-hot-toast';

const dataPriceList = [
  {
    title: 'Landing Page',
    price: 'Rp. 500.000,-',
    rating: '4',
  },
  {
    title: 'Company Profile',
    price: 'Rp. 4.000.000,-',
    rating: '4',
  },
  {
    title: 'Portfolio',
    price: 'Rp. 1.500.000,-',
    rating: '4',
  },
  {
    title: 'Toko Online',
    price: 'Rp. 6.000.000,-',
    rating: '4',
  },
  {
    title: 'E-Commerce',
    price: 'Rp. 11.000.000,-',
    rating: '4',
  },
  {
    title: 'Sistem Informasi Akademik',
    price: 'Rp. 8.500.000,-',
    rating: '4',
  },
  {
    title: 'Aplikasi Berbasis Android',
    price: 'Rp. 7.500.000,-',
    rating: '4',
  },
  {
    title: 'Aplikasi Berbasis Web',
    price: 'Rp. 5.500.000,-',
    rating: '4',
  },
  {
    title: 'Portal Berita Online',
    price: 'Rp. 8.750.000,-',
    rating: '4',
  },
  {
    title: 'Custome',
    price: 'Hubungi Kami',
    rating: '4',
  }
]

export default function PriceList() {
  const notify = () => toast.error('Maaf... Masih dalam pengembangan :(', {
		style: {
			borderRadius: '10px',
			background: '#333',
			color: '#fff'
		}
	});
  return (
    <>
      <Container className='my-5 pt-5 text-center'>
        <h1 className='text-decoration-underline'>PAKET WEBSITE</h1>
      </Container>

      <Container>
        <Row>
          {dataPriceList !== undefined && dataPriceList.map((val, idx) => {
            return (
              <Col key={idx} sm={6} className='text-center'>
                <h1 className='mt-5'>{val.title}</h1>
                <Card
                  className='bg-linear-gradient-primary pt-5 border-0 shadow-lg mb-3'
                  style={{borderRadius: '15px'}}
                >
                  <h3 className='text-light'>Mulai</h3>
                  <h2 className='text-light fw-bold'>{val.price}</h2>
                  <div className='d-flex justify-content-center mb-5'>
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
                  <Button style={{borderRadius: '0 0 15px 15px'}} onClick={notify}>Lihat Detail</Button>
                  <Toaster 
                    position="top-center"
                    reverseOrder={false}
                  />
                </Card>
                <Button variant='warning' className='rounded-pill px-4 shadow' href={LINKWHATSAPPWEB} target="_blank">Pesan Sekarang</Button>
              </Col>
            )
          })}
        </Row>
      </Container>
      
    </>
  )
}
