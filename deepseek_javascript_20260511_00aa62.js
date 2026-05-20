// src/components/Builder/PersonalInfoForm.jsx
export default function PersonalInfoForm({ formData, onUpdate }) {
  return (
    <div className="bg-white rounded-xl p-6 mb-4 border border-cream3">
      <h3 className="text-gold text-xs font-semibold tracking-wider uppercase mb-4">
        Personal Information
      </h3>
      
      <div className="grid md:grid-cols-2 gap-4">
        <div className="mb-4">
          <label className="text-ink2 text-xs font-medium mb-1 block">Full Name</label>
          <input
            type="text"
            className="input-field"
            value={formData.name}
            onChange={(e) => onUpdate('name', e.target.value)}
            placeholder="Alexandra Chen"
          />
        </div>
        
        <div className="mb-4">
          <label className="text-ink2 text-xs font-medium mb-1 block">Job Title</label>
          <input
            type="text"
            className="input-field"
            value={formData.title}
            onChange={(e) => onUpdate('title', e.target.value)}
            placeholder="Senior Product Designer"
          />
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-4">
        <div className="mb-4">
          <label className="text-ink2 text-xs font-medium mb-1 block">Email</label>
          <input
            type="email"
            className="input-field"
            value={formData.email}
            onChange={(e) => onUpdate('email', e.target.value)}
            placeholder="alex@email.com"
          />
        </div>
        
        <div className="mb-4">
          <label className="text-ink2 text-xs font-medium mb-1 block">Phone</label>
          <input
            type="tel"
            className="input-field"
            value={formData.phone}
            onChange={(e) => onUpdate('phone', e.target.value)}
            placeholder="+1 (415) 555-0192"
          />
        </div>
      </div>
      
      <div className="mb-4">
        <label className="text-ink2 text-xs font-medium mb-1 block">Location</label>
        <input
          type="text"
          className="input-field"
          value={formData.location}
          onChange={(e) => onUpdate('location', e.target.value)}
          placeholder="San Francisco, CA"
        />
      </div>
      
      <div>
        <label className="text-ink2 text-xs font-medium mb-1 block">Professional Summary</label>
        <textarea
          className="input-field resize-y min-h-[100px]"
          value={formData.summary}
          onChange={(e) => onUpdate('summary', e.target.value)}
          placeholder="Experienced professional with a passion for..."
          rows={4}
        />
      </div>
    </div>
  )
}