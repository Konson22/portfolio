import portfolioImage from '../../assets/images/konbg.png'
import {FaDownload} from 'react-icons/fa'

export function About() {
  return (
    <div className="about-wraper">
        <div className="sidebar-image">
            <img className="rounded-circle" src={portfolioImage} alt="" />
        </div>
        <div className="mt-2 text-center">
            <h3>Kon Akech Kon</h3>
            <p> I'm a passionate Full Stack Developer from South Sudan, who wants to pursue a competitive and technical career as a Web Developer</p>
            <div className="mt-2">
              <a className="my-btn" href={process.env.PUBLIC_URL+'files/cv.pdf'} target='_blank' rel="noreferrer"><FaDownload /> Download My CV</a>
            </div>
        </div>
    </div>
  )
}
