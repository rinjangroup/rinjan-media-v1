import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';

import Carousel from '../../components/RinjanDesignStudio/Carousel/Carousel'
import PriceList from '../../components/RinjanDesignStudio/PriceList/PriceList'
import Footer from '../../components/RinjanMedia/Footer/Footer'
import TopBar from '../../components/RinjanMedia/TopBar/TopBar'
import ModalWeb from '../../assets/modal/design.jpg'

const RinjanDesignStudio = () => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  return (
    <div>
      <TopBar/>
      <Carousel/>
      <PriceList/>
      <Footer/>

      <Modal show={show} onHide={handleClose} centered >
        <Modal.Header className='p-0' closeButton>
          <img src={ModalWeb} alt='alt' className='img-fluid img-thumbnail p-0'/>
        </Modal.Header>
      </Modal>
    </div>
  )
}
export default RinjanDesignStudio