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

export const nav = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

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
  perspectives: ['Enterprise IT', 'Software Engineering', 'Industrial Operations'],
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
    title: 'SSUWC Microsoft 365 Implementation & Staff Training',
    kicker: 'Digital Workplace Enablement',
    summary:
      'Supported Microsoft 365 implementation for the South Sudan Urban Water Corporation — setup, user support, staff training, and knowledge transfer. The goal was not simply to deploy software, but to help staff use digital tools effectively every day.',
    tags: ['Microsoft 365', 'Teams', 'Outlook', 'OneDrive', 'User Training', 'IT Support'],
    hue: 'from-[#3a7bff] to-[#8a5cff]',
  },
  {
    title: 'Water Billing & Revenue Management',
    kicker: 'Digitalizing Water Utility Operations',
    summary:
      'Built a Water Billing System as a web application and an offline-capable mobile app, so field staff can capture meter readings and work without connectivity, then sync to the central system. Covers customers, meters, readings, billing, payments, revenue tracking, reconciliation, and reporting — from requirements and workflow design to data quality, testing, and training.',
    tags: ['Laravel', 'React Native', 'Offline-First', 'SQLite', 'APIs', 'Billing', 'RBAC'],
    hue: 'from-[#00b3a4] to-[#1f6fff]',
  },
  {
    title: 'Offline Field Operations',
    kicker: 'Technology for Unreliable Connectivity',
    summary:
      'Workflows that let field personnel operate offline, store data locally, and synchronize with central systems when connectivity returns — with pending queues, duplicate prevention, conflict handling, and central validation.',
    tags: ['React Native', 'Expo', 'SQLite', 'APIs', 'Offline-First'],
    hue: 'from-[#ff8a3a] to-[#ff3a6e]',
  },
  {
    title: 'Enterprise Management Systems',
    kicker: 'Connecting People, Finance & Operations',
    summary:
      'Integrated platforms linking Finance → Procurement → Inventory → HR → Payroll → Projects → Budgets → Approvals → Reporting, with permissions, documents, transactions, and audit trails flowing across the organization.',
    tags: ['SaaS', 'Laravel', 'Database Architecture', 'RBAC', 'Workflow Design'],
    hue: 'from-[#b6e61c] to-[#1fae5b]',
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
    role: 'Chief Technology Officer',
    org: 'Miles Global Link Co. Ltd.',
    meta: 'Juba, South Sudan',
    summary:
      'Technical leadership for software and digital solutions across pharmacy, school, accounting, inventory, procurement, retail/POS, HR & payroll, billing, projects, and budgets.',
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
