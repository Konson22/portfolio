import { About } from "./About";
// import Skills from "./Skills";


export function Sidebar() {
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
                <strong>Recident</strong>
                <span>Junduru Area</span>
            </div>
            <div class="d-flex justify-content-between mb-3">
                <strong>City</strong>
                <span>Juba, S.Sudan</span>
            </div>
            <div class="d-flex justify-content-between mb-3">
                <strong>Age</strong>
                <span>32</span>
            </div>
            <div class="d-flex justify-content-between mb-3">
                <strong>Phone</strong>
                <span>+211920079070</span>
            </div>
            <div class="d-flex justify-content-between mb-2">
                <strong>E-mail</strong>
                <span>konsonak@gmail.com</span>
            </div>
        </div>
        <div class="app-sidebar-content">
            <div class="heading-title">
                <h5>Languages</h5>
            </div>
            <div class="d-flex align-items-center justify-content-between">
                <div class="lang-box rounded-circle d-flex align-items-center justify-content-center">
                    <span>English</span>
                </div>
                <div class="lang-box rounded-circle d-flex align-items-center justify-content-center">
                    <span>Arabic</span>
                </div>
                <div class="lang-box rounded-circle d-flex align-items-center justify-content-center">
                    <span>Dinka</span>
                </div>
            </div>
        </div>
        <div class="app-sidebar-content">
            <div class="heading-title">
                <h5>Skills</h5>
            </div>
            <div class="skill-box">
                <span>HTML</span>
                <div class="skill-fill html"></div>
            </div>
            <div class="skill-box">
                <span>Css</span>
                <div class="skill-fill css"></div>
            </div>
            <div class="skill-box">
                <span>JavaScript</span>
                <div class="skill-fill js"></div>
            </div>
            <div class="skill-box">
                <span>React</span>
                <div class="skill-fill react"></div>
            </div>
        </div>
        {/* <Skills /> */}
        <div class="app-sidebar-content">
            <div class="heading-title">
                <h5>Socail Media</h5>
            </div>
            <div class="social-media-wraper d-flex justify-content-between align-items-center">
                <div class="socail-media-box">
                    <i class="fab fa-facebook"></i>
                </div>
                <div class="socail-media-box">
                    <i class="fab fa-instagram"></i>
                </div>
                <div class="socail-media-box">
                    <i class="fab fa-twitter"></i>
                </div>
                <div class="socail-media-box">
                    <i class="fab fa-linkedin"></i>
                </div>
                <div class="socail-media-box">
                    <i class="fab fa-youtube"></i>
                </div>
                <div class="socail-media-box">
                    <i class="fab fa-github"></i>
                </div>
            </div>
        </div>
    </div>
  )
}
