import {FaFacebook, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub} from 'react-icons/fa'
import About from "./About";

export default function Sidebar() {
  return (
    <div class="app-sidebar text-white">
        <div class="app-sidebar-header">
            <About />
        </div>
        <div class="app-sidebar-content address-box">
            <div class="heading-title">
                <h5>Address & Contacts</h5>
            </div>
            <div class="d-flex justify-content-between mb-3">
                <strong>Gender:</strong>
                <span>Male</span>
            </div>
            <div class="d-flex justify-content-between mb-3">
                <strong>Age:</strong>
                <span>32</span>
            </div>
            <div class="d-flex justify-content-between mb-3">
                <strong>Recident:</strong>
                <span>Junduru Area</span>
            </div>
            <div class="d-flex justify-content-between mb-3">
                <strong>City:</strong>
                <span>Juba, S.Sudan</span>
            </div>
            <div class="d-flex justify-content-between mb-3">
                <strong>Phone:</strong>
                <span>(+211) 0920079070</span>
            </div>
            <div class="d-flex justify-content-between mb-2">
                <strong>E-mail:</strong>
                <span>konakech3@gmail.com</span>
            </div>
        </div>
        <div class="app-sidebar-content">
            <div class="heading-title">
                <h4>Languages</h4>
            </div>
            <div class="d-flex align-items-center justify-content-between">
                <div class="lang-content">
                    <div class="lang-box">
                        <img className='rounded-circle' src="data:image/png;base64,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" alt="postman" width="45" height="45"/> 
                    </div>
                    <span>English</span>
                </div>
                <div class="lang-content">
                    <div class="lang-box">
                        <img className='rounded-circle' src="https://qph.cf2.quoracdn.net/main-qimg-c628f557e989248eca1467b5ee0fd070" alt="postman" width="45" height="45"/> 
                    </div>
                    <span>Arabic</span>
                </div>
                <div class="lang-content">
                    <div class="lang-box">
                        <img className='rounded-circle' src="https://cdn.countryflags.com/thumbs/south-sudan/flag-400.png" alt="postman" width="45" height="45"/> 
                    </div>
                    <span>Dinka</span>
                </div>
            </div>
        </div>
        <div class="app-sidebar-content">
            <div class="heading-title">
                <h4>Tecnologies</h4>
            </div>
            <div className="tecnologies-wraper">
                <span className="tecnology-box">
                    <FaGithub />
                </span>
                <span className="tecnology-box">
                    <FaGithub />
                </span>
                <span className="tecnology-box">
                    <FaGithub />
                </span>
                <span className="tecnology-box">
                    <FaGithub />
                </span>
                <span className="tecnology-box">
                    <FaGithub />
                </span>
                <span className="tecnology-box">
                    <FaGithub />
                </span>
                <span className="tecnology-box">
                    <FaGithub />
                </span>
                <span className="tecnology-box">
                    <FaGithub />
                </span>
                <span className="tecnology-box">
                    <FaGithub />
                </span>
                <span className="tecnology-box">
                    <FaGithub />
                </span>
                <span className="tecnology-box">
                    <FaGithub />
                </span>
            </div>
        </div>
        <div class="app-sidebar-content">
            <div class="heading-title">
                <h4>Socail <span className="rgba">Media</span></h4>
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
                <div class="socail-media-box">
                    <FaGithub />
                </div>
            </div>
        </div>
    </div>
  )
}
