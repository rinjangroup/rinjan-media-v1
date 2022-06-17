import React from 'react'
import TopBar from '../../components/RinjanMedia/TopBar/TopBar'
import Header from '../../components/RinjanWifi/Header'
import PackageList from '../../components/RinjanWifi/PackageList'
import Area from '../../components/RinjanWifi/Area'
import Footer from '../../components/RinjanMedia/Footer/Footer'

export default function RinjanWifi() {
  return (
    <div>
      <TopBar/>
      <Header/>
      <PackageList/>
      <Area/>
      <Footer/>
    </div>
  )
}
