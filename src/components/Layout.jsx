// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../pages/Header'
import Footer from '../pages/Footer'
const Layout = () => {
  return (
    <div className="wrapper">
        <Header />
        <Outlet />
        <Footer style={{marginTop: 'auto'}}/>
    </div>
  )
}

export default Layout