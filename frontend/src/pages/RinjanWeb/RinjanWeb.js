import React from 'react'
import TopBar from '../../components/RinjanMedia/TopBar/TopBar'
import Carousel from '../../components/RinjanWeb/Carousel/Carousel'
import MaintenanceList from '../../components/RinjanWeb/MaintenanceList/MaintenanceList'
import PriceList from '../../components/RinjanWeb/PriceList/PriceList'
import Footer from '../../components/RinjanMedia/Footer/Footer'


export default function RinjanWeb() {
  return (
    <>
      <TopBar/>
      <Carousel/>
      <PriceList/>
      <MaintenanceList/>
      <Footer/>
    </>
  )
}
