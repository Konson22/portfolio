import {FaDownload} from 'react-icons/fa'

export default function About() {
  return (
    <div className="about-wraper">
        <div className="sidebar-image">
            <img className="rounded-circle" src={`${process.env.PUBLIC_URL}/files/konbg.png`} alt="" />
        </div>
        <div className="mt-3 text-center">
            <h3>Kon Akech Kon</h3>
            <p> I'm a passionate Full Stack Developer from South Sudan, who wants to pursue a competitive and technical career as a Web Developer</p>
            <div className="mt-3">
              <a className="my-btn btn" href={process.env.PUBLIC_URL+'files/cv.pdf'} target='_blank' rel="noreferrer"><FaDownload /> Download My CV</a>
            </div>
        </div>
    </div>
  )
}
