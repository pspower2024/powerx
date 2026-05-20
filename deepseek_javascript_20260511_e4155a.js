// src/services/aiService.js
const ANTHROPIC_API_URL = 'https://api.anthropic.com/v1/messages'

const callAnthropicAPI = async (prompt) => {
  const apiKey = import.meta.env.VITE_ANTHROPIC_API_KEY
  
  if (!apiKey) {
    throw new Error('API key not configured. Please add VITE_ANTHROPIC_API_KEY to your .env file.')
  }

  const response = await fetch(ANTHROPIC_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: 'claude-3-sonnet-20240229',
      max_tokens: 1000,
      messages: [{ role: 'user', content: prompt }],
    }),
  })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.error?.message || `API error: ${response.status}`)
  }

  const data = await response.json()
  return data.content?.[0]?.text || 'Unable to generate content.'
}

export const generateResumeContent = async (formData) => {
  const prompt = `Write a professional resume summary (3-4 sentences) and improve the job descriptions for:
    Name: ${formData.name || 'a professional'}
    Title: ${formData.title || 'professional'}
    Experience 1: ${formData.exp1Desc || 'not specified'}
    Experience 2: ${formData.exp2Desc || 'not specified'}
    Skills: ${formData.skills || 'various'}
    
    Return format:
    SUMMARY: [summary paragraph]
    
    EXPERIENCE 1: [improved description with action verbs and metrics]
    
    EXPERIENCE 2: [improved description with action verbs and metrics]
    
    Make it professional, ATS-friendly, and impactful.`

  return callAnthropicAPI(prompt)
}

export const generateCoverLetter = async (formData) => {
  const prompt = `Write a professional cover letter (3 paragraphs) for ${formData.name || 'a candidate'} applying for a ${formData.title || 'professional'} position.
    Their background: ${formData.summary || formData.exp1Desc || 'experienced professional'}
    Skills: ${formData.skills || 'various skills'}
    
    Make it compelling, specific, and under 250 words. Include enthusiasm for the role and how their experience aligns with company needs.`

  return callAnthropicAPI(prompt)
}

export const improveText = async (formData) => {
  const prompt = `Improve these resume texts to be more professional, impactful, and ATS-friendly. Use strong action verbs and quantify where possible:
    
    Summary: ${formData.summary || '(none)'}
    Experience 1: ${formData.exp1Desc || '(none)'}
    Experience 2: ${formData.exp2Desc || '(none)'}
    
    Return improved versions labeled "Summary:", "Experience 1:", "Experience 2:".`

  return callAnthropicAPI(prompt)
}