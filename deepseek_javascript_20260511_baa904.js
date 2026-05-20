// src/components/Landing/TemplatesShowcase.jsx
import { TEMPLATES } from '../../utils/constants'

export default function TemplatesShowcase({ setTemplate, setPage }) {
  const handleSelect = (templateId) => {
    setTemplate(templateId)
    setPage('builder')
  }

  return (
    <section className="py-20 px-4 bg-cream">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-gold text-xs font-semibold tracking-wider mb-2">TEMPLATES</div>
          <h2 className="font-serif text-4xl text-ink font-light">
            Three <em className="not-italic italic">stunning</em> designs
          </h2>
          <p className="text-ink3 text-base max-w-md mx-auto mt-3">
            Switch between templates instantly. All optimized for ATS scanners and human eyes alike.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {TEMPLATES.map((template) => (
            <div 
              key={template.id}
              onClick={() => handleSelect(template.id)}
              className="card p-6 cursor-pointer hover:shadow-xl transition-all"
            >
              <div className={`w-12 h-12 bg-${template.color}/10 rounded-xl flex items-center justify-center text-2xl mb-4`}>
                {template.emoji}
              </div>
              <h3 className="font-semibold text-ink mb-2">{template.name} Template</h3>
              <p className="text-ink3 text-sm leading-relaxed mb-4">
                {template.id === 'modern' && 'Dark header, sidebar layout. Bold and contemporary.'}
                {template.id === 'classic' && 'Clean lines, centered name, traditional structure.'}
                {template.id === 'minimal' && 'Pure typography, no frills. Let your words speak.'}
              </p>
              <div className="text-gold text-xs font-semibold">Use this template →</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}