export const SITE_NAME = 'Techatrax'
export const SITE_TAGLINE = 'AI Research, Development & Educational Institute'
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'

export const NAV_LINKS = [
  { label: 'Home',     href: '/' },
  { label: 'About',    href: '/about' },
  { label: 'Courses',  href: '/courses' },
  { label: 'Research', href: '/research' },
  { label: 'Blog',     href: '/blog' },
  { label: 'Contact',  href: '/contact' },
]

export const SOCIAL_LINKS = {
  twitter:  'https://twitter.com/techatrax',
  linkedin: 'https://linkedin.com/company/techatrax',
  github:   'https://github.com/techatrax',
  youtube:  'https://youtube.com/@techatrax',
}