import React from 'react'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Header from '../components/Header'
import Navigation from '../components/Navigation' 

const MainLayout = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <ToastContainer />
      <Navigation /> 
    </>
  )
}

export default MainLayout
