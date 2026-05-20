// src/App.jsx
import { useState } from 'react'
import Navbar from './components/Layout/Navbar'
import Hero from './components/Landing/Hero'
import Features from './components/Landing/Features'
import HowItWorks from './components/Landing/HowItWorks'
import TemplatesShowcase from './components/Landing/TemplatesShowcase'
import CTASection from './components/Landing/CTASection'
import BuilderLayout from './components/Builder/BuilderLayout'
import Toast from './components/UI/Toast'
import { useToast } from './hooks/useToast'
import { DEMO_DATA } from './utils/constants'

function App() {
  const [page, setPage] = useState('landing')
  const [formData, setFormData] = useState(DEMO_DATA)
  const [template, setTemplate] = useState('modern')
  const { toast, showToast } = useToast()

  const loadDemo = () => {
    setFormData(DEMO_DATA)
    setPage('builder')
    showToast('Demo data loaded! ✨')
  }

  const updateFormData = (data) => {
    setFormData(data)
  }

  if (page === 'builder') {
    return (
      <>
        <BuilderLayout 
          formData={formData}
          updateFormData={updateFormData}
          template={template}
          setTemplate={setTemplate}
          setPage={setPage}
          showToast={showToast}
        />
        {toast && <Toast message={toast} onClose={() => showToast('')} />}
      </>
    )
  }

  return (
    <div className="min-h-screen bg-cream">
      <Navbar setPage={setPage} />
      <Hero setPage={setPage} loadDemo={loadDemo} />
      <Features />
      <HowItWorks />
      <TemplatesShowcase setTemplate={setTemplate} setPage={setPage} />
      <CTASection setPage={setPage} />
      {toast && <Toast message={toast} onClose={() => showToast('')} />}
    </div>
  )
}

export default App