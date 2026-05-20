// src/components/Landing/HowItWorks.jsx
import { Edit3, Zap, Palette, Download } from 'lucide-react'

const steps = [
  { icon: Edit3, title: 'Enter Your Details', desc: 'Fill in your name, experience, skills, and education in our clean form interface.' },
  { icon: Zap, title: 'Let AI Enhance', desc: 'Click Generate and watch AI transform your inputs into polished, ATS-optimized content.' },
  { icon: Palette, title: 'Choose a Template', desc: 'Pick from Modern, Classic, or Minimal — all designed to impress hiring managers.' },
  { icon: Download, title: 'Download & Apply', desc: 'Export as a pixel-perfect PDF and start sending applications immediately.' },
]

export default function HowItWorks() {
  return (
    <section className="py-20 px-4 bg-cream2">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-gold text-xs font-semibold tracking-wider mb-2">SIMPLE PROCESS</div>
          <h2 className="font-serif text-4xl text-ink font-light">
            From blank to <em className="not-italic italic">brilliant</em> in minutes
          </h2>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="text-center">
              <div className="w-14 h-14 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <step.icon className="w-6 h-6 text-ink" />
              </div>
              <h3 className="font-semibold text-ink mb-2">{step.title}</h3>
              <p className="text-ink3 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}