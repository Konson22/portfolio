import React from 'react'
import { FaArrowRight, FaPaperPlane } from 'react-icons/fa'

export default function Header() {
  return (
    <header className="header-wraper d-flex align-items-center">
        <div className="background"></div>
        <div className="hero-wraper">
            <h1>Discover My Amaizing Art</h1>
            <p className='h5'>I use web technologies I Specialize in full stack web developement, cloud deployment, API integration and automation</p>
            <div className="mt-4">
                <a className='my-btn btn' href='#projects'>My Work <FaArrowRight /></a>
                <button className='my-btn btn'><FaPaperPlane /> Contact me</button>
            </div>
        </div>
        <div className="hero-image lg-screen"></div>
    </header>
  )
}
