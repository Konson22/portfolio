import React from 'react'
import {FaPaperPlane} from 'react-icons/fa'


export default function Services() {
  return (
    <div class="section-wraper my-services d-flex align-items-center" id="services">
        <div className="services-content">
            <div className="service-image-wraper text-center">
                <div className="service-image">
                    <img src={process.env.PUBLIC_URL+'/files/web.png'} alt='' />
                </div>
                <p>Websites</p>
            </div>
            <div className="service-image-wraper text-center">
                <div className="service-image">
                    <img src={process.env.PUBLIC_URL+'/files/uiux.png'} alt='' />
                </div>
                <p>UI/UX</p>
            </div>
            <div className="service-image-wraper text-center">
                <div className="service-image">
                    <img src={process.env.PUBLIC_URL+'/files/custom.png'} alt='' />
                </div>
                <p>Custom Design</p>
            </div>
            <div className="service-image-wraper text-center">
                <div className="service-image">
                    <img src={process.env.PUBLIC_URL+'/files/ecommerce.png'} alt='' />
                </div>
                <p>E-commerce</p>
            </div>
        </div>
        <div className="services-text">
            <h1>Let's Build <span className="rgba">a meaningfull web application</span></h1>
            <p>I use web technologies I Specialize in full stack web developement, cloud deployment, API integration and automation</p>
            <div className="mt-3">
                <button className='my-btn btn'><FaPaperPlane /> Contact me</button>
            </div>
        </div>
    </div>
  )
}

