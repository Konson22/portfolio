import project1 from '../../assets/images/project1.png'
import project2 from '../../assets/images/3ee810bac4391546ef3cba9ee60a9b9f.jpeg'
import project3 from '../../assets/images/project3.png'
import project4 from '../../assets/images/project4.jpeg'
import {FaGithub, FaLink} from 'react-icons/fa'


export function Projects() {
  return (
    <div className="section-wraper projects">
        <div className="heading-title">
            <h2>My Projects</h2>
        </div>
        <div className="projects-wraper">
            {projectList.map(project => (
                <div className="project-card" id="projects">
                    <div className="project-image lg">
                        <img src={project.image} alt="" />
                    </div>
                    <div className="project-text">
                        <div>
                            <h4>{project.title}</h4>
                            <p className='elips-text lg-scree l2'>{project.description}</p>
                            <div className="mt-2 d-flex">
                                <button className="">
                                    <FaGithub /> 
                                </button>
                                <button className="">
                                    <FaLink />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}


const projectList = [
    {
        _id:1,
        title:'Social Market place',
        description:`I'm a passionate Full Stack Developer and technical career as a Web Developer I'm a passionate Full Stack Developer from South Sudan, who wants to pursue a competitive`,
        image:project1,
        col:6
    },
    {
        _id:2,
        title:'Social Market place',
        description:`I'm a passionate Full Stack Developer and technical career as a Web Developer I'm a passionate Full Stack Developer from South Sudan, who wants to pursue a competitive`,
        image:project2,
        col:6
    },
    {
        _id:3,
        title:'Social Market place',
        description:`I'm a passionate Full Stack Developer and technical career as a Web Developer I'm a passionate Full Stack Developer from South Sudan, who wants to pursue a competitive`,
        image:project3,
        col:4
    },
    {
        _id:4,
        title:'Social Market place',
        description:`I'm a passionate Full Stack Developer and technical career as a Web Developer I'm a passionate Full Stack Developer from South Sudan, who wants to pursue a competitive`,
        image:project4,
        col:4
    },
    {
        _id:5,
        title:'Social Market place',
        description:`I'm a passionate Full Stack Developer and technical career as a Web Developer I'm a passionate Full Stack Developer from South Sudan, who wants to pursue a competitive`,
        image:project4,
        col:4
    },
]