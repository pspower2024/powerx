// src/components/Builder/PreviewPanel.jsx
import { Download } from 'lucide-react'
import ModernTemplate from '../ResumeTemplates/ModernTemplate'
import ClassicTemplate from '../ResumeTemplates/ClassicTemplate'
import MinimalTemplate from '../ResumeTemplates/MinimalTemplate'
import PDFExport from '../PDF/PDFExport'

export default function PreviewPanel({ formData, template, resumeRef, showToast }) {
  const renderTemplate = () => {
    switch(template) {
      case 'classic':
        return <ClassicTemplate data={formData} />
      case 'minimal':
        return <MinimalTemplate data={formData} />
      default:
        return <ModernTemplate data={formData} />
    }
  }

  const handleDownload = () => {
    PDFExport(resumeRef.current, formData.name || 'Resume', showToast)
  }

  return (
    <div className="bg-ink p-6 overflow-y-auto max-h-[calc(100vh-56px)] sticky top-14">
      <div className="flex justify-between items-center mb-6">
        <div className="text-white/40 text-xs font-semibold tracking-wider uppercase">
          Live Preview
        </div>
        <button 
          onClick={handleDownload}
          className="bg-gold text-ink px-5 py-2 rounded-md text-sm font-semibold hover:bg-gold2 transition-all flex items-center gap-2"
        >
          <Download className="w-4 h-4" />
          PDF
        </button>
      </div>
      
      <div className="bg-white rounded-lg shadow-xl overflow-hidden" ref={resumeRef}>
        {renderTemplate