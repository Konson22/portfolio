import React from 'react'
import {FaFacebook, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub} from 'react-icons/fa'
import './css/navbar.css'


export default function Navbar() {
  return (
    <nav class="navbar-container d-flex align-items-center justify-content-between">
        <div class="logo-wraper d-flex align-items-center">
            <span class="logo-text"><span class="colored">K</span>onson <span class="colored">Ak</span></span>
        </div>
        <div class="links-wraper">
            <ul class="nav">
                <li class="nav-items">
                    <a href="#" class="nav-link">Home</a>
                </li>
                <li class="nav-items">
                    <a href="#about" class="nav-link">About Me</a>
                </li>
                <li class="nav-items">
                    <a href="#skills" class="nav-link">Skills</a>
                </li>
                <li class="nav-items">
                    <a href="#projects" class="nav-link">Projects</a>
                </li>
                <li class="nav-items">
                    <a href="#projects" class="nav-link">Resume</a>
                </li>
                <li class="nav-items">
                    <a href="#projects" class="nav-link">Services</a>
                </li>
                <li class="nav-items">
                    <a href="#" class="nav-link">Blog</a>
                </li>
            </ul>
        </div>
        <div class="media-wraper d-flex laing-items-center">
            <div class="socail-media-box">
                <FaLinkedinIn />
            </div>
            <div class="socail-media-box">
                <FaInstagram />
            </div>
            <div class="socail-media-box">
                <FaTwitter />
            </div>
            <div class="socail-media-box">
                <FaFacebook />
            </div>
            {/* <div class="socail-media-box">
                <FaFacebook />
            </div> */}
            <div class="socail-media-box">
                <FaGithub />
            </div>
        </div>
    </nav>
  )
}
