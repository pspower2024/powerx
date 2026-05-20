// src/components/ResumeTemplates/ModernTemplate.jsx
export default function ModernTemplate({ data }) {
  const skills = data.skills ? data.skills.split(',').map(s => s.trim()).filter(Boolean) : []
  
  return (
    <div className="font-sans">
      <div className="bg-ink text-white p-8">
        <div className="font-serif text-3xl font-light tracking-tight">{data.name || 'Your Name'}</div>
        <div className="text-gold text-sm font-medium mt-1">{data.title || 'Job Title'}</div>
        <div className="flex gap-4 mt-4 text-xs text-white/60 flex-wrap">
          {data.email && <span>✉ {data.email}</span>}
          {data.phone && <span>📞 {data.phone}</span>}
          {data.location && <span>📍 {data.location}</span>}
        </div>
      </div>
      
      <div className="grid md:grid-cols-[1fr,2fr]">
        <div className="bg-cream2 p-6">
          {skills.length > 0 && (
            <>
              <div className="text-gold text-[11px] font-bold tracking-wider uppercase mb-3 border-b border-cream3 pb-2">
                Skills
              </div>
              <div className="mb-6 flex flex-wrap gap-1">
                {skills.map((s, i) => (
                  <span key={i} className="bg-cream text-ink2 px-2 py-1 rounded text-xs font-medium">
                    {s}
                  </span>
                ))}
              </div>
            </>
          )}
          
          {(data.eduDegree || data.eduSchool) && (
            <>
              <div className="text-gold text-[11px] font-bold tracking-wider uppercase mb-3 border-b border-cream3 pb-2">
                Education
              </div>
              <div className="mb-6">
                <div className="font-semibold text-sm">{data.eduDegree || 'Degree'}</div>
                <div className="text-ink3 text-xs">{data.eduSchool || 'School'}</div>
                {data.eduYear && <div className="text-ink3 text-xs">{data.eduYear}</div>}
              </div>
            </>
          )}
        </div>
        
        <div className="p-6">
          {data.summary && (
            <>
              <div className="text-gold text-[11px] font-bold tracking-wider uppercase mb-3 border-b border-cream3 pb-2">
                Summary
              </div>
              <p className="text-ink2 text-sm leading-relaxed mb-6">{data.summary}</p>
            </>
          )}
          
          {(data.exp1Title || data.exp1Company) && (
            <>
              <div className="text-gold text-[11px] font-bold tracking-wider uppercase mb-3 border-b border-cream3 pb-2">
                Experience
              </div>
              
              {(data.exp1Title || data.exp1Company) && (
                <div className="mb-4">
                  <div className="font-semibold text-sm">{data.exp1Title || 'Title'}</div>
                  <div className="text-ink3 text-xs">
                    {[data.exp1Company, data.exp1Duration].filter(Boolean).join(' · ')}
                  </div>
                  {data.exp1Desc && <div className="text-ink2 text-xs mt-2 leading-relaxed">{data.exp1Desc}</div>}
                </div>
              )}
              
              {(data.exp2Title || data.exp2Company) && (
                <div className="mb-4">
                  <div className="font-semibold text-sm">{data.exp2Title || 'Title'}</div>
                  <div className="text-ink3 text-xs">
                    {[data.exp2Company, data.exp2Duration].filter(Boolean).join(' · ')}
                  </div>
                  {data.exp2Desc && <div className="text-ink2 text-xs mt-2 leading-relaxed">{data.exp2Desc}</div>}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}