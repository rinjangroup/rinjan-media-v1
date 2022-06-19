import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import RinjanMedia from './pages/RinjanMedia/RinjanMedia';
import RinjanWeb from './pages/RinjanWeb/RinjanWeb';
import RinjanDesignStudio from './pages/RinjanDesignStudio/RinjanDesignStudio';
import RinjanWifi from './pages/RinjanWifi/RinjanWifi';
import RinjanTeam from './pages/RinjanMedia/RinjanTeam';
import RinjanProfile from './pages/RinjanMedia/RinjanProfile';
import Contact from './pages/RinjanMedia/Contact'
import PageNotFound404 from './components/PageNotFound404/PageNotFound404';

export default function routes() {
  return (
    <main>
      <Routes>
        <Route exect path="/" element={<RinjanMedia/>}/>
        <Route path="/profile" element={<RinjanProfile/>}/>
        <Route path="/team" element={<RinjanTeam/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/sign-in" element={<Login/>}/>
        <Route path="/sign-up" element={<Register/>}/>
        <Route path="/web" element={<RinjanWeb/>}/>
        <Route path="/design-studio" element={<RinjanDesignStudio/>}/>
        <Route path="/wifi" element={<RinjanWifi/>}/>
        <Route path="/404" element={<PageNotFound404/>}/>
      </Routes>
    </main>
  )
}