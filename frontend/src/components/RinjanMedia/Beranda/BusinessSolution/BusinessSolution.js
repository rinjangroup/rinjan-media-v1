import React from 'react'
import Container from 'react-bootstrap/Container'
import Accordion from 'react-bootstrap/Accordion'
import { BsPlusCircleFill } from "react-icons/bs";

const dataSolution = [
  {
    question: 'Saya ingin menjadi Investor Rinjan Media. Bagaimana caranya?',
    note: 'Rinjan Media merupakan platform digital yang dikembangkan untuk membantu banyak orang untuk menjadi investor dan memfasilitasi calon investor untuk belajar mengenai seluruh instrumen investasi dengan cara membantu UKM sekitar dan menerapkan sistem bagi hasil.'
  },
  {
    question: 'Saya ingin menjadi Investor Wifi Rinjan. Bagaimana caranya?',
    note: 'Wifi Rinjan merupakan jasa layanan internet yang dikembangkan untuk membantu banyak orang mendapatkan layanan internet dengan harga terjangkau dan memfasilitasi calon investor untuk belajar dan bekerjasama dan menerapkan sistem bagi hasil.'
  },
  {
    question: 'Saya ingin membuat konten promosi bisnis bersama Rinjan Designer Studio. Bagaimana caranya?',
    note: 'Berjualan menggunakan media sosial itu membutuhkan strategi khusus. Maka pada tahap awal, sahabat UKM harus mengoptimalkan strategi konten promosi dengan jasa desain teknik promosi yang kami berikan agar jualan teman-teman menjadi lebih efektif.'
  },
  {
    question: 'Saya ingin merancang sistem informasi berbasis web bersama rinjan web developer. Bagaimana caranya?',
    note: 'Untuk merancang sistem informasi berbasis web bersama rinjan web developer cukuplah mudah. Anda perlu menjelaskan kebutuhan yang diinginkan dan tim kami akan melakukan analisis perancangan sistem dan dibuatlah perjanjian antar pihak yang semua setuju untuk merancang sistem yang telah disepakati bersama.'
  },
  {
    question: 'Saya ingin membuat bisnis offline menjadi online agar bisa menambah pelanggan. Bagaimana caranya?',
    note: 'Sebenarnya merubah bisnis offline menjadi online tidak terbilang sulit karena banyak platform digital yang akan mempermudah hal itu tetapi niat dan kemauan yang kuat untuk belajar dan beradaptasi merupakan modal penting seorang pebisnis dalam merubah konsep bisnisnya menjadi online.'
  },
  {
    question: 'Apa itu website?',
    note: 'Website adalah sekumpulan halaman web yang saling berhubungan yang umumnya berada pada peladen yang sama berisikan kumpulan informasi yang disediakan secara perorangan, kelompok, atau organisasi.'
  },
  {
    question: 'Apa itu hosting?',
    note: 'Hosting adalah lokasi atau media untuk menyimpan data dalam bentuk tulisan, gambar atau video. Dikutip dari Wikipedia, Web hosting adalah suatu layanan bagi user yang berguna untuk menyimpan informasi, gambar, video dan beberapa konten lainnya yang akan diakses via website.'
  },
  {
    question: 'Mengapa memilih Rinjan Media sebagai solusi bisnis Anda?',
    note: 'Rinjan Media merupakan konsultan sekaligus penyedia layanan Jasa Digital Marketing untuk berbagai bisnis. Kami memberikan pelayanan secara maksimal sesuai kebutuhan pelanggan.'
  }
]

export default function BusinessSolution() {
  return (
    <>
      <Container>
        <h4 className='text-center text-primary'>Solusi Memilih Bisnis</h4>
      </Container>

      <Container className='my-3' style={{background: '#F1F7FF', borderRadius: '15px'}}>
        <h1 className='text-center text-primary pt-3'><strong>Bisnis Apa yang Tepat untuk Saya?</strong></h1>
        <Accordion className='py-3'>
          {dataSolution !== undefined && dataSolution.map((val, idx) => {
            return (
              <Accordion.Item eventKey={idx} className='my-3 mx-5 shadow' >
                <Accordion.Header><BsPlusCircleFill className='text-primary me-3'/>{val.question}</Accordion.Header>
                <Accordion.Body>
                  {val.note}
                </Accordion.Body>
              </Accordion.Item>
            )
          })}
        </Accordion>
      </Container>
    </>
  )
}
