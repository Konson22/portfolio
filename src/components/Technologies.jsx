import {useState} from 'react'
import {FaHtml5, FaCss3, FaJs, FaBootstrap} from 'react-icons/fa'

export default function Technologies() {

  const [activePage, setActivePage] = useState('programming');

  const tools = (
    <div className="technologies-content">
      <div className="technology-card text-center">
        <div>
          <a href="https://postman.com" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="45" height="45"/> </a>   
        </div>
        <span>Postman</span>
      </div>
      <div className="technology-card text-center">
        <div>
          <a href="https://git-scm.com/" target="_blank" rel="noreferrer"> 
            <img src="https://img.icons8.com/color/48/000000/git.png" alt='' /> 
          </a> 
        </div>
        <span>Git & Github</span>
      </div>
      <div className="technology-card text-center">
        <div>
          <a href="https://www.jenkins.io" target="_blank" rel="noreferrer"> 
            <img src="https://www.vectorlogo.zone/logos/jenkins/jenkins-icon.svg" alt="jenkins" width="48" height="48"/> 
          </a> 
        </div>
        <span>Jenkins</span>
      </div>
    </div>
  )
  
  const languages = (
    <div className="language-content d-flex align-items-center">
      <div className="language-card text-center">
        <div className='language-image'>
          <img className='rounded-circle' src="data:image/png;base64,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" alt="postman" width="45" height="45"/> 
        </div>
        <span>English</span>
      </div>
      <div className="language-card text-center">
        <div className='language-image'>
          <img className='rounded-circle' src="https://qph.cf2.quoracdn.net/main-qimg-c628f557e989248eca1467b5ee0fd070" alt="postman" width="45" height="45"/> 
        </div>
        <span>Arabic</span>
      </div>
      <div className="language-card text-center">
        <div className='language-image'>
          <img className='rounded-circle' src="https://cdn.countryflags.com/thumbs/south-sudan/flag-400.png" alt="postman" width="45" height="45"/> 
        </div>
        <span>Dinka</span>
      </div>
    </div>
  )
  const programming = (
    <div className="technologies-content">
      <div className="technology-card text-center">
        <div>
          <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://img.icons8.com/color/48/000000/react-native.png" alt='' /> </a>
        </div>
        <span>React js</span>
      </div>
      <div className="technology-card text-center">
        <div>
          <a href="https://spring.io/projects/spring-boot" target="_blank" rel="noreferrer"> <img src="https://img.icons8.com/color/48/000000/spring-logo.png" alt='' /> </a> 
        </div>
        <span>spring</span>
      </div>
      <div className="technology-card text-center">
        <div>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://img.icons8.com/color/48/000000/javascript.png" alt='' /> </a> 
        </div>
        <span>JavaScript</span>
      </div>
      <div className="technology-card text-center">
        <div>
          <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://img.icons8.com/color/48/000000/html-5.png" alt=''  /> </a> 
        </div>
        <span>HTML5</span>
      </div>
      <div className="technology-card text-center">
        <div>
          <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://img.icons8.com/color/48/000000/css3.png" alt='' /> </a> 
        </div>
        <span>CSS3</span>
      </div>
      <div className="technology-card text-center">
        <div>
          <a href="https://getbootstrap.com" target="_blank" rel="noreferrer"> <img src="https://img.icons8.com/color/48/000000/bootstrap.png" alt='' /> </a> 
        </div>
        <span>Bootstrap</span>
      </div>
      <div className="technology-card text-center">
        <div>
          <a href="https://www.python.org" target="_blank" rel="noreferrer"> <img src="https://img.icons8.com/color/48/000000/python.png" alt='' /> </a> 
        </div>
        <span>Python</span>
      </div>
      <div className="technology-card text-center">
        <div>
          <a href="https://www.php.org" target="_blank" rel="noreferrer"> <img src="https://img.icons8.com/color/48/000000/material-ui.png" alt='' /> </a> 
        </div>
        <span>php</span>
      </div>
      <div className="technology-card text-center">
        <div>
          <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://img.icons8.com/color/48/000000/nodejs.png" alt='' /> </a> 
        </div>
        <span>Node js</span>
      </div>
      <div className="technology-card text-center">
        <div>
          <a href="https://expressjs.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40"/> </a>
        </div>
        <span>Express js</span>
      </div>
      <div className="technology-card text-center">
        <div>
          <a href="https://www.mysql.com/" target="_blank" rel="noreferrer"> <img src="https://img.icons8.com/fluent/50/000000/mysql-logo.png" alt='' /> </a>
        </div>
        <span>MySql</span>
      </div>
      <div className="technology-card text-center">
        <div>
          <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="48" height="48"/> </a> 
        </div>
        <span>mangoDb</span>
      </div>
      <div className="technology-card text-center">
        <div>
          <a href="https://firebase.google.com/" target="_blank" rel="noreferrer"> <img src="https://img.icons8.com/color/48/000000/firebase.png" alt='' /> </a> 
        </div>
        <span>Firebase</span>
      </div>
      <div className="technology-card text-center">
        <div>
          <a href="https://redux.js.org" target="_blank" rel="noreferrer"> <img src="https://img.icons8.com/color/48/000000/redux.png" alt='' /> </a>
        </div>
        <span>Redux</span>
      </div>
      <div className="technology-card text-center">
        <div>
          <a href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img src="https://img.icons8.com/color/48/000000/git.png" alt='' /> </a> 
        </div>
        <span>Git & Github</span>
      </div>
    </div>
  )
  // const programming = (
  //   <div className="technologies-content">
  //     <div className="technology-card text-center">
  //       <div>
  //         <FaHtml5 className='icon' />
  //       </div>
  //       <span>HTML</span>
  //     </div>
  //     <div className="technology-card text-center">
  //       <div>
  //         <FaCss3 className='icon' />
  //       </div>
  //       <span>CSS</span>
  //     </div>
  //     <div className="technology-card text-center">
  //       <div>
  //         <FaBootstrap className='icon' />
  //       </div>
  //       <span>HTML</span>
  //     </div>
  //     <div className="technology-card text-center">
  //       <div>
  //         <FaJs className='icon' />
  //       </div>
  //       <span>HTML</span>
  //     </div>
  //     <div className="technology-card text-center">
  //       <div>
  //         <FaHtml5 className='icon' />
  //       </div>
  //       <span>HTML</span>
  //     </div>
  //     <div className="technology-card text-center">
  //       <div>
  //         <FaCss3 className='icon' />
  //       </div>
  //       <span>CSS</span>
  //     </div>
  //     <div className="technology-card text-center">
  //       <div>
  //         <FaBootstrap className='icon' />
  //       </div>
  //       <span>HTML</span>
  //     </div>
  //     <div className="technology-card text-center">
  //       <div>
  //         <FaJs className='icon' />
  //       </div>
  //       <span>HTML</span>
  //     </div>
  //     <div className="technology-card text-center">
  //       <div>
  //         <FaHtml5 className='icon' />
  //       </div>
  //       <span>HTML</span>
  //     </div>
  //     <div className="technology-card text-center">
  //       <div>
  //         <FaCss3 className='icon' />
  //       </div>
  //       <span>CSS</span>
  //     </div>
  //     <div className="technology-card text-center">
  //       <div>
  //         <FaBootstrap className='icon' />
  //       </div>
  //       <span>HTML</span>
  //     </div>
  //     <div className="technology-card text-center">
  //       <div>
  //         <FaJs className='icon' />
  //       </div>
  //       <span>HTML</span>
  //     </div>
  //     <div className="technology-card text-center">
  //       <div>
  //         <FaCss3 className='icon' />
  //       </div>
  //       <span>CSS</span>
  //     </div>
  //     <div className="technology-card text-center">
  //       <div>
  //         <FaBootstrap className='icon' />
  //       </div>
  //       <span>HTML</span>
  //     </div>
  //     <div className="technology-card text-center">
  //       <div>
  //         <FaJs className='icon' />
  //       </div>
  //       <span>HTML</span>
  //     </div>
  //   </div>
  // )

  
  return (
    <div className="section-wraper technologies" id='skills'>
      <div className="heading-title text-center mb-3">
        <h2>Tools & <span className="rgba">Technologies</span></h2>
      </div>
      <div className="technologies-wraper">
        <div className="technologies-nav d-flex align-items-center">
          <span className={`technologies-nav-link btn btn-sm ${activePage === 'programming' && 'active'}`} onClick={() => setActivePage('programming')}>Programming</span>
          <span className={`technologies-nav-link btn btn-sm ${activePage === 'tools' && 'active'}`} onClick={() => setActivePage('tools')}>Tools</span>
          <span className={`technologies-nav-link btn btn-sm ${activePage === 'languages' && 'active'}`} onClick={() => setActivePage('languages')}>Languages</span>
        </div>
        <div className="mt-3">
          {activePage === 'tools' && tools}
          {activePage === 'languages' && languages}
          {activePage === 'programming' && programming}
        </div>
      </div>
    </div>
  )
}


