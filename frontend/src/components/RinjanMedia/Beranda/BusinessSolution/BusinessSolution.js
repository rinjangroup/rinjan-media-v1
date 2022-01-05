import React from 'react'
import Container from 'react-bootstrap/Container'
import Accordion from 'react-bootstrap/Accordion'
import { BsPlusCircleFill } from "react-icons/bs";

const dataSolution = [
  {
    question: 'Saya ingin menjadi Investor Rinjan Media. Bagaimana caranya?',
    note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eacommodo consequat. Duis aute irure dolor in reprehenderit in voluptatevelit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim idest laborum.'
  },
  {
    question: 'Saya ingin menjadi Investor Wifi Rinjan. Bagaimana caranya?',
    note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eacommodo consequat. Duis aute irure dolor in reprehenderit in voluptatevelit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim idest laborum.'
  },
  {
    question: 'Saya ingin membuat konten promosi bisnis bersama Rinjan Designer Studio. Bagaimana caranya?',
    note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eacommodo consequat. Duis aute irure dolor in reprehenderit in voluptatevelit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim idest laborum.'
  },
  {
    question: 'Saya ingin merancang sistem informasi berbasis web bersama rinjan web developer. Bagaimana caranya?',
    note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eacommodo consequat. Duis aute irure dolor in reprehenderit in voluptatevelit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim idest laborum.'
  },
  {
    question: 'Saya ingin membuat bisnis offline menjadi online agar bisa menambah pelanggan. Bagaimana caranya?',
    note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eacommodo consequat. Duis aute irure dolor in reprehenderit in voluptatevelit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim idest laborum.'
  },
  {
    question: 'Apa itu website?',
    note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eacommodo consequat. Duis aute irure dolor in reprehenderit in voluptatevelit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim idest laborum.'
  },
  {
    question: 'Apa itu hosting?',
    note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eacommodo consequat. Duis aute irure dolor in reprehenderit in voluptatevelit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim idest laborum.'
  },
  {
    question: 'Mengapa memilih Rinjan Media sebagai solusi bisnis Anda?',
    note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eacommodo consequat. Duis aute irure dolor in reprehenderit in voluptatevelit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim idest laborum.'
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
