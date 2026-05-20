// src/components/Builder/SkillsForm.jsx
export default function SkillsForm({ formData, onUpdate }) {
  return (
    <div className="bg-white rounded-xl p-6 mb-4 border border-cream3">
      <h3 className="text-gold text-xs font-semibold tracking-wider uppercase mb-4">
        Skills
      </h3>
      
      <div>
        <label className="text-ink2 text-xs font-medium mb-1 block">
          Skills (comma separated)
        </label>
        <textarea
          className="input-field resize-y min-h-[80px]"
          value={formData.skills}
          onChange={(e) => onUpdate('skills', e.target.value)}
          placeholder="Figma, React, TypeScript, Leadership, Python, AWS"
          rows={3}
        />
        <p className="text-ink3 text-xs mt-2">
          Separate skills with commas for better display
        </p>
      </div>
    </div>
  )
}