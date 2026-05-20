// src/components/Builder/EducationForm.jsx
export default function EducationForm({ formData, onUpdate }) {
  return (
    <div className="bg-white rounded-xl p-6 mb-4 border border-cream3">
      <h3 className="text-gold text-xs font-semibold tracking-wider uppercase mb-4">
        Education
      </h3>
      
      <div className="grid md:grid-cols-2 gap-4">
        <div className="mb-4">
          <label className="text-ink2 text-xs font-medium mb-1 block">Degree</label>
          <input
            type="text"
            className="input-field"
            value={formData.eduDegree}
            onChange={(e) => onUpdate('eduDegree', e.target.value)}
            placeholder="B.S. Computer Science"
          />
        </div>
        
        <div className="mb-4">
          <label className="text-ink2 text-xs font-medium mb-1 block">Year</label>
          <input
            type="text"
            className="input-field"
            value={formData.eduYear}
            onChange={(e) => onUpdate('eduYear', e.target.value)}
            placeholder="2020"
          />
        </div>
      </div>
      
      <div>
        <label className="text-ink2 text-xs font-medium mb-1 block">School</label>
        <input
          type="text"
          className="input-field"
          value={formData.eduSchool}
          onChange={(e) => onUpdate('eduSchool', e.target.value)}
          placeholder="Stanford University"
        />
      </div>
    </div>
  )
}