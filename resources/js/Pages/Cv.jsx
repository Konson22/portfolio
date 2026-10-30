import SiteLayout from '../Layouts/SiteLayout'
import Seo from '../components/Seo'
import { CvPage } from '../components/Documents'

export default function Cv() {
  return (
    <SiteLayout>
      <Seo
        title="Curriculum Vitae — Kon Akech"
        description="CV of Kon Akech, IT Engineer and Software Engineer in Juba, South Sudan: MIS development, database management, reporting, system integration, and training."
        path="/cv"
        type="article"
      />
      <CvPage />
    </SiteLayout>
  )
}
