import SiteLayout from '../Layouts/SiteLayout'
import Seo from '../components/Seo'
import { ProjectPage } from '../components/Project'
import { work } from '../data/content'

// The route only accepts slugs from content.js (see routes/web.php), so the
// project always exists here.
export default function Project({ slug }) {
  const project = work.find((w) => w.slug === slug)
  return (
    <SiteLayout>
      <Seo
        title={`${project.title} — Kon Akech`}
        description={project.overview?.[0] ?? project.summary}
        path={`/work/${project.slug}`}
        type="article"
      />
      <ProjectPage project={project} />
    </SiteLayout>
  )
}
