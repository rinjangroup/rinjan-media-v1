import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import RinjanMedia from './pages/RinjanMedia/RinjanMedia';
import RinjanWeb from './pages/RinjanWeb/RinjanWeb';
import RinjanDesignStudio from './pages/RinjanDesignStudio/RinjanDesignStudio';
import RinjanWifi from './pages/RinjanWifi/RinjanWifi';

export default function routes() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<RinjanMedia/>}/>
        <Route path="/profile" element={<Login/>}/>
        <Route path="/team" element={<Login/>}/>
        <Route path="/contact" element={<Login/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/web" element={<RinjanWeb/>}/>
        <Route path="/design-studio" element={<RinjanDesignStudio/>}/>
        <Route path="/wifi" element={<RinjanWifi/>}/>
      </Routes>
    </main>
  )
}