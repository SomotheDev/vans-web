// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom'

function Vans() {
  const [van, setVans] = React.useState([])
  React.useEffect(() => {
    fetch('/api/host/vans/')
      .then(res => res.json())
      .then(data => setVans(data.vans)) 
  }, [])

  const hostVansList = van.map(van => (
    <div className="grid grid-cols-[90px_1fr] bg-slate-100" key={van.id}>
      <Link to={`/host/vans/${van.id}`}>
        <img className="w-24" src={van.imageUrl} alt="" />
      </Link>
      <div className="flex flex-col align-middle justify-around ">
        <h4 className='text-xl font-bold'>{van.name}</h4>
        <p>${van.price}/day</p>
      </div>
    </div>
  ))

  return (

    <div className='flex flex-col align-center gap-2 flex-wrap h-lvh'>
      <h1 className='text-4xl font-semibold tracking-wider'>Your listed vans</h1>
      {hostVansList}
    </div>
  )
}

export default Vans