import {FaGithub, FaLink} from 'react-icons/fa'


export default function Projects() {
  return (
    <div className="section-wraper projects" id="projects">
        <div className="heading-title text-center">
            <h2>Projects <span className="rgba">I've done</span></h2>
            <div className="project-eading-text text-center">
                <p>I build web applications with meaningfull for clients, here are some example bellow of what I have created</p>
            </div>
        </div>
        <div className="projects-wraper">
            {projectList.map((project, index) => (
                <div className="project-card" key={index}>
                    <div className="project-image lg">
                        <img src={project.image} alt="" />
                    </div>
                    <div className="project-text">
                        <div>
                            <h4>{project.title}</h4>
                            <p className='elips-text lg-scree l2 mx-2'> {project.technology}</p>
                            <div className="mt-2 d-flex">
                                <a href={project.url} target='_blank'  rel="noreferrer" className="my-btn btn btn-sm"><FaLink /> Link</a>
                                <a href={project.repo} target='_blank'  rel="noreferrer" className="mx-2 my-btn btn btn-sm">
                                    <FaGithub /> Repo
                                </a>
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
        title:'Social Market place',
        technology:`HTML, CSS, Material UI, React js, Node js, express js, mangodb`,
        image:`${process.env.PUBLIC_URL}/files/eco-app.png`,
        url:'https://community-space.herokuapp.com',
        repo:'https://github.com/Konson22/selepoint',
        col:6
    },
    {
        title:'Social Market place',
        technology:`HTML, CSS, Material UI, React js, Node js, express js, mangodb`,
        image:`${process.env.PUBLIC_URL}/files/eco-app2.png`,
        url:'https://community-space.herokuapp.com',
        repo:'https://github.com/konson22/test',
        col:6
    },
    {
        title:'Social Market place',
        technology:`HTML, CSS, Material UI, React js, Node js, express js, mangodb`,
        image:`${process.env.PUBLIC_URL}/files/project3.png`,
        url:'https://community-space.herokuapp.com',
        repo:'https://github.com/konson22/test',
        col:4
    },
    {
        title:'Social Market place',
        technology:`HTML, CSS, Material UI, React js, Node js, express js, mangodb`,
        image:`${process.env.PUBLIC_URL}/files/project4.jpeg`,
        url:'https://community-space.herokuapp.com',
        repo:'https://github.com/konson22/test',
        col:4
    }
]