import React, { useState, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal';
import AOS from "aos";

import BusinessSolution from '../../components/RinjanMedia/Beranda/BusinessSolution/BusinessSolution'
import Carousel from '../../components/RinjanMedia/Beranda/Carousel/Carousel'
import SectionListProject from '../../components/RinjanMedia/Beranda/SectionListProject/SectionListProject'
import Testimonials from '../../components/RinjanMedia/Beranda/Testimonials/Testimonials'
import Footer from '../../components/RinjanMedia/Footer/Footer'
import TopBar from '../../components/RinjanMedia/TopBar/TopBar'
import Thumbnail from '../../assets/img/thumbnail.jpeg'

 const RinjanMedia = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    AOS.init({ duration : 3000 });
    AOS.refresh()
  }, []);

  const handleClose = () => setShow(false);
  return (
    <>
      <TopBar/>
      <Carousel/>
      <SectionListProject/>
      <Testimonials/>
      <BusinessSolution/>
      <Footer/>

      {/* <div data-aos="flip-left"> */}
        <Modal show={show} onHide={handleClose} centered animation={true} data-aos="flip-left">
          <Modal.Header className='p-0' closeButton>
            <img src={Thumbnail} alt='alt' className='img-fluid img-thumbnail p-0'/>
          </Modal.Header>
        </Modal>
      {/* </div> */}
      
    </>
  )
}
export default RinjanMedia;