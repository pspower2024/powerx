// src/hooks/useForm.js
import { useState } from 'react'

export const useForm = (initialData) => {
  const [formData, setFormData] = useState(initialData)

  const updateField = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const updateMultipleFields = (updates) => {
    setFormData(prev => ({ ...prev, ...updates }))
  }

  const resetForm = () => {
    setFormData(initialData)
  }

  return {
    formData,
    updateField,
    updateMultipleFields,
    resetForm,
    setFormData,
  }
}