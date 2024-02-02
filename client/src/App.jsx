import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Service } from './pages/Service'
import { Register } from './pages/Register'
import { Login } from './pages/Login'
import { Navbar } from './components/navbar'
import { Logout } from './pages/Logout'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Success from './pages/Success'
import Cancel from './pages/Cancel'

const App = () => {
  return <>
    <BrowserRouter>
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/service' element={<Service />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='/success' element={<Success />} />
        <Route path='/cancel' element={<Cancel />} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App