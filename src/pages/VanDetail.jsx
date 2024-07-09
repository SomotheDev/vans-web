// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useParams, Link } from 'react-router-dom'

const VanDetail = () => {
    const params = useParams()
    const {id} = params
    const[van, letVan] = React.useState(null)
    React.useEffect(()=>{
        fetch(`/api/vans/${id}`)
            .then(res => res.json())
            .then(data => letVan(data.vans))
    },[id])
  return (
    <div >
        {van ? 
            (<div className = 'vanDetail-card'>
                <div className="back-to-vans">
                    <Link to = '/vans'> &larr; Back to vans </Link>
                </div>
                <img src={van.imageUrl} alt="" />
                <div className="details">
                    <h4>{van.name}</h4>
                    <h6>${van.price}/day</h6>
                </div>
                <h6 className={`vanDetail-type ${van.type} selected`}>{van.type}</h6>
                <p>{van.description}</p>
                <button className={`van-det ${van.type}`}>Rent this van</button> 
            </div>
        ) : <h1>loading van ... </h1>}  
    </div>
  )
}

export default VanDetail