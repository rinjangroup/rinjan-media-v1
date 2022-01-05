import React from 'react'
import BusinessSolution from '../../components/RinjanMedia/Beranda/BusinessSolution/BusinessSolution'
import Carousel from '../../components/RinjanMedia/Beranda/Carousel/Carousel'
import SectionListProject from '../../components/RinjanMedia/Beranda/SectionListProject/SectionListProject'
import Testimonials from '../../components/RinjanMedia/Beranda/Testimonials/Testimonials'
import Footer from '../../components/RinjanMedia/Footer/Footer'
import TopBar from '../../components/RinjanMedia/TopBar/TopBar'

export default function RinjanMedia() {
  return (
    <>
      <TopBar/>
      <Carousel/>
      <SectionListProject/>
      <Testimonials/>
      <BusinessSolution/>
      <Footer/>
    </>
  )
}