export function ProgrammingSkills(){
  return(
    <div className="technologies-content">
      <div className="technology-card text-center">
        <div>
          <FaHtml5 className='icon' />
        </div>
        <span>HTML</span>
      </div>
      <div className="technology-card text-center">
        <div>
          <FaCss3 className='icon' />
        </div>
        <span>CSS</span>
      </div>
      <div className="technology-card text-center">
        <div>
          <FaBootstrap className='icon' />
        </div>
        <span>HTML</span>
      </div>
      <div className="technology-card text-center">
        <div>
          <FaJs className='icon' />
        </div>
        <span>HTML</span>
      </div>
      <div className="technology-card text-center">
        <div>
          <FaHtml5 className='icon' />
        </div>
        <span>HTML</span>
      </div>
      <div className="technology-card text-center">
        <div>
          <FaCss3 className='icon' />
        </div>
        <span>CSS</span>
      </div>
      <div className="technology-card text-center">
        <div>
          <FaBootstrap className='icon' />
        </div>
        <span>HTML</span>
      </div>
      <div className="technology-card text-center">
        <div>
          <FaJs className='icon' />
        </div>
        <span>HTML</span>
      </div>
      <div className="technology-card text-center">
        <div>
          <FaHtml5 className='icon' />
        </div>
        <span>HTML</span>
      </div>
      <div className="technology-card text-center">
        <div>
          <FaCss3 className='icon' />
        </div>
        <span>CSS</span>
      </div>
      <div className="technology-card text-center">
        <div>
          <FaBootstrap className='icon' />
        </div>
        <span>HTML</span>
      </div>
      <div className="technology-card text-center">
        <div>
          <FaJs className='icon' />
        </div>
        <span>HTML</span>
      </div>
      <div className="technology-card text-center">
        <div>
          <FaCss3 className='icon' />
        </div>
        <span>CSS</span>
      </div>
      <div className="technology-card text-center">
        <div>
          <FaBootstrap className='icon' />
        </div>
        <span>HTML</span>
      </div>
      <div className="technology-card text-center">
        <div>
          <FaJs className='icon' />
        </div>
        <span>HTML</span>
      </div>
    </div>
  )
}