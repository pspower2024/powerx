// src/utils/constants.js
export const EMPTY_FORM = {
  name: '',
  email: '',
  phone: '',
  location: '',
  title: '',
  summary: '',
  exp1Title: '',
  exp1Company: '',
  exp1Duration: '',
  exp1Desc: '',
  exp2Title: '',
  exp2Company: '',
  exp2Duration: '',
  exp2Desc: '',
  eduDegree: '',
  eduSchool: '',
  eduYear: '',
  skills: '',
}

export const DEMO_DATA = {
  name: 'Alexandra Chen',
  email: 'alex.chen@email.com',
  phone: '+1 (415) 555-0192',
  location: 'San Francisco, CA',
  title: 'Senior Product Designer',
  summary: 'Creative product designer with 7+ years crafting intuitive digital experiences for B2B and consumer products. Passionate about design systems, accessibility, and user research.',
  exp1Title: 'Senior Product Designer',
  exp1Company: 'Vercel Inc.',
  exp1Duration: '2021 – Present',
  exp1Desc: 'Led design for the dashboard and deployment pipeline, improving user activation by 34%. Built and maintained the internal design system across 8 product teams.',
  exp2Title: 'Product Designer',
  exp2Company: 'Figma',
  exp2Duration: '2018 – 2021',
  exp2Desc: 'Designed core editing features and the component library system. Collaborated cross-functionally with engineering and PM teams to ship 12 major features.',
  eduDegree: 'B.F.A. Interaction Design',
  eduSchool: 'California College of the Arts',
  eduYear: '2018',
  skills: 'Figma, Prototyping, Design Systems, User Research, Framer, HTML/CSS, Accessibility, Workshops',
}

export const FEATURES = [
  { icon: '🤖', title: 'AI-Powered Content', desc: 'Generate professional resume content, summaries, and cover letters with one click using advanced AI.' },
  { icon: '🎨', title: '3 Designer Templates', desc: 'Choose from Modern, Classic, or Minimal templates crafted by professional designers.' },
  { icon: '⚡', title: 'Live Preview', desc: 'See your changes reflected instantly in the preview pane as you type.' },
  { icon: '📄', title: 'PDF Export', desc: 'Download your polished resume as a pixel-perfect PDF ready to send to employers.' },
  { icon: '✍️', title: 'Cover Letter Generator', desc: 'Instantly generate a tailored cover letter matched to your experience and target role.' },
  { icon: '📱', title: 'Fully Responsive', desc: 'Edit and preview on any device — desktop, tablet, or mobile.' },
]

export const TEMPLATES = [
  { id: 'modern', name: 'Modern', emoji: '🌟', color: 'forest' },
  { id: 'classic', name: 'Classic', emoji: '📋', color: 'sky' },
  { id: 'minimal', name: 'Minimal', emoji: '⬜', color: 'rust' },
]