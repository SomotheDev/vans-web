// eslint-disable-next-line no-unused-vars
import React from 'react'
import '../styles/index.css'

const About = () => {
  return (
    <div className='about-page'>
        <img src="https://images.unsplash.com/photo-1672061356504-60074e597c35?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNhZmFyaSUyMHZhbnxlbnwwfHwwfHx8MA%3D%3D" alt="image of about" />
        <div className="det">
            <h1 className='about-title'>
                Do not squeeze in a Sedan while you can relax in a van.
            </h1>
            <p>
                Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra)
            </p>
            <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
        </div>
        <div className="cta">
            <h3>Your destination is waiting. Your van is ready. </h3>
            <button className='cta-btn'>Explore your vans</button>
            
        </div>
    </div>
  )
}

export default About