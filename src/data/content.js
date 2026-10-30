export const profile = {
  name: 'Kon Akech',
  roles: ['IT Engineer.', 'Software Engineer.', 'Technology Builder.'],
  intro:
    'I design, implement, and support digital systems that solve real operational problems.',
  location: 'Juba, South Sudan',
  current:
    'IT Engineer with the JICA Project for Improvement of Water Supply Services in Juba, supporting ICT and digital transformation for the South Sudan Urban Water Corporation (SSUWC).',
  email: 'hello@konakech.com',
  altEmail: 'konakech3@gmail.com',
  phone: '+211 920 079 070',
}

// Section links on the home page, which other pages prefix with '/' (see navHref),
// plus links to standalone pages.
export const nav = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'CV', href: '/cv/' },
  { label: 'Application', href: '/application/war-child-canada/' },
  { label: 'Contact', href: '#contact' },
]

export function navHref(href, home) {
  return home || href === '#contact' || href.startsWith('/') ? href : `/${href}`
}

export const marqueeWords = [
  'Software Engineering',
  'IT Infrastructure',
  'Microsoft 365',
  'Business Systems',
  'Offline-First Apps',
  'Networking',
  'Digital Transformation',
]

export const about = {
  title: 'Building technology around real operational problems',
  paragraphs: [
    'I am an IT and Software Engineer with experience across software development, information systems, IT infrastructure, Microsoft 365, networking, technical support, and technology leadership. My approach starts with understanding the operational problem before choosing the solution.',
    'I have worked on systems supporting water utility operations, billing and revenue management, Microsoft 365 adoption, finance, procurement, inventory, human resources, payroll, point of sale, and organizational management — often in environments where internet connectivity cannot be guaranteed.',
  ],
  stats: [
    { value: 3, suffix: '', label: 'Professional perspectives' },
    { value: 13, suffix: '+', label: 'Business domains served' },
    { value: 4, suffix: '', label: 'Featured system areas' },
  ],
}

export const services = [
  {
    title: 'Software Engineering',
    blurb: 'I design and develop web, mobile, desktop, and business applications.',
    items: ['Web & mobile apps', 'REST APIs', 'Database architecture', 'SaaS & multi-tenant', 'Multi-branch systems', 'Auth & RBAC', 'Offline-first & sync', 'Workflow automation'],
  },
  {
    title: 'IT Engineering & Infrastructure',
    blurb: 'The infrastructure organizations need for reliable daily operations.',
    items: ['Windows environments', 'LAN, Ethernet & Wi-Fi', 'TCP/IP networking', 'Routers & switches', 'Printers & workstations', 'Troubleshooting', 'Backup & recovery', 'End-user support'],
  },
  {
    title: 'Microsoft 365',
    blurb: 'Hands-on implementation, support, and staff training for modern collaboration.',
    items: ['Microsoft 365 setup', 'Teams & Outlook', 'OneDrive & SharePoint', 'Office applications', 'Account & access support', 'Staff training', 'User onboarding', 'Knowledge transfer'],
  },
  {
    title: 'Business Information Systems',
    blurb: 'Systems designed around business processes rather than isolated features.',
    items: ['Billing & revenue', 'Finance & accounting', 'Procurement & inventory', 'HR & payroll', 'Point of sale', 'Projects & budgets', 'Approval workflows', 'Reporting & dashboards'],
  },
]

