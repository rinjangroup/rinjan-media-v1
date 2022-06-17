import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import TextInputEmail from '../../TextInputEmail/TextInputEmail'
import { LINKWHATSAPPWEB } from '../../../helpers/constants'

export default function MaintenanceList() {

  const dataMaintenance = [
    {
      title: 'BASIC Maintenance',
      price: 'Rp. 1.500.000',
      color: 'warning',
      features: [
        'Perbaikan Minor Bugs & Error',
        '3 Artikel SEO 600 kata',
        'Update Artikel max 10 artikel',
        'Update Konten max 3 Halaman',
        'Update Gambar/Produk max 50',
        'Backup Otomatis per 1 bulan',
        '1x Desain Banner',
        '1x Desain Advertising',
        '1x Pemasangan Plugin',
        'Pembaharuan Sistem/Plugin Web',
        'Perbaikan Web Kena Hack',
        'Redesign Web (min 6 bulan)',
        'x',
        'x',
        'x',
        'x'
      ]
    },
    {
      title: 'ADVANCE Maintenance',
      price: 'Rp. 3.000.000',
      color: 'success',
      features: [
        'Perbaikan Minor Bugs & Error',
        '6 Artikel SEO 600 kata',
        'Update Artikel max 20 artikel',
        'Update Konten max 7 Halaman',
        'Update Gambar/Produk max 200',
        'Backup Otomatis per 2 minggu',
        '3x Desain Banner',
        '3x Desain Advertising',
        '2x Pemasangan Plugin',
        'Pembaharuan Sistem/Plugin Web',
        'Perbaikan Web Kena Hack',
        'Redesign Web (min 6 bulan)',
        'Analisa Traffic Web',
        'SEO Basic',
        'x',
        'x'
      ]
    },
    {
      title: 'PREMIUM Maintenance',
      price: 'Rp. 3.000.000',
      color: 'primary',
      features: [
        'Perbaikan Minor Bugs & Error',
        '10 Artikel SEO 600 kata',
        'Update Artikel max 30 artikel',
        'Update Konten max 10 Halaman',
        'Update Gambar/Produk max 400',
        'Backup Otomatis per 1 minggu',
        '6x Desain Banner',
        '6x Desain Advertising',
        '3x Pemasangan Plugin',
        'Pembaharuan Sistem/Plugin Web',
        'Perbaikan Web Kena Hack',
        'Redesign Web (min 6 bulan)',
        'Analisa Traffic Web',
        'SEO Basic',
        'Optimasi Web Security',
        'Layanan On Site (1x per bulan)'
      ]
    }
  ]
  return (
    <>
      <Container className='text-center my-5'>
        <h2 className='text-decoration-underline'>PAKET MAINTENANCE</h2>
      </Container>
      <div className='bg-linear-gradient-primary'>
        <Container className='py-5'>
          <Row>
          {dataMaintenance !== undefined && dataMaintenance.map((val, idx) => {
            return (
              <Col sm={12} md={4} xl={4} className='mt-2'>
                <Card 
                  className='bg-secondary border-0'
                  style={{borderRadius: '0 40% 0 50px'}}
                  >
                  <div className={`bg-${val.color} mt-4 me-5 py-4 text-light p-3`} style={{borderRadius: '0 20px 20px 0'}}>
                    <h5 className='fw-bold'>{val.title}</h5>
                    <h2 className='fw-bold'>{val.price}</h2>
                  </div>
                  <div className='text-center my-5 text-light'>
                    {val.features !==undefined && val.features.map((value, idx) => {
                      return (
                        <>
                          <p>{value}</p>
                          <hr className='text-light mx-5'/>
                        </>
                      )
                    })}
                    <Button variant={`outline-${val.color}`} href={LINKWHATSAPPWEB} target='_blank'>Pesan sekarang</Button>
                  </div>
                </Card>
              </Col>
            )
          })}
            
          </Row>
        </Container>
      </div>

      <TextInputEmail/>
      
    </>
  )
}
