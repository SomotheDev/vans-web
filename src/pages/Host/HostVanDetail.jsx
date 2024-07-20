// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useParams , Link, Outlet} from 'react-router-dom'
import HostVansNav from '../../components/HostVansNav'

function HostVanDetail() {
    const params = useParams()
    const { id } = params
    const [van, setVan] = React.useState([])

    React.useEffect(() => {
        fetch(`/api/vans/${id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans))
    }, [id])

  return (
    <div className='h-screen'>
        <Link to='/host/vans'>&larr; Back to vans</Link>
        <div className="wrapper bg-slate-100">
            <div className=' p-3 pt-4 m-2 flex gap-4 h-[100px]'>
                <img className='w-24 h-28 rounded-md' src={van.imageUrl} alt={van.name} />
                <div className="flex flex-col justify-between ">
                    <p className='text-white text-center van-type simple selected rounded-md w-fit px-2'>{van.type}</p>
                    <h2 className='font-bold tracking-wider'>{van.name}</h2>
                    <p>${van.price}/day</p>
                </div>
            </div>
            <HostVansNav />
            <Outlet context={{van}}/>
        </div>
    </div>
  )
}

export default HostVanDetail