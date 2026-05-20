// src/components/Landing/Hero.jsx
import { TrendingUp, Users, Clock } from 'lucide-react'

export default function Hero({ setPage, loadDemo }) {
  return (
    <section className="bg-ink pt-28 pb-20 px-4 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-amber-900/20 via-transparent to-transparent pointer-events-none" />
      
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="inline-block px-3 py-1 rounded-full bg-gold/10 text-gold text-xs font-semibold tracking-wider mb-6">
          AI-POWERED RESUME BUILDER
        </div>
        
        <h1 className="font-serif text-5xl md:text-7xl text-white font-light leading-tight max-w-4xl mx-auto mb-6">
          Land your dream job with a{' '}
          <em className="not-italic text-gold">perfect resume</em>
        </h1>
        
        <p className="text-white/60 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          AI writes, designs, and formats your resume in seconds. Professional templates. One-click PDF export.
        </p>
        
        <div className="flex gap-4 justify-center flex-wrap">
          <button onClick={() => setPage('builder')} className="btn-primary">
            Start Building — Free
          </button>
          <button onClick={loadDemo} className="btn-secondary">
            View Demo Resume →
          </button>
        </div>
        
        <div className="flex justify-center gap-12 mt-16 flex-wrap">
          <div className="text-center">
            <div className="font-serif text-3xl text-gold font-semibold">2M+</div>
            <div className="text-white/40 text-xs uppercase tracking-wider mt-1">Resumes Created</div>
          </div>
          <div className="text-center">
            <div className="font-serif text-3xl text-gold font-semibold">94%</div>
            <div className="text-white/40 text-xs uppercase tracking-wider mt-1">Interview Rate</div>
          </div>
          <div className="text-center">
            <div className="font-serif text-3xl text-gold font-semibold">3</div>
            <div className="text-white/40 text-xs uppercase tracking-wider mt-1">Designer Templates</div>
          </div>
          <div className="text-center">
            <div className="font-serif text-3xl text-gold font-semibold">30s</div>
            <div className="text-white/40 text-xs uppercase tracking-wider mt-1">Avg. Build Time</div>
          </div>
        </div>
      </div>
    </section>
  )
}