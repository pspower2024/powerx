// src/components/ResumeTemplates/MinimalTemplate.jsx
export default function MinimalTemplate({ data }) {
  const skills = data.skills ? data.skills.split(',').map(s => s.trim()).filter(Boolean) : []
  
  return (
    <div className="font-sans p-12">
      <div className="text-3xl font-bold text-ink tracking-tight">{data.name || 'Your Name'}</div>
      <div className="text-ink3 text-base font-light mt-1">{data.title || 'Job Title'}</div>
      <div className="flex gap-4 mt-3 text-ink3 text-xs flex-wrap">
        {data.email && <span>{data.email}</span>}
        {data.phone && <span>{data.phone}</span>}
        {data.location && <span>{data.location}</span>}
      </div>
      
      {data.summary && (
        <>
          <div className="h-px bg-ink/10 my-6" />
          <p className="text-ink2 text-sm leading-relaxed">{data.summary}</p>
        </>
      )}
      
      {(data.exp1Title || data.exp1Company) && (
        <>
          <div className="h-px bg-ink/10 my-6" />
          <div className="text-ink3 text-[11px] font-semibold tracking-wider uppercase mb-4">
            Experience
          </div>
          
          {(data.exp1Title || data.exp1Company) && (
            <div className="flex gap-4 mb-4">
              <div className="w-1.5 h-1.5 bg-gold rounded-full mt-1 flex-shrink-0" />
              <div>
                <div className="font-semibold text-sm">{data.exp1Title}</div>
                <div className="text-ink3 text-xs">
                  {[data.exp1Company, data.exp1Duration].filter(Boolean).join('  ·  ')}
                </div>
                {data.exp1Desc && <div className="text-ink2 text-xs mt-2 leading-relaxed">{data.exp1Desc}</div>}
              </div>
            </div>
          )}
          
          {(data.exp2Title || data.exp2Company) && (
            <div className="flex gap-4 mb-4">
              <div className="w-1.5 h-1.5 bg-gold rounded-full mt-1 flex-shrink-0" />
              <div>
                <div className="font-semibold text-sm">{data.exp2Title}</div>
                <div className="text-ink3 text-xs">
                  {[data.exp2Company, data.exp2Duration].filter(Boolean).join('  ·  ')}
                </div>
                {data.exp2Desc && <div className="text-ink2 text-xs mt-2 leading-relaxed">{data.exp2Desc}</div>}
              </div>
            </div>
          )}
        </>
      )}
      
      {(data.eduDegree || data.eduSchool) && (
        <>
          <div className="h-px bg-ink/10 my-6" />
          <div className="text-ink3 text-[11px] font-semibold tracking-wider uppercase mb-4">
            Education
          </div>
          <div className="flex gap-4">
            <div className="w-1.5 h-1.5 bg-gold rounded-full mt-1 flex-shrink-0" />
            <div>
              <div className="font-semibold text-sm">{data.eduDegree}</div>
              <div className="text-ink3 text-xs">
                {[data.eduSchool, data.eduYear].filter(Boolean).join('  ·  ')}
              </div>
            </div>
          </div>
        </>
      )}
      
      {skills.length > 0 && (
        <>
          <div className="h-px bg-ink/10 my-6" />
          <div className="text-ink3 text-[11px] font-semibold tracking-wider uppercase mb-3">
            Skills
          </div>
          <div className="flex flex-wrap gap-2">
            {skills.map((s, i) => (
              <span key={i} className="text-ink2 text-xs font-medium border-b border-gold pb-0.5">
                {s}
              </span>
            ))}
          </div>
        </>
      )}
    </div>
  )
}