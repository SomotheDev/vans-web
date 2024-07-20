// eslint-disable-next-line no-unused-vars
import React from 'react'
import { NavLink } from 'react-router-dom'

const HostVansNav = () => {
  return (
    <div className='flex gap-6 px-4'>
      <NavLink to = '.' end className={({isActive}) => isActive ? 'active-link' : ''} >Details</NavLink>
      <NavLink to = 'photos' className={({isActive}) => isActive ? 'active-link' : ''} >Photos</NavLink>
      <NavLink to = 'pricing' className={({isActive}) => isActive ? 'active-link' : ''} >Pricing</NavLink>
    </div>
  )
}

export default HostVansNav