// eslint-disable-next-line no-unused-vars
import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'


const HostLayout = () => {
  return (
    <div className='hosts flex flex-col gap-4 mx-6 h-screen'>
      <nav className='flex gap-4'>
        <NavLink to = '.' end className={({isActive}) => isActive ? 'active-link' : ''} >Dashboard</NavLink>
        <NavLink to = '/host/income' className={({isActive}) => isActive ? 'active-link' : ''} >Income</NavLink>
        <NavLink to = '/host/vans' className={({isActive}) => isActive ? 'active-link' : ''} >Vans</NavLink>
        <NavLink to = '/host/reviews' className={({isActive}) => isActive ? 'active-link' : ''} >Reviews</NavLink>
      </nav>
      <Outlet />
    </div>
  )
}

export default HostLayout