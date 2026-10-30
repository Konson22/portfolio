import SiteLayout from '../Layouts/SiteLayout'
import Seo from '../components/Seo'
import Hero from '../components/Hero'
import { About, Education, Experience, Process, Services, Skills, Work } from '../components/Sections'

export default function Home() {
  return (
    <SiteLayout home>
      {({ ready }) => (
        <>
          <Seo
            title="Kon Akech — IT Engineer & Software Engineer in Juba, South Sudan"
            description="Kon Akech is an IT Engineer and Software Engineer in Juba, South Sudan, building web, mobile and offline-first business systems, Microsoft 365 solutions and IT infrastructure."
            type="profile"
          />
          <Hero ready={ready} />
          <About />
          <Services />
          <Work />
          <Experience />
          <Skills />
          <Process />
          <Education />
        </>
      )}
    </SiteLayout>
  )
}