export const work = [
  {
    slug: 'miles-global-softwares',
    title: 'Miles Global Softwares',
    kicker: 'Founder · Business Software Suite',
    client: 'Miles Global Softwares',
    type: 'SaaS product suite',

    platforms: [
      {
        type: 'website',
        label: 'Visit Website',
        access: 'public',
        url: 'https://milesoftwares.com',
      },
      {
        type: 'web-app',
        label: 'Miles Workspace',
        access: 'private',
        url: null,
      },
      {
        type: 'desktop-app',
        label: 'Pharmacy & Retail Desktop',
        access: 'private',
        url: null,
      },
      {
        type: 'mobile-app',
        label: 'Miles Pharmacy Mobile',
        access: 'private',
        url: null,
      },
    ],

    overview: [
      'I founded Miles Global Softwares, the software business of Miles Global Link Co. Ltd., to give growing businesses in South Sudan and the region proper business software: for the pharmacy on the corner, the wholesaler on the market road, the school, and the NGO. It is built for organisations that have outgrown spreadsheets and cash books but are not ready for a large-vendor rollout.',
      'Every product runs on one shared platform, Miles Workspace. An organisation gets its own address with branches and departments, one team list, and one set of permissions, then starts with a single application and adds others as it grows. Sales, purchases, and returns post to the accounts automatically, so nothing is typed twice.',
      'The suite is built around real operating conditions. Pharmacy and Retail desktop apps keep selling offline and sync when connected, and a pharmacy can run a single branch with no internet on the standalone offline edition. Controls such as separation of duties, reversal-only corrections, and an append-only audit log keep the books trustworthy.',
      'Alongside the products, Miles delivers custom ERPs, system integrations, ERP customisation, and web, desktop, and mobile applications, plus set-up, data loading, training, and support.',
    ],

    features: [
      {
        title: 'Pharmacy',
        items: [
          'Medicine inventory',
          'Batch & expiry tracking',
          'Sales & dispensing',
          'Prescriptions & controlled drugs',
          'Web, Windows, Android & iOS',
        ],
      },
      {
        title: 'Retail',
        items: ['Point of sale', 'Products & inventory', 'Purchasing', 'Sales reporting'],
      },
      {
        title: 'Finance',
        items: [
          'Double-entry ledger',
          'Invoices, bills & payments',
          'Bank reconciliation',
          'Tax, budgets & fixed assets',
          'Trial balance, P&L & balance sheet',
        ],
      },
      {
        title: 'Workspace & security',
        items: [
          'Single sign-on, passkeys & 2FA',
          'Per-application & per-branch roles',
          'Separation of duties',
          'Append-only audit log',
          'Time-limited support access',
        ],
      },
      {
        title: 'Coming next',
        items: ['Miles HR', 'Miles Logistics', 'Miles Restaurant'],
      },
    ],

    summary:
      'A business software suite I founded: pharmacy, retail, and finance ERPs on one shared workspace, with offline-capable desktop and mobile apps, per-branch permissions, and built-in accounting controls.',

    image: '/images/work/miles-global-softwares.png',

    tags: [
      'SaaS',
      'ERP',
      'Point of Sale',
      'Accounting',
      'Offline-First',
      'Multi-Branch',
      'RBAC',
      'Web · Desktop · Mobile',
    ],

    hue: 'from-[#2563eb] to-[#0f766e]',
  },

  {
    slug: 'catholic-diocese-of-wau',
    title: 'Catholic Diocese of Wau Management System',
    kicker: 'Customised SaaS · Miles Global Softwares',
    client: 'Catholic Diocese of Wau',
    type: 'Multi-branch SaaS platform',

    platforms: [
      {
        type: 'web-app',
        label: 'Management System',
        access: 'private',
        url: null,
      },
    ],

    overview: [
      'The Catholic Diocese of Wau runs its work through a headquarters and many branches, including schools. Finance, human resources, and operations each need their own tools, while headquarters needs one clear view across the organisation.',
      'The Diocese of Wau Management System is a customised SaaS platform developed under Miles Global Softwares, a brand of Miles Global Link Co. Ltd. It brings accounting, banking, budgets, payroll, procurement, assets, projects, and branch reporting into one workspace.',
      'Role-based access and approval workflows let headquarters oversee diocesan activities while schools and other branches manage their assigned responsibilities.',
    ],

    features: [
      {
        title: 'Finance',
        items: ['Accounting', 'Banking', 'Budgets', 'Consolidated reports'],
      },
      {
        title: 'People & operations',
        items: ['Human resources', 'Payroll', 'Procurement', 'Assets', 'Projects'],
      },
      {
        title: 'Education',
        items: ['Student fees', 'Academic records', 'Education Office oversight'],
      },
      {
        title: 'Governance',
        items: [
          'Role-based access',
          'Approval workflows',
          'Branch reporting',
          'Shared documents',
        ],
      },
    ],

    summary:
      'A customised multi-branch SaaS platform connecting finance, HR, payroll, procurement, assets, projects, education operations, approvals, and reporting across the Catholic Diocese of Wau.',

    image: '/images/work/catholic-diocese-wau-management.png',

    tags: [
      'SaaS',
      'Finance & Accounting',
      'HR & Payroll',
      'Procurement',
      'Multi-Branch',
      'Student Fees',
      'RBAC',
      'Approval Workflows',
    ],

    hue: 'from-[#f2b53a] to-[#b8325a]',
  },

  {
    slug: 'ssuwc-water-billing',
    title: 'SSUWC Water Billing System',
    kicker: 'Web & Offline-Capable Mobile Platform',
    client: 'South Sudan Urban Water Corporation (SSUWC)',
    type: 'Web platform + mobile app',

    platforms: [
      {
        type: 'web-app',
        label: 'Billing Platform',
        access: 'private',
        url: null,
      },
      {
        type: 'mobile-app',
        label: 'Meter Reading App',
        access: 'private',
        url: null,
      },
    ],

    overview: [
      'Water billing depends on accurate meter readings from the field, and field staff often work where there is no internet connection.',
      'The SSUWC Water Billing System combines a central web platform with a mobile app that works both online and offline. Field staff capture meter readings on the device and synchronize them when connectivity becomes available.',
      'The work covered requirements and workflow design, development, data quality, testing, deployment support, and staff training.',
    ],

    features: [
      {
        title: 'Customers & meters',
        items: ['Customer management', 'Meter management', 'Meter readings'],
      },
      {
        title: 'Billing & revenue',
        items: [
          'Billing',
          'Payments',
          'Revenue tracking',
          'Reconciliation',
          'Reporting',
        ],
      },
      {
        title: 'Field operations',
        items: [
          'Offline data capture',
          'Local device storage',
          'Data synchronisation',
        ],
      },
      {
        title: 'Platform',
        items: [
          'Laravel web platform',
          'React Native mobile app',
          'REST APIs',
          'Role-based access',
        ],
      },
    ],

    summary:
      'An integrated water billing and revenue management platform combining a central web application with an offline-capable mobile application for field meter-reading operations.',

    image: '/images/work/ssuwc-water-billing.png',

    tags: [
      'Laravel',
      'React Native',
      'SQLite',
      'Offline-First',
      'REST APIs',
      'RBAC',
    ],

    hue: 'from-[#00b3a4] to-[#1f6fff]',
  },

  {
    slug: 'ssuwc-website-portal',
    title: 'SSUWC Website & Headquarters Portal',
    kicker: 'Public Website & Private Organisational Portal',
    client: 'South Sudan Urban Water Corporation (SSUWC)',
    type: 'Website + management portal',

    platforms: [
      {
        type: 'website',
        label: 'Official Website',
        access: 'public',
        url: 'https://ssuwc.gov.ss',
      },
      {
        type: 'portal',
        label: 'Headquarters Portal',
        access: 'private',
        url: 'https://portal.ssuwc.gov.ss',
      },
    ],

    overview: [
      'SSUWC needed both an official digital presence for the public and a central workspace for internal coordination.',
      'The public website provides organisational information, news, services, contacts, and public updates.',
      'The private headquarters portal connects headquarters and water stations through centralised reporting, documents, projects, budgets, procurement, and administrative workflows.',
    ],

    features: [
      {
        title: 'Public website',
        items: [
          'Corporate information',
          'News & announcements',
          'Services',
          'Public information',
          'Contacts',
        ],
      },
      {
        title: 'Headquarters portal',
        items: [
          'Station reporting',
          'Document management',
          'Projects',
          'Budgets',
          'Procurement',
        ],
      },
      {
        title: 'Governance',
        items: [
          'Role-based access',
          'HQ oversight',
          'Station access',
          'Consolidated reporting',
        ],
      },
    ],

    summary:
      'The official SSUWC website and private headquarters portal, combining public communication with an internal digital workspace connecting headquarters and water stations.',

    image: '/images/work/ssuwc-website-portal.png',

    tags: [
      'Web Development',
      'Management Portal',
      'Multi-Station',
      'RBAC',
      'Reporting',
      'Projects',
    ],

    hue: 'from-[#0ea5e9] to-[#0f766e]',
  },

  {
    slug: 'ssuwc-microsoft-365',
    title: 'SSUWC Microsoft 365 Implementation & Staff Training',
    kicker: 'Digital Workplace Enablement',
    client: 'South Sudan Urban Water Corporation (SSUWC)',
    type: 'Implementation & training',

    platforms: [],

    overview: [
      'New software only helps an organisation if people actually use it. For SSUWC, rolling out Microsoft 365 meant setting up the tools and helping staff change how they work every day.',
      'I supported the implementation from setup through user support, staff training, and knowledge transfer.',
    ],

    features: [
      {
        title: 'Setup',
        items: ['Microsoft 365 setup', 'Account & access support', 'User onboarding'],
      },
      {
        title: 'Collaboration',
        items: ['Teams', 'Outlook', 'OneDrive & SharePoint', 'Office applications'],
      },
      {
        title: 'Adoption',
        items: ['Staff training', 'User support', 'Knowledge transfer'],
      },
    ],

    summary:
      'Supported Microsoft 365 implementation, user onboarding, staff training, support, and knowledge transfer for SSUWC.',

    image: '/images/work/ssuwc-microsoft-365.jpg',

    tags: [
      'Microsoft 365',
      'Teams',
      'Outlook',
      'OneDrive',
      'User Training',
      'IT Support',
    ],

    hue: 'from-[#3a7bff] to-[#8a5cff]',
  },

  {
    slug: 'royal-rest',
    title: 'Royal Rest Restaurant Platform',
    kicker: 'Website, Desktop POS & Waiter Mobile App',
    client: 'Royal Rest',
    type: 'Restaurant digital platform',

    platforms: [
      {
        type: 'website',
        label: 'Restaurant Website',
        access: 'public',
        url: 'https://royalrest.com.ss',
      },
      {
        type: 'desktop-app',
        label: 'Restaurant POS',
        access: 'private',
        url: null,
      },
      {
        type: 'mobile-app',
        label: 'Waiter App',
        access: 'private',
        url: null,
      },
    ],

    overview: [
      'Royal Rest combines its customer-facing website with digital tools for restaurant operations.',
      'The desktop POS handles sales, orders, payments, receipts, and restaurant operations, while the waiter mobile application allows service staff to manage tables and orders from the dining floor.',
    ],

    features: [
      {
        title: 'Website',
        items: ['Restaurant information', 'Digital presence'],
      },
      {
        title: 'Desktop POS',
        items: [
          'Orders',
          'Sales',
          'Payments',
          'Menu items',
          'Receipts',
          'Reporting',
        ],
      },
      {
        title: 'Waiter app',
        items: [
          'Table management',
          'Order taking',
          'Menu access',
          'Order updates',
          'Kitchen submission',
        ],
      },
    ],

    summary:
      'A restaurant digital platform combining a public website, desktop POS system, and waiter mobile application for managing customer service and day-to-day restaurant operations.',

    image: '/images/work/royal-rest-platform.png',

    tags: [
      'Restaurant POS',
      'Desktop App',
      'Mobile App',
      'Web Development',
      'Order Management',
      'Reporting',
    ],

    hue: 'from-[#f59e0b] to-[#dc2626]',
  },

  {
    slug: 'kushland',
    title: 'Kushland Website',
    kicker: 'Corporate Website',
    client: 'Kushland',
    type: 'Website',

    platforms: [
      {
        type: 'website',
        label: 'Visit Website',
        access: 'public',
        url: 'https://kushland.ss',
      },
    ],

    summary:
      'Designed and developed the Kushland corporate website, providing the organisation with a professional digital presence for presenting its business, services, and information online.',

    image: '/images/work/kushland.png',

    tags: ['Web Development', 'Corporate Website', 'Responsive Design'],

    hue: 'from-[#16a34a] to-[#0f766e]',
  },

  {
    slug: 'ellekun',
    title: 'ElleKun General Trading Website',
    kicker: 'Corporate & General Trading Website',
    client: 'ElleKun General Trading Co. Ltd.',
    type: 'Website',

    platforms: [
      {
        type: 'website',
        label: 'Visit Website',
        access: 'public',
        url: 'https://ellekun.com',
      },
    ],

    summary:
      'Designed and developed the ElleKun General Trading website to present the company’s trading, sourcing, procurement, supply, logistics, and international commerce capabilities.',

    image: '/images/work/ellekun.png',

    tags: [
      'Web Development',
      'General Trading',
      'Procurement',
      'Corporate Website',
    ],

    hue: 'from-[#061B3A] to-[#c89b3c]',
  },

  {
    slug: 'wijuay',
    title: 'Wijuay Website',
    kicker: 'Corporate Website',
    client: 'Wijuay',
    type: 'Website',

    platforms: [
      {
        type: 'website',
        label: 'Visit Website',
        access: 'public',
        url: 'https://wijuay.com',
      },
    ],

    summary:
      'Designed and developed the Wijuay website, creating a modern and responsive digital presence for the organisation.',

    image: '/images/work/wijuay.png',

    tags: ['Web Development', 'Corporate Website', 'Responsive Design'],

    hue: 'from-[#2563eb] to-[#7c3aed]',
  },

  {
    slug: '3kg-trading',
    title: '3KG Trading Website',
    kicker: 'Corporate & Trading Website',
    client: '3KG Trading',
    type: 'Website',

    platforms: [
      {
        type: 'website',
        label: 'Visit Website',
        access: 'public',
        url: 'https://3kgtrading.com',
      },
    ],

    summary:
      'Designed and developed the 3KG Trading website, providing a professional online presence for the company and its business activities.',

    image: '/images/work/3kg-trading.png',

    tags: ['Web Development', 'Trading', 'Corporate Website'],

    hue: 'from-[#ea580c] to-[#b91c1c]',
  },

  {
    slug: 'eastech',
    title: 'EASTECH Website & Portal',
    kicker: 'Education Website & Private Portal',
    client: 'EASTECH',
    type: 'Website + portal',

    platforms: [
      {
        type: 'website',
        label: 'Official Website',
        access: 'public',
        url: 'https://eastech.edu.ss',
      },
      {
        type: 'portal',
        label: 'Institution Portal',
        access: 'private',
        url: null,
      },
    ],

    summary:
      'Developed the EASTECH public website together with a private institutional portal, combining public-facing information with protected digital services for internal users.',

    image: '/images/work/eastech.png',

    tags: [
      'Education',
      'Web Development',
      'Private Portal',
      'Responsive Design',
    ],

    hue: 'from-[#2563eb] to-[#0891b2]',
  },

  {
    slug: 'thenaath-institute',
    title: 'Thenaath Institute Website & Portal',
    kicker: 'Education Website & Private Portal',
    client: 'Thenaath Institute',
    type: 'Website + portal',

    platforms: [
      {
        type: 'website',
        label: 'Official Website',
        access: 'public',
        url: 'https://thenaathinstitute.org',
      },
      {
        type: 'portal',
        label: 'Institution Portal',
        access: 'private',
        url: null,
      },
    ],

    summary:
      'Developed the Thenaath Institute website and private institutional portal, providing a public digital presence alongside protected services for institutional operations.',

    image: '/images/work/thenaath-institute.png',

    tags: [
      'Education',
      'Web Development',
      'Private Portal',
      'Responsive Design',
    ],

    hue: 'from-[#059669] to-[#2563eb]',
  },

  {
    slug: 'rlo-south-sudan',
    title: 'RLO South Sudan Website',
    kicker: 'Organisation Website',
    client: 'RLO South Sudan',
    type: 'Website',

    platforms: [
      {
        type: 'website',
        label: 'Visit Website',
        access: 'public',
        url: 'https://rlo-ss.org',
      },
    ],

    summary:
      'Designed and developed the RLO South Sudan website to provide the organisation with a professional and accessible online presence.',

    image: '/images/work/rlo-south-sudan.png',

    tags: ['Web Development', 'Organisation Website', 'Responsive Design'],

    hue: 'from-[#0f766e] to-[#2563eb]',
  },

  {
    slug: 'digiphabet',
    title: 'Digiphabet Website',
    kicker: 'Digital Platform & Website',
    client: 'Digiphabet',
    type: 'Website',

    platforms: [
      {
        type: 'website',
        label: 'Visit Website',
        access: 'public',
        url: 'https://digiphabet.com',
      },
    ],

    summary:
      'Designed and developed the Digiphabet website, delivering a modern and responsive digital platform for the organisation.',

    image: '/images/work/digiphabet.png',

    tags: ['Web Development', 'Digital Platform', 'Responsive Design'],

    hue: 'from-[#7c3aed] to-[#2563eb]',
  },

  {
    slug: 'ffpi-south-sudan',
    title: 'FFPI South Sudan Digital Platform',
    kicker: 'Website & Mobile Application',
    client: 'FFPI South Sudan',
    type: 'Website + mobile app',

    platforms: [
      {
        type: 'website',
        label: 'Official Website',
        access: 'public',
        url: 'https://ffpi-ss.org',
      },
      {
        type: 'mobile-app',
        label: 'Mobile Application',
        access: 'private',
        url: null,
      },
    ],

    summary:
      'Developed the FFPI South Sudan digital platform, combining a public website with a mobile application to support access to the organisation’s digital services and information.',

    image: '/images/work/ffpi-south-sudan.png',

    tags: [
      'Web Development',
      'Mobile App',
      'Digital Platform',
      'Responsive Design',
    ],

    hue: 'from-[#dc2626] to-[#f59e0b]',
  },
]

