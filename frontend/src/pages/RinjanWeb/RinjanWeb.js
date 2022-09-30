import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';

import TopBar from '../../components/RinjanMedia/TopBar/TopBar'
import Carousel from '../../components/RinjanWeb/Carousel/Carousel'
import MaintenanceList from '../../components/RinjanWeb/MaintenanceList/MaintenanceList'
import PriceList from '../../components/RinjanWeb/PriceList/PriceList'
import Footer from '../../components/RinjanMedia/Footer/Footer'
import ModalWeb from '../../assets/modal/web.jpg'


const RinjanWeb = () => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);


  return (
    <>
      <TopBar/>
      <Carousel/>
      <PriceList/>
      <MaintenanceList/>
      <Footer/>

      <Modal show={show} onHide={handleClose} centered >
        <Modal.Header className='p-0' closeButton>
          <img src={ModalWeb} alt='alt' className='img-fluid img-thumbnail p-0'/>
        </Modal.Header>
      </Modal>
    </>
  )
}
export default RinjanWeb