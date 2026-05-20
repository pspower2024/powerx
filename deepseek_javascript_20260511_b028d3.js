// src/hooks/useAI.js
import { useState } from 'react'
import { generateResumeContent, generateCoverLetter, improveText } from '../services/aiService'

export const useAI = (formData, showToast) => {
  const [aiOutput, setAiOutput] = useState('')
  const [aiLoading, setAiLoading] = useState('')
  const [coverLetter, setCoverLetter] = useState('')
  const [showCover, setShowCover] = useState(false)

  const handleAIResume = async () => {
    setAiLoading('resume')
    setAiOutput('')
    try {
      const result = await generateResumeContent(formData)
      setAiOutput(result)
      showToast('Resume content generated! ✨')
    } catch (error) {
      setAiOutput('AI generation failed. Please try again.')
      showToast('Generation failed. Please try again.', 4000)
    }
    setAiLoading('')
  }

  const handleCoverLetter = async () => {
    setAiLoading('cover')
    try {
      const result = await generateCoverLetter(formData)
      setCoverLetter(result)
      setShowCover(true)
      showToast('Cover letter generated! 📝')
    } catch (error) {
      setCoverLetter('Cover letter generation failed. Please try again.')
      setShowCover(true)
      showToast('Generation failed. Please try again.', 4000)
    }
    setAiLoading('')
  }

  const handleImproveText = async () => {
    if (!formData.exp1Desc && !formData.summary) {
      showToast('Add some experience or summary text first.')
      return
    }
    setAiLoading('improve')
    setAiOutput('')
    try {
      const result = await improveText(formData)
      setAiOutput(result)
      showToast('Text improved! ✨')
    } catch (error) {
      setAiOutput('Could not improve text. Please try again.')
      showToast('Improvement failed. Please try again.', 4000)
    }
    setAiLoading('')
  }

  return {
    aiOutput,
    aiLoading,
    coverLetter,
    showCover,
    setShowCover,
    handleAIResume,
    handleCoverLetter,
    handleImproveText,
  }
}