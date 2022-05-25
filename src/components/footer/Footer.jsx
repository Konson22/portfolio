import React from 'react'

export default function Footer() {
  return (
    <div className='footer-wraper'>
        <div className="testimonial-wraper">
            <h3>What Peole Say About Me</h3>
        </div>
        <div className="form-wraper d-flex">
            <div className="form-body">
                <h4>Let's Get In Touch</h4>
                <p>I'm a passionate Full Stack Developer and technical career as a Web Developer I'm a passionate Full Stack Developer from South Sudan, who wants to pursue a competitive</p>
                <form>
                    <div className="input-wraper">
                        <input type='text' placeholder='Full Name' />
                    </div>
                    <div className="input-wraper">
                        <input type='text' placeholder='E-mail Address' />
                    </div>
                    <div className="input-wraper">
                        <textarea></textarea>
                    </div>
                </form>
            </div>
            <div className="form-text">
                <h4>Let's Get In Touch</h4>
                <p>I'm a passionate Full Stack Developer and technical career as a Web Developer I'm a passionate Full Stack Developer from South Sudan, who wants to pursue a competitive</p>
            </div>
        </div>
    </div>
  )
}
