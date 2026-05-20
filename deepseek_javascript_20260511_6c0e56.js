// src/components/Builder/FormPanel.jsx
import PersonalInfoForm from './PersonalInfoForm'
import ExperienceForm from './ExperienceForm'
import EducationForm from './EducationForm'
import SkillsForm from './SkillsForm'
import AITools from './AITools'
import TemplateSelector from './TemplateSelector'
import TabBar from '../UI/TabBar'

export default function FormPanel({
  formData,
  onUpdate,
  activeTab,
  setActiveTab,
  template,
  setTemplate,
  aiOutput,
  aiLoading,
  onAIResume,
  onAICover,
  onAIImprove,
}) {
  const tabs = [
    { id: 'info', label: '📋 Info' },
    { id: 'experience', label: '💼 Experience' },
    { id: 'educationskills', label: '🎓 Education & Skills' },
    { id: 'ai', label: '🤖 AI Tools' },
  ]

  return (
    <div className="bg-cream p-6 overflow-y-auto max-h-[calc(100vh-56px)]">
      <div className="max-w-xl mx-auto">
        <div className="mb-6">
          <h1 className="font-serif text-2xl text-ink font-normal">Build Your Resume</h1>
          <p className="text-ink3 text-sm">Fill in your details — preview updates live</p>
        </div>
        
        <TabBar tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
        
        {activeTab === 'info' && (
          <>
            <PersonalInfoForm formData={formData} onUpdate={onUpdate} />
            <SkillsForm formData={formData} onUpdate={onUpdate} />
          </>
        )}
        
        {activeTab === 'experience' && (
          <ExperienceForm formData={formData} onUpdate={onUpdate} />
        )}
        
        {activeTab === 'educationskills' && (
          <EducationForm formData={formData} onUpdate={onUpdate} />
        )}
        
        {activeTab === 'ai' && (
          <>
            <AITools
              onAIResume={onAIResume}
              onAICover={onAICover}
              onAIImprove={onAIImprove}
              aiLoading={aiLoading}
              aiOutput={aiOutput}
            />
            <TemplateSelector template={template} setTemplate={setTemplate} />
          </>
        )}
      </div>
    </div>
  )
}