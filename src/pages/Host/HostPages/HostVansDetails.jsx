// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useOutletContext } from 'react-router-dom'

function HostVansDetails() {

    const {van} = useOutletContext()
    return (
    <div className='flex flex-col px-4 py-3'>
        <p><span className='font-bold'>Name:</span> {van.name}</p>
        <p><span className='font-bold'>Category:</span> {van.type}</p>
        <p><span className='font-bold'>Description:</span> {van.description}</p>
        <p><span className='font-bold'>Visibility:</span> Public</p>
    </div>
  )
}

export default HostVansDetails