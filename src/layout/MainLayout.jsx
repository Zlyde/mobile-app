import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Navigation from '../components/Navigation' 

const MainLayout = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Navigation /> 
    </>
  )
}

export default MainLayout
