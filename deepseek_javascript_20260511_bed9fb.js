// src/components/ResumeTemplates/ClassicTemplate.jsx
export default function ClassicTemplate({ data }) {
  const skills = data.skills ? data.skills.split(',').map(s => s.trim()).filter(Boolean) : []
  
  return (
    <div className="font-sans p-10">
      <div className="text-center">
        <div className="font-display text-3xl font-light text-ink tracking-wider uppercase">
          {data.name || 'Your Name'}
        </div>
        <div className="text-ink3 text-sm mt-1">{data.title || 'Job Title'}</div>
        <div className="flex justify-center gap-6 mt-3 text-ink3 text-xs flex-wrap">
          {data.email && <span>{data.email}</span>}
          {data.phone && <span>{data.phone}</span>}
          {data.location && <span>{data.location}</span>}
        </div>
      </div>
      
      <hr className="border-t-2 border-ink my-4" />
      <hr className="border-t border-cream3 mb-4" />
      
      {data.summary && (
        <>
          <div className="font-bold text-[11px] tracking-wider uppercase text-ink mb-2">
            Professional Summary
          </div>
          <p className="text-ink2 text-sm leading-relaxed mb-4">{data.summary}</p>
          <hr className="border-t border-cream3 mb-4" />
        </>
      )}
      
      {(data.exp1Title || data.exp1Company) && (
        <>
          <div className="font-bold text-[11px] tracking-wider uppercase text-ink mb-3">
            Professional Experience
          </div>
          
          {(data.exp1Title || data.exp1Company) && (
            <div className="mb-4">
              <div className="flex justify-between items-start flex-wrap gap-2">
                <div className="font-semibold text-sm">
                  {data.exp1Title} {data.exp1Company && `— ${data.exp1Company}`}
                </div>
                <div className="text-ink3 text-xs">{data.exp1Duration}</div>
              </div>
              {data.exp1Desc && <div className="text-ink2 text-xs mt-2 leading-relaxed">{data.exp1Desc}</div>}
            </div>
          )}
          
          {(data.exp2Title || data.exp2Company) && (
            <div className="mb-4">
              <div className="flex justify-between items-start flex-wrap gap-2">
                <div className="font-semibold text-sm">
                  {data.exp2Title} {data.exp2Company && `— ${data.exp2Company}`}
                </div>
                <div className="text-ink3 text-xs">{data.exp2Duration}</div>
              </div>
              {data.exp2Desc && <div className="text-ink2 text-xs mt-2 leading-relaxed">{data.exp2Desc}</div>}
            </div>
          )}
          
          <hr className="border-t border-cream3 mb-4" />
        </>
      )}
      
      {(data.eduDegree || data.eduSchool) && (
        <>
          <div className="font-bold text-[11px] tracking-wider uppercase text-ink mb-2">
            Education
          </div>
          <div className="flex justify-between items-start flex-wrap gap-2 mb-4">
            <div className="font-semibold text-sm">{data.eduDegree}</div>
            <div className="text-ink3 text-xs">{data.eduYear}</div>
          </div>
          <div className="text-ink3 text-xs mb-4">{data.eduSchool}</div>
          <hr className="border-t border-cream3 mb-4" />
        </>
      )}
      
      {skills.length > 0 && (
        <>
          <div className="font-bold text-[11px] tracking-wider uppercase text-ink mb-2">
            Skills
          </div>
          <div className="text-ink2 text-sm leading-relaxed">{skills.join('  ·  ')}</div>
        </>
      )}
    </div>
  )
}