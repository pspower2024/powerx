// src/components/Landing/Features.jsx
import { FEATURES } from '../../utils/constants'

export default function Features() {
  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <div className="text-gold text-xs font-semibold tracking-wider mb-2">EVERYTHING YOU NEED</div>
        <h2 className="font-serif text-4xl text-ink font-light">
          Built for <em className="not-italic italic">serious</em> job seekers
        </h2>
        <p className="text-ink3 text-base max-w-md mx-auto mt-3">
          Every feature crafted to help you stand out in competitive job markets.
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6">
        {FEATURES.map((feature, idx) => (
          <div key={idx} className="card p-6 hover:shadow-xl">
            <div className="w-12 h-12 bg-cream2 rounded-xl flex items-center justify-center text-2xl mb-4">
              {feature.icon}
            </div>
            <h3 className="font-semibold text-ink mb-2">{feature.title}</h3>
            <p className="text-ink3 text-sm leading-relaxed">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}