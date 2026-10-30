import SiteLayout from '../Layouts/SiteLayout'
import Seo from '../components/Seo'
import { WorkIndexPage } from '../components/Project'

export default function WorkIndex() {
  return (
    <SiteLayout>
      <Seo
        title="All Projects — Kon Akech"
        description="Management systems, portals, mobile apps, and websites built by Kon Akech for organisations across South Sudan."
        path="/work"
      />
      <WorkIndexPage />
    </SiteLayout>
  )
}
