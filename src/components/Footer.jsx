import React from 'react'
import { FaPaperPlane } from 'react-icons/fa'


export default function Footer() {
  return (
    <div className="footer-wraper" id='contact'>
    <div className="form-wraper d-flex">
        <div className="form-text">
            <h4>Let's Get In Touch</h4>
            <p>I'm a passionate Full Stack Developer and technical career as a Web Developer I'm a passionate Full Stack Developer from South Sudan, who wants to pursue a competitive</p>
        </div>
        <div className="form-body">
            <h4>Let's Get In Touch</h4>
            <form>
                <div className="input-wraper">
                    <input type='text' placeholder='Full Name' />
                </div>
                <div className="input-wraper">
                    <input type='text' placeholder='E-mail Address' />
                </div>
                <div className="input-wraper">
                    <textarea placeholder='Write message...'></textarea>
                </div>
                <div className="mt-3">
                    <button className="btn my-btn"><FaPaperPlane /> Send</button>
                </div>
            </form>
        </div>
    </div>
    </div>
  )
}
