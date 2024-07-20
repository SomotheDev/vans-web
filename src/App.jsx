// eslint-disable-next-line no-unused-vars
import React from "react"
import {Routes, Route} from 'react-router-dom'
import Home from "./pages/Home"
import About from "./pages/About"
import Layout from "./components/Layout"
import HostLayout from "./components/HostLayout"
import Vans from "./pages/Vans/Vans"
import VanDetail from "./pages/Vans/VanDetail"

import Reviews from "./pages/Host/Reviews"
import Income from "./pages/Host/Income"
import HostVans from "./pages/Host/HostVans"
import HostVanDetail from "./pages/Host/HostVanDetail"
import Dashboard from "./pages/Host/Dashboard"

import '../server'
import HostVansDetails from "./pages/Host/HostPages/HostVansDetails"
import HostVansPricing from "./pages/Host/HostPages/HostVansPricing"
import HostVansPhotos from "./pages/Host/HostPages/HostVansPhotos"
function App() {

  return (
    <Routes>
      <Route element = {<Layout />}>
        <Route path = '/' element = {<Home />} />
        <Route path = '/about' element = {<About />} />
        <Route path = '/vans' element = {<Vans />} />
        <Route path = '/vans/:id' element = {<VanDetail />} />

        <Route path="host" element = {<HostLayout />}>
          <Route index element = {<Dashboard />} />
          <Route path = 'reviews' element = {<Reviews />} />
          <Route path = 'income' element = {<Income />} />
          <Route path = 'vans' element = {<HostVans />} />
          <Route path = 'vans/:id' element = {<HostVanDetail />} >
            <Route index element = {<HostVansDetails />} />  
            <Route path = 'pricing' element = {<HostVansPricing />} />
            <Route path = 'photos' element = {<HostVansPhotos />} /> 
          </Route> 
        </Route>
      </Route>
    </Routes>
  )
}

export default App
