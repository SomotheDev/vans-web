// eslint-disable-next-line no-unused-vars
import React from "react"
import {Routes, Route} from 'react-router-dom'
import Home from "./pages/Home"
import About from "./pages/About"
import Layout from "./components/Layout"
import Vans from "./pages/Vans"
import VanDetail from "./pages/VanDetail"

import '../server'


function App() {

  return (
    <Routes>
      <Route element = {<Layout />}>
        <Route path = '/' element = {<Home />} />
        <Route path = '/about' element = {<About />} />
        <Route path = '/vans' element = {<Vans />} />
        <Route path = '/vans/:id' element = {<VanDetail />} />

      </Route>
    </Routes>
  )
}

export default App
