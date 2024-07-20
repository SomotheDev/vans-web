// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from '../pages/Footer'
const Layout = () => {
  return (
    <div className="wrapper h-full">
        <Header />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout