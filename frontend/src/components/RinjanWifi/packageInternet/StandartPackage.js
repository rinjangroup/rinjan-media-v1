import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'

import wifi7 from '../../../assets/img/wifi/wifi7.jpg'
import wifi10 from '../../../assets/img/wifi/wifi10.jpg'
import wifi15 from '../../../assets/img/wifi/wifi15.jpg'

const StandartPackage = () => {
  return (
    <div>
        <Container>
            <Row>
                <Col sm={12} xl={4} className='p-5'>
                    <img alt='alt' src={wifi7} className='img-fluid'/>
                </Col>
                <Col sm={12} xl={4} className='p-5'>
                    <img alt='alt' src={wifi10} className='img-fluid'/>
                </Col>
                <Col sm={12} xl={4} className='p-5'>
                    <img alt='alt' src={wifi15} className='img-fluid'/>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default StandartPackage