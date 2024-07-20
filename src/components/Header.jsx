// eslint-disable-next-line no-unused-vars
import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/index.css'
const Header = () => {
  return (
    <nav className="header">
        <NavLink to = '/' className='logo link'><span className='hash'><svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="#255290"><path d="M240-200q-50 0-85-35t-35-85H40v-360q0-33 23.5-56.5T120-760h560l240 240v200h-80q0 50-35 85t-85 35q-50 0-85-35t-35-85H360q0 50-35 85t-85 35Zm360-360h160L640-680h-40v120Zm-240 0h160v-120H360v120Zm-240 0h160v-120H120v120Zm120 290q21 0 35.5-14.5T290-320q0-21-14.5-35.5T240-370q-21 0-35.5 14.5T190-320q0 21 14.5 35.5T240-270Zm480 0q21 0 35.5-14.5T770-320q0-21-14.5-35.5T720-370q-21 0-35.5 14.5T670-320q0 21 14.5 35.5T720-270ZM120-400h32q17-18 39-29t49-11q27 0 49 11t39 29h304q17-18 39-29t49-11q27 0 49 11t39 29h32v-80H120v80Zm720-80H120h720Z"/></svg></span></NavLink>
        <div className="nav-links">
            <NavLink className={({isActive}) => isActive ? 'active-link' : ''} to = '/vans'>Vans</NavLink>
            <NavLink className={({isActive}) => isActive ? 'active-link' : ''} to = '/host'>Host</NavLink>
            <NavLink className={({isActive}) => isActive ? 'active-link' : ''} to = '/about'>About</NavLink>
        </div>
    </nav>
  )
}
export default Header