export const capabilities = [
  {
    title: 'Offline Field Operations',
    kicker: 'Technology for Unreliable Connectivity',
    summary:
      'Workflows that let field personnel operate offline, store data locally, and synchronize with central systems when connectivity returns — with pending queues, duplicate prevention, conflict handling, and central validation.',
    tags: ['React Native', 'Expo', 'SQLite', 'APIs', 'Offline-First'],
  },
  {
    title: 'Enterprise Management Systems',
    kicker: 'Connecting People, Finance & Operations',
    summary:
      'Integrated platforms linking Finance → Procurement → Inventory → HR → Payroll → Projects → Budgets → Approvals → Reporting, with permissions, documents, transactions, and audit trails flowing across the organization.',
    tags: ['SaaS', 'Laravel', 'Database Architecture', 'RBAC', 'Workflow Design'],
  },
]

export const experience = [
  {
    role: 'IT Engineer',
    org: 'JICA — Project for Improvement of Water Supply Services in Juba',
    meta: 'Juba, South Sudan · Present',
    summary: 'Supporting ICT systems and digital transformation initiatives associated with water utility operations.',
    points: ['Microsoft 365 implementation & staff training', 'Water Billing System implementation', 'IT infrastructure & networking', 'End-user technical support', 'Data management & system testing', 'Technical documentation, manuals & ICT reporting'],
  },
  {
    role: 'Founder & Chief Technology Officer',
    org: 'Miles Global Softwares · Miles Global Link Co. Ltd.',
    meta: 'Juba, South Sudan · milesoftwares.com',
    summary:
      'Founded Miles Global Softwares and lead its technology: software and digital solutions across pharmacy, school, accounting, inventory, procurement, retail/POS, HR & payroll, billing, projects, and budgets.',
    points: ['Software & SaaS architecture', 'Web and mobile applications', 'Multi-tenant & multi-branch systems', 'Offline-capable systems', 'Deployment, hosting & infrastructure', 'Security and access control'],
  },
  {
    role: 'Brewing Technician',
    org: 'Southern Sudan Beverages Limited (SSBL)',
    meta: 'Juba, South Sudan',
    summary:
      'Industrial production experience that still shapes how I build software: systems must work reliably within real operational processes, not just look good on a screen.',
    points: ['Industrial operations & production', 'Equipment operation & monitoring', 'Troubleshooting & quality control', 'Safety procedures & documentation'],
  },
]

