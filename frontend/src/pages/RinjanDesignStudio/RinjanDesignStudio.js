import React from 'react'
import Carousel from '../../components/RinjanDesignStudio/Carousel/Carousel'
import PriceList from '../../components/RinjanDesignStudio/PriceList/PriceList'
import Footer from '../../components/RinjanMedia/Footer/Footer'
import TopBar from '../../components/RinjanMedia/TopBar/TopBar'

export default function RinjanDesignStudio() {
  return (
    <div>
      <TopBar/>
      <Carousel/>
      <PriceList/>
      <Footer/>
    </div>
  )
}
