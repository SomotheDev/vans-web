// eslint-disable-next-line no-unused-vars
import React from 'react'
import '../styles/index.css'

const Home = () => {
  return (
    <div className='homepage'>
        <h1 className='home-title'>
            You got the travel plans, we have the travel vans.
        </h1>
        <p className="home-detail">
            Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.
        </p>
        <button className='find-van'>Find your van</button>
    </div>
  )
}

export default Home