export const skills = [
  { group: 'Development', items: ['PHP', 'Laravel', 'JavaScript', 'React', 'React Native', 'Expo', 'Inertia.js', 'HTML5', 'CSS', 'REST APIs', 'Git'] },
  { group: 'Databases', items: ['MySQL', 'SQLite', 'Relational Design', 'Data Modelling', 'Migrations', 'Data Migration', 'Offline Sync'] },
  { group: 'Architecture', items: ['SaaS', 'Multi-Tenant', 'Multi-Branch', 'REST APIs', 'Offline-First', 'Authentication', 'Authorization', 'RBAC'] },
  { group: 'Microsoft & IT', items: ['Microsoft 365', 'Teams', 'Outlook', 'OneDrive', 'SharePoint', 'Windows', 'Microsoft Office', 'User Administration'] },
  { group: 'Infrastructure', items: ['LAN', 'Ethernet', 'Wi-Fi', 'TCP/IP', 'Networking', 'Hardware', 'Printers', 'Workstations', 'Troubleshooting', 'Connectivity'] },
  { group: 'Deployment', items: ['Linux Hosting', 'Web Deployment', 'DNS', 'Domains', 'SSL/TLS', 'Database Deployment', 'Backups', 'Production Troubleshooting'] },
  { group: 'Business Systems', items: ['Billing', 'Accounting', 'Procurement', 'Inventory', 'HR', 'Payroll', 'POS', 'Projects', 'Budgets', 'Approvals', 'Reporting', 'Documents'] },
]

