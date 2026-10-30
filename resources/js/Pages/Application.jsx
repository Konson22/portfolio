import SiteLayout from '../Layouts/SiteLayout'
import Seo from '../components/Seo'
import { ApplicationPage } from '../components/Documents'
import { application } from '../data/content'

export default function Application() {
  return (
    <SiteLayout>
      {/* Pages addressed to one employer shouldn't turn up in search results. */}
      <Seo
        title={`${application.position} Application — Kon Akech`}
        description={`Application letter from Kon Akech for the ${application.position} position.`}
        path={`/application/${application.slug}`}
        type="article"
        noindex
      />
      <ApplicationPage />
    </SiteLayout>
  )
}
