// src/components/Builder/AITools.jsx
import { Sparkles, FileText, Wand2 } from 'lucide-react'
import Spinner from '../UI/Spinner'

export default function AITools({ onAIResume, onAICover, onAIImprove, aiLoading, aiOutput }) {
  return (
    <div className="bg-white rounded-xl p-6 mb-4 border border-cream3">
      <h3 className="text-gold text-xs font-semibold tracking-wider uppercase mb-2">
        AI Content Generator
      </h3>
      <p className="text-ink3 text-sm mb-4">
        Use AI to generate polished resume content based on your inputs.
      </p>
      
      <div className="grid gap-3">
        <button 
          onClick={onAIResume} 
          disabled={!!aiLoading}
          className="bg-forest text-white px-4 py-3 rounded-lg text-sm font-semibold hover:bg-forest/80 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {aiLoading === 'resume' ? <Spinner /> : <Sparkles className="w-4 h-4" />}
          {aiLoading === 'resume' ? 'Generating...' : '🤖 Generate Resume Content'}
        </button>
        
        <button 
          onClick={onAICover} 
          disabled={!!aiLoading}
          className="bg-sky text-white px-4 py-3 rounded-lg text-sm font-semibold hover:bg-sky/80 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {aiLoading === 'cover' ? <Spinner /> : <FileText className="w-4 h-4" />}
          {aiLoading === 'cover' ? 'Writing...' : '📝 Generate Cover Letter'}
        </button>
        
        <button 
          onClick={onAIImprove} 
          disabled={!!aiLoading}
          className="bg-rust text-white px-4 py-3 rounded-lg text-sm font-semibold hover:bg-rust/80 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {aiLoading === 'improve' ? <Spinner /> : <Wand2 className="w-4 h-4" />}
          {aiLoading === 'improve' ? 'Improving...' : '✨ Improve My Text'}
        </button>
      </div>
      
      {aiOutput && (
        <div className="mt-4 p-4 bg-cream rounded-lg border border-cream3 text-ink2 text-sm leading-relaxed whitespace-pre-wrap max-h-60 overflow-y-auto">
          {aiOutput}
        </div>
      )}
    </div>
  )
}