export const approach = [
  { title: 'Understand Before Building', text: 'I start with the problem, users, processes, constraints, and existing systems before deciding what technology to implement.' },
  { title: 'Build for the Environment', text: 'A sophisticated solution is useless if it depends on infrastructure users do not have. I design around real connectivity, hardware, and operational constraints.' },
  { title: 'Keep Systems Maintainable', text: 'Architecture that supports today’s requirement without unnecessary complexity — focused on security, data integrity, permissions, and long-term use.' },
  { title: 'Deliver Operational Value', text: 'Digital transformation is more than installing software: workflows, clean data, adoption, training, documentation, and continuous improvement.' },
]

export const education = [
  {
    title: 'Bachelor’s Degree in Information Technology',
    org: 'University of Juba',
    text: 'Information systems, software development, databases, computer networks, systems analysis, IT infrastructure, and IT management.',
  },
  {
    title: 'Software Engineering',
    org: 'ALX Africa',
    text: 'Programming, algorithms & data structures, backend development, databases, application architecture, Git, and collaborative development.',
  },
]

export const focus = ['Cloud infrastructure', 'Microsoft technologies', 'Enterprise architecture', 'SaaS platforms', 'Cybersecurity', 'Business systems', 'Offline-first apps', 'Digital transformation']

// Job application documents. The CV is the PDF at public/documents/kon-akech-cv.pdf,
// shown at /cv/; the letter at /application/<slug>/ prints as its own PDF.
export const cv = {
  title: 'Software Engineer · IT Engineer · Information Systems Specialist',
}

