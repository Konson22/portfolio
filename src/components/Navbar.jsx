import React from 'react'
import {FaFacebook, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub, FaCode} from 'react-icons/fa'
import { FaRegUserCircle } from 'react-icons/fa'
  import {BsHouse} from 'react-icons/bs'
  import {FiFileText} from 'react-icons/fi'

export default function Navbar() {
  return (
    <nav class="navbar-container d-flex align-items-center justify-content-between">
        <div class="logo-wraper d-flex align-items-center">
            <span class="logo-text">Kon <span class="rgba">Akech</span></span>
        </div>
        <div class="links-wraper lg-screen">
            <ul class="nav">
                <li class="nav-items">
                    <a href="http://localhost:3000/#" class="nav-link" rel="noreferrer" >Home</a>
                </li>
                <li class="nav-items">
                    <a href="#about" class="nav-link" rel="noreferrer" >About Me</a>
                </li>
                <li class="nav-items">
                    <a href="#skills" class="nav-link" rel="noreferrer" >Skills</a>
                </li>
                <li class="nav-items">
                    <a href="#projects" class="nav-link" rel="noreferrer" >Projects</a>
                </li>
                <li class="nav-items">
                    <a href="#projects" class="nav-link" rel="noreferrer" >Resume</a>
                </li>
                <li class="nav-items">
                    <a href="#services" class="nav-link" rel="noreferrer" >Services</a>
                </li>
            </ul>
        </div>
        <div class="media-wraper d-flex laing-items-center">
            <a href="https://www.linkedin.com/in/kon-akech-10624b221/" target='_blank' rel="noreferrer" class="socail-media-box">
                <FaLinkedinIn />
            </a>
            <a  href='https://www.instagram.com/konsonakech' target='_blank' rel="noreferrer" class="socail-media-box">
                <FaInstagram />
            </a>
            <a  href='https://twitter.com/konsonak' target='_blank' rel="noreferrer" class="socail-media-box">
                <FaTwitter />
            </a>
            <a  href='https://facebook.com/koni.akech' target='_blank' rel="noreferrer" class="socail-media-box">
                <FaFacebook />
            </a>
            <a class="socail-media-box" href='https://github.com/Konson22' target='_blank' rel="noreferrer">
                <FaGithub />
            </a>
        </div>
    </nav>
  )
}


export function MobileNavbar(){
    return(
        <div className="mobile-navbar-wraper">
            <a href='/#' className="mobile-nav-item text-center">
                <BsHouse className='mobile-nav-icon' />
                <span className="moble-nav-link">Home</span>
            </a>
            <a href='/#about' className="mobile-nav-item text-center">
                <FaRegUserCircle className='mobile-nav-icon' />
                <span className="moble-nav-link">About</span>
            </a>
            <a href='/#skills' className="mobile-nav-item text-center">
                <FaCode className='mobile-nav-icon' />
                <span className="moble-nav-link">Skills</span>
            </a>
            <a href='/#services' className="mobile-nav-item text-center">
                <FiFileText className='mobile-nav-icon' />
                <span className="moble-nav-link">Services</span>
            </a>
            <a href='/#projects' className="mobile-nav-item text-center">
                <FiFileText className='mobile-nav-icon' />
                <span className="moble-nav-link">Projects</span>
            </a>
        </div>
    )
}