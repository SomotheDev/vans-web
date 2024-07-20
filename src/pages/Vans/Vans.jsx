// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom'

const Vans = () => {
  const [vans, setVans] = React.useState([])
  React.useEffect(()=>{
    fetch('/api/vans')
      .then(res => res.json())
      .then(data => setVans(data.vans))
  },[])

  const vansList = vans.map(van=>(
    <div className="van-card" key ={van.id}>
      <Link to={`/vans/${van.id}`}>
        <img src={van.imageUrl} alt="" />
        <div className="details">
          <h4>{van.name}</h4>
          <span>${van.price}/day</span>
        </div>
      </Link>
      <span className={`van-type ${van.type} selected`}>{van.type}</span>
    </div>
  ))
  return ( 
    <main className='page-wrapper flex flex-col h-lvh'>
      <h1 className='text-4xl'>Explore our van options</h1>
      <div className='vans-page'>
        {vansList}
      </div>        
    </main>
  )
}

export default Vans