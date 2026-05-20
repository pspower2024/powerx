// src/components/Builder/ExperienceForm.jsx
export default function ExperienceForm({ formData, onUpdate }) {
  return (
    <>
      <div className="bg-white rounded-xl p-6 mb-4 border border-cream3">
        <h3 className="text-gold text-xs font-semibold tracking-wider uppercase mb-4">
          Experience 1
        </h3>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label className="text-ink2 text-xs font-medium mb-1 block">Job Title</label>
            <input
              type="text"
              className="input-field"
              value={formData.exp1Title}
              onChange={(e) => onUpdate('exp1Title', e.target.value)}
              placeholder="Senior Engineer"
            />
          </div>
          
          <div className="mb-4">
            <label className="text-ink2 text-xs font-medium mb-1 block">Company</label>
            <input
              type="text"
              className="input-field"
              value={formData.exp1Company}
              onChange={(e) => onUpdate('exp1Company', e.target.value)}
              placeholder="Acme Corp"
            />
          </div>
        </div>
        
        <div className="mb-4">
          <label className="text-ink2 text-xs font-medium mb-1 block">Duration</label>
          <input
            type="text"
            className="input-field"
            value={formData.exp1Duration}
            onChange={(e) => onUpdate('exp1Duration', e.target.value)}
            placeholder="Jan 2022 – Present"
          />
        </div>
        
        <div>
          <label className="text-ink2 text-xs font-medium mb-1 block">Description</label>
          <textarea
            className="input-field resize-y min-h-[100px]"
            value={formData.exp1Desc}
            onChange={(e) => onUpdate('exp1Desc', e.target.value)}
            placeholder="Led development of..."
            rows={4}
          />
        </div>
      </div>
      
      <div className="bg-white rounded-xl p-6 mb-4 border border-cream3">
        <h3 className="text-gold text-xs font-semibold tracking-wider uppercase mb-4">
          Experience 2
        </h3>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label className="text-ink2 text-xs font-medium mb-1 block">Job Title</label>
            <input
              type="text"
              className="input-field"
              value={formData.exp2Title}
              onChange={(e) => onUpdate('exp2Title', e.target.value)}
              placeholder="Engineer"
            />
          </div>
          
          <div className="mb-4">
            <label className="text-ink2 text-xs font-medium mb-1 block">Company</label>
            <input
              type="text"
              className="input-field"
              value={formData.exp2Company}
              onChange={(e) => onUpdate('exp2Company', e.target.value)}
              placeholder="Startup Inc"
            />
          </div>
        </div>
        
        <div className="mb-4">
          <label className="text-ink2 text-xs font-medium mb-1 block">Duration</label>
          <input
            type="text"
            className="input-field"
            value={formData.exp2Duration}
            onChange={(e) => onUpdate('exp2Duration', e.target.value)}
            placeholder="2019 – 2022"
          />
        </div>
        
        <div>
          <label className="text-ink2 text-xs font-medium mb-1 block">Description</label>
          <textarea
            className="input-field resize-y min-h-[100px]"
            value={formData.exp2Desc}
            onChange={(e) => onUpdate('exp2Desc', e.target.value)}
            placeholder="Designed and built..."
            rows={4}
          />
        </div>
      </div>
    </>
  )
}