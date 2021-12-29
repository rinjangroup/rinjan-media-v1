import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import RinjanMedia from './pages/RinjanMedia/RinjanMedia';
import RinjanWeb from './pages/RinjanWeb/RinjanWeb';

export default function routes() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<RinjanMedia/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/rinjan-web" element={<RinjanWeb/>}/>
      </Routes>
    </main>
  )
}