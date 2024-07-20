// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useOutletContext } from 'react-router-dom'
const HostVansPhotos = () => {

    const {van} = useOutletContext()
  return (
    <div className='flex px-4 py-3'>
        <img className='w-24 rounded-md' src={van.imageUrl} alt=""  />
    </div>
  )
}

export default HostVansPhotos