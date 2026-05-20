// src/components/Layout/Navbar.jsx
import { FileText, Sparkles } from 'lucide-react'

export default function Navbar({ setPage }) {
  return (
    <nav className="bg-ink sticky top-0 z-50 px-8 h-14 flex items-center justify-between">
      <div 
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => setPage('landing')}
      >
        <Sparkles className="w-5 h-5 text-gold" />
        <span className="font-serif text-gold text-lg font-semibold tracking-tight">
          ResuméAI
        </span>
      </div>
      
      <div className="flex items-center gap-6">
        <span className="text-white/65 text-sm cursor-pointer hover:text-white transition-colors">
          Features
        </span>
        <span className="text-white/65 text-sm cursor-pointer hover:text-white transition-colors">
          Templates
        </span>
        <button 
          onClick={() => setPage('builder')}
          className="bg-gold text-ink px-5 py-1.5 rounded-md text-xs font-semibold hover:bg-gold2 transition-all"
        >
          Start Free
        </button>
      </div>
    </nav>
  )
}