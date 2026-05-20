// src/components/Builder/BuilderLayout.jsx
import { useState, useRef } from 'react'
import Navbar from '../Layout/Navbar'
import FormPanel from './FormPanel'
import PreviewPanel from './PreviewPanel'
import Modal from '../UI/Modal'
import { useAI } from '../../hooks/useAI'
import { useForm } from '../../hooks/useForm'

export default function BuilderLayout({ 
  formData: initialFormData, 
  updateFormData, 
  template, 
  setTemplate, 
  setPage,
  showToast 
}) {
  const { formData, updateField, setFormData } = useForm(initialFormData)
  const [activeTab, setActiveTab] = useState('info')
  const resumeRef = useRef(null)
  
  const {
    aiOutput,
    aiLoading,
    coverLetter,
    showCover,
    setShowCover,
    handleAIResume,
    handleCoverLetter,
    handleImproveText,
  } = useAI(formData, showToast)

  const handleFieldUpdate = (field, value) => {
    updateField(field, value)
    updateFormData({ ...formData, [field]: value })
  }

  return (
    <>
      <Navbar setPage={setPage} />
      
      <div className="grid lg:grid-cols-2 min-h-[calc(100vh-56px)]">
        <FormPanel
          formData={formData}
          onUpdate={handleFieldUpdate}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          template={template}
          setTemplate={setTemplate}
          aiOutput={aiOutput}
          aiLoading={aiLoading}
          onAIResume={handleAIResume}
          onAICover={handleCoverLetter}
          onAIImprove={handleImproveText}
        />
        
        <PreviewPanel
          formData={formData}
          template={template}
          resumeRef={resumeRef}
          showToast={showToast}
        />
      </div>
      
      {showCover && (
        <Modal
          title="Your Cover Letter"
          onClose={() => setShowCover(false)}
          content={coverLetter}
          showToast={showToast}
        />
      )}
    </>
  )
}