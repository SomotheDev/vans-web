// eslint-disable-next-line no-unused-vars
import React from 'react'

const Vans = () => {
  const [vans, setVans] = React.useState([])
  React.useEffect(()=>{
    fetch('/api/vans')
      .then(res => res.json())
      .then(data => setVans(data.vans))
  },[])

  const vansList = vans.map(van=>(
    <div className="van-card" key ={van.id}>
      <img src={van.imageUrl} alt="" />
      <div className="details">
        <h4>{van.name}</h4>
        <span>${van.price}/day</span>
      </div>
      <span className='type'>{van.type}</span>
    </div>
  ))
  return ( 
    <div className='vans-page'>
      {vans? vansList : <h1>Loading ...</h1>}
    </div>
  )
}

export default Vans