export const application = {
  slug: 'war-child-canada',
  position: 'MIS Specialist',
  date: '15 October 2026',
  recipient: ['The Recruitment Committee', 'War Child Canada'],
  subject: 'Application for the position of MIS Specialist',
  salutation: 'Dear Members of the Recruitment Committee,',
  paragraphs: [
    'I am writing to apply for the position of MIS Specialist with War Child Canada. I am an IT and Software Engineer based in Juba, holding a Bachelor’s Degree in Information Technology from the University of Juba and software engineering training from ALX Africa. My work centres on designing, implementing, and supporting management information systems that solve real operational problems, and I would welcome the opportunity to bring that experience to War Child Canada’s programmes.',
    'I currently work as an IT Engineer with the JICA Project for Improvement of Water Supply Services in Juba, supporting ICT and digital transformation for the South Sudan Urban Water Corporation (SSUWC). In this role I support the implementation of the SSUWC Water Billing System — a central web platform with an offline-capable mobile application that lets field staff capture meter readings without connectivity and synchronise them when a connection becomes available. My responsibilities include data management, data quality, system testing, end-user support, staff training, and the preparation of technical documentation, user manuals, and ICT reports.',
    'As Chief Technology Officer at Miles Global Link Co. Ltd., I led the architecture and development of business information systems covering accounting, budgets, HR and payroll, procurement, inventory, assets, projects, and reporting. This includes the Catholic Diocese of Wau Management System, a multi-branch platform that gives headquarters a consolidated view of finance, operations, and school activities while each branch manages its own data under role-based access and approval workflows. This work has given me practical experience in database design, data modelling and migration, REST API integration, access control, deployment, and backups.',
    'I understand that an MIS is only as useful as the data that goes into it and the people who use it. I have led Microsoft 365 implementation, user onboarding, and staff training at SSUWC, and I consistently design systems around the realities of the environment — unreliable connectivity, limited hardware, and users with varied levels of digital experience. I believe this combination of technical depth and field awareness would allow me to strengthen data collection, management, and reporting across War Child Canada’s programmes.',
    'My CV and portfolio of systems are attached and available at konakech.com. Copies of my degree certificate, academic transcripts, employment certificates, professional references, and identification can be provided on request. Thank you for considering my application; I would welcome the opportunity to discuss how I can contribute to your team.',
  ],
  closing: 'Yours sincerely,',
  supporting: [
    'University degree certificate and relevant professional certifications',
    'Academic transcripts',
    'Employment or experience certificates',
    'Professional references',
    'National ID or passport',
  ],
}
