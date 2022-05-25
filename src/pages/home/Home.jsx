import React from 'react'
import { Projects } from './Projects'
import Services from './Services'
import { Sidebar } from './Sidebar'
import './css/home.css'
import { FaArrowRight, FaRegEnvelope } from 'react-icons/fa'
import { About } from './About'
import Footer from '../../components/footer/Footer'


export default function Home() {
  return (
    <>
    <div className="app-wraper d-flex">
        <Sidebar />
        <div className="app-content">
            <header className="header-wraper d-flex align-items-center">
                <div className="background"></div>
                <div className="hero-wraper">
                    <h1>Discover My Amaizing Art</h1>
                    <p>The position seems to fit very well with my education, experience and career interest. According </p>
                    <div className="mt-4">
                        <button>Explore More <FaArrowRight /></button>
                        <button><FaRegEnvelope /> Contact me</button>
                    </div>
                </div>
                <div className="hero-image lg-screen"></div>
            </header>
            <div className="sm-screen">
                <About />
            </div>
            <div className="experience-content d-flex justify-content-between align-items-center" id="expreince">
                <div className="experience-box d-flex align-items-center">
                    <h4>2+</h4>
                    <span>Years Experience</span>
                </div>
                <div className="experience-box d-flex align-items-center">
                    <h4>21+</h4>
                    <span>Completed Projects</span>
                </div>
                <div className="experience-box d-flex align-items-center">
                    <h4>5</h4>
                    <span>Happy Clients</span>
                </div>
                <div className="experience-box d-flex align-items-center">
                    <h4>2+</h4>
                    <span>Happy Clients</span>
                </div>
            </div>
            <Services />
            <Projects />
            <Footer />
        </div>
    </div>
    </>
  )
}
