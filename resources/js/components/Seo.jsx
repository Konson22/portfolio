import { Head } from '@inertiajs/react'

const site = 'https://konakech.com'

// Per-page title and social tags. With SSR they are in the HTML the server sends;
// without it, app.blade.php serves site-wide defaults under the same head-keys,
// which these replace once the page loads.
export default function Seo({ title, description, path = '/', type = 'website', noindex = false }) {
  const url = `${site}${path}`
  return (
    <Head>
      <title>{title}</title>
      <meta head-key="description" name="description" content={description} />
      <meta head-key="robots" name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large'} />
      <link head-key="canonical" rel="canonical" href={url} />
      <meta head-key="og:type" property="og:type" content={type} />
      <meta head-key="og:url" property="og:url" content={url} />
      <meta head-key="og:title" property="og:title" content={title} />
      <meta head-key="og:description" property="og:description" content={description} />
      <meta head-key="twitter:title" name="twitter:title" content={title} />
      <meta head-key="twitter:description" name="twitter:description" content={description} />
    </Head>
  )
}
