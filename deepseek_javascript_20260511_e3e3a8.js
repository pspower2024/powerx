// src/components/UI/Toast.jsx
import { useEffect } from 'react'
import { X } from 'lucide-react'

export default function Toast({ message, onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000)
    return () => clearTimeout(timer)
  }, [onClose])

  return (
    <div className="fixed bottom-6 right-6 bg-ink text-white px-4 py-3 rounded-lg shadow-xl border-l-4 border-gold animate-slide-in z-50 flex items-center gap-3">
      <span className="text-sm">{message}</span>
      <button onClick={onClose} className="text-white/60 hover:text-white transition-colors">
        <X className="w-4 h-4" />
      </button>
    </div>
  )
}