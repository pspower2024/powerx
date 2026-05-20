// src/components/Builder/TemplateSelector.jsx
import { TEMPLATES } from '../../utils/constants'

export default function TemplateSelector({ template, setTemplate }) {
  return (
    <div className="bg-white rounded-xl p-6 border border-cream3">
      <h3 className="text-gold text-xs font-semibold tracking-wider uppercase mb-4">
        Resume Template
      </h3>
      
      <div className="grid grid-cols-3 gap-3">
        {TEMPLATES.map((t) => (
          <button
            key={t.id}
            onClick={() => setTemplate(t.id)}
            className={`px-3 py-2 rounded-lg text-sm font-medium border-2 transition-all ${
              template === t.id 
                ? 'border-gold bg-amber-50 text-ink' 
                : 'border-cream3 bg-cream text-ink2 hover:border-gold'
            }`}
          >
            {t.emoji} {t.name}
          </button>
        ))}
      </div>
    </div>
  )
}