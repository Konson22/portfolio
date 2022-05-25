import React from 'react'
import {FaCode, FaArrowRight} from 'react-icons/fa'


export default function Services() {
  return (
    <div class="section-wraper services" id="services">
        <div class="heading-title">
            <h2>My Services</h2>
        </div>
        <div className="services-wraper">
            {servicesList.map(service => (
                <div className="service-card" key={service.id}>
                    <div className="d-flex align-items-center">
                        {service.icon}
                        <h4>{service.title}</h4>
                    </div>
                    <p>{service.description}</p>
                    <div class="mt-2">
                        <button className='bordered-btn'>Learn More <FaArrowRight /></button>
                    </div>
                </div>
            ))}
        </div>
        {/* <div class="row">
            <div class="col-md-4">
                <div class="service-box">
                    <div className="d-flex align-items-center">
                        <FaCode />
                        <h4>Web Developement</h4>
                    </div>
                    <p>I'm a passionate Full Stack Developer and technical career as a Web Developer I'm a passionate Full Stack Developer from South Sudan, who wants to pursue a competitive</p>
                    <div class="mt-2">
                        <button>Learn More <i class="fa fa-arrow-right"></i></button>
                    </div>
                </div>
            </div>
        </div> */}
    </div>
  )
}


const servicesList = [
    {
        id:1,
        title:'Web Developement',
        description:`I'm a passionate Full Stack Developer and technical career as a Web Developer I'm a passionate Full Stack Developer from South Sudan, who wants to pursue a competitive`,
        icon:<FaCode className='icon' />
    },
    {
        id:2,
        title:'UI/UX Design',
        description:`I'm a passionate Full Stack Developer and technical career as a Web Developer I'm a passionate Full Stack Developer from South Sudan, who wants to pursue a competitive`,
        icon:<FaCode className='icon' />
    },
    {
        id:3,
        title:'Graphic Design',
        description:`I'm a passionate Full Stack Developer and technical career as a Web Developer I'm a passionate Full Stack Developer from South Sudan, who wants to pursue a competitive`,
        icon:<FaCode className='icon' />
    },
]