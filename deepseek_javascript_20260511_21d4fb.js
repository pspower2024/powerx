// src/hooks/useToast.js
import { useState, useCallback } from 'react'

export const useToast = () => {
  const [toast, setToast] = useState('')

  const showToast = useCallback((message, duration = 3000) => {
    setToast(message)
    setTimeout(() => setToast(''), duration)
  }, [])

  return { toast, showToast }
}