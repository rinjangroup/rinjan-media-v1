import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';

import TopBar from '../../components/RinjanMedia/TopBar/TopBar'
import Header from '../../components/RinjanWifi/Header'
import PackageList from '../../components/RinjanWifi/PackageList'
import Area from '../../components/RinjanWifi/Area'
import Footer from '../../components/RinjanMedia/Footer/Footer'
import ModalWeb from '../../assets/modal/wifi.jpg'



const RinjanWifi = () => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  
  return (
    <div>
      <TopBar/>
      <Header/>
      <PackageList/>
      <Area/>
      <Footer/>

      <Modal show={show} onHide={handleClose} centered >
        <Modal.Header className='p-0' closeButton>
          <img src={ModalWeb} alt='alt' className='img-fluid img-thumbnail p-0'/>
        </Modal.Header>
      </Modal>
    </div>
  )
}
export default RinjanWifi