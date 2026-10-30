<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
    <meta name="author" content="Kon Akech" />
    <meta name="theme-color" content="#0c0c0c" />
    <meta name="color-scheme" content="dark" />

    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    <link rel="manifest" href="/site.webmanifest" />

    {{-- Open Graph / social previews. Per-page tags come from resources/js/components/Seo.jsx. --}}
    <meta property="og:site_name" content="Kon Akech" />
    <meta property="og:image" content="https://konakech.com/og-image.jpg" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="Kon Akech — IT Engineer and Software Engineer, Juba, South Sudan" />
    <meta property="og:locale" content="en_US" />
    <meta property="profile:first_name" content="Kon" />
    <meta property="profile:last_name" content="Akech" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content="https://konakech.com/og-image.jpg" />

    @php
      $ssr = app(\Inertia\Ssr\SsrState::class)->setPage($page)->dispatch();
    @endphp
    @unless ($ssr)
      {{-- Without the SSR server, serve site-wide defaults; Seo.jsx replaces them by head-key. --}}
      <title>Kon Akech — IT Engineer &amp; Software Engineer in Juba, South Sudan</title>
      <meta data-inertia="description" name="description" content="Kon Akech is an IT Engineer and Software Engineer in Juba, South Sudan, building web, mobile and offline-first business systems, Microsoft 365 solutions and IT infrastructure." />
      <meta data-inertia="robots" name="robots" content="{{ $page['component'] === 'Application' ? 'noindex, nofollow' : 'index, follow, max-image-preview:large' }}" />
      <link data-inertia="canonical" rel="canonical" href="https://konakech.com{{ request()->getPathInfo() === '/' ? '/' : request()->getPathInfo() }}" />
      <meta data-inertia="og:type" property="og:type" content="profile" />
      <meta data-inertia="og:url" property="og:url" content="https://konakech.com{{ request()->getPathInfo() }}" />
      <meta data-inertia="og:title" property="og:title" content="Kon Akech — IT Engineer &amp; Software Engineer" />
      <meta data-inertia="og:description" property="og:description" content="I design, implement, and support digital systems that solve real operational problems — software, Microsoft 365, IT infrastructure and offline-first apps." />
      <meta data-inertia="twitter:title" name="twitter:title" content="Kon Akech — IT Engineer &amp; Software Engineer" />
      <meta data-inertia="twitter:description" name="twitter:description" content="I design, implement, and support digital systems that solve real operational problems." />
    @endunless

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Syne:wght@500;600;700;800&family=Manrope:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
    @if ($page['component'] === 'Home')
      {{-- The hero background is only used on the home page. --}}
      <link rel="preload" as="image" href="/images/hero-bg.webp" type="image/webp" />
    @endif

    <script type="application/ld+json">
      {
        "@@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Person",
            "@id": "https://konakech.com/#person",
            "name": "Kon Akech",
            "url": "https://konakech.com/",
            "image": "https://konakech.com/images/kon-1.webp",
            "jobTitle": ["IT Engineer", "Software Engineer"],
            "description": "IT Engineer and Software Engineer designing, implementing and supporting digital systems that solve real operational problems.",
            "email": "mailto:hello@konakech.com",
            "telephone": "+211920079070",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Juba",
              "addressCountry": "SS"
            },
            "worksFor": {
              "@type": "Organization",
              "name": "JICA — Project for Improvement of Water Supply Services in Juba"
            },
            "alumniOf": [
              { "@type": "CollegeOrUniversity", "name": "University of Juba" },
              { "@type": "EducationalOrganization", "name": "ALX Africa" }
            ],
            "knowsAbout": [
              "Software Engineering",
              "Laravel",
              "React",
              "React Native",
              "Offline-First Architecture",
              "Microsoft 365",
              "IT Infrastructure",
              "Networking",
              "Business Information Systems",
              "SaaS",
              "Digital Transformation"
            ]
          },
          {
            "@type": "WebSite",
            "@id": "https://konakech.com/#website",
            "url": "https://konakech.com/",
            "name": "Kon Akech",
            "inLanguage": "en",
            "publisher": { "@id": "https://konakech.com/#person" }
          },
          {
            "@type": "ProfilePage",
            "url": "https://konakech.com/",
            "name": "Kon Akech — IT Engineer & Software Engineer",
            "isPartOf": { "@id": "https://konakech.com/#website" },
            "mainEntity": { "@id": "https://konakech.com/#person" }
          }
        ]
      }
    </script>

    @viteReactRefresh
    @vite(['resources/css/app.css', 'resources/js/app.jsx'])
    @inertiaHead
  </head>
  <body>
    <noscript><style>#preloader { display: none !important; }</style></noscript>
    @inertia
  </body>
</html>
