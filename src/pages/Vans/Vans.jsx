// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link, useSearchParams } from 'react-router-dom'

const Vans = () => {
  const [vans, setVans] = React.useState([])
  React.useEffect(()=>{
    fetch('/api/vans')
      .then(res => res.json())
      .then(data => setVans(data.vans))
  },[])

  const [searchParams, setSearchParams] = useSearchParams()

  const typeFilter = searchParams.get('type')

  const filterVans = typeFilter ? vans.filter(van => van.type === typeFilter) : vans

  const vansList = filterVans.map(van=>(
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
    <main className='page-wrapper justify-center'>
      <h1 className='text-4xl'>Explore our van options</h1>
      <div className="flex items-center justify-center pt-4 gap-3">
        <button className={`${typeFilter === 'simple'? 'simple-selected':''} bg-slate-400 text-white hover:bg-[#E17654] hover:text-white p-1 px-8 rounded-md hover:underline underline-offset-4`} onClick={()=> setSearchParams({type: 'simple'})}>Simple</button>
        <button className={`${typeFilter === 'luxury'? 'luxury-selected':''} bg-slate-400 text-white hover:bg-[#161616] hover:text-white p-1 px-8 rounded-md hover:underline underline-offset-4`} onClick={()=> setSearchParams({type: 'luxury'})}>Luxury</button>
        <button className={`${typeFilter === 'rugged'? 'rugged-selected':''} bg-slate-400 text-white hover:bg-[#115E59] hover:text-white p-1 px-8 rounded-md hover:underline underline-offset-4 `} onClick={()=> setSearchParams({type: 'rugged'})}>Rugged</button>

        {typeFilter && <button className='p-1 px-8 rounded-md border-2 hover:underline underline-offset-4' onClick={()=> setSearchParams({})}>Clear</button>}
        
      </div>
      <div className='vans-page grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center place-items-center gap-4'>
        {vansList}
      </div>        
    </main>
  )
}

export default Vans