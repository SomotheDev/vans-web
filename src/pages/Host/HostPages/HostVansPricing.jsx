// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useOutletContext } from 'react-router-dom'
const HostVansPricing = () => {
    const {van} = useOutletContext()
  return (
    <div className='flex px-4 py-3'>
        <p className='text-4xl font-semibold tracking-wider'>${van.price}/day</p>
    </div>
  )
}

export default HostVansPricing