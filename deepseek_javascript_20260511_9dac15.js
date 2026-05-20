// src/components/Landing/CTASection.jsx
export default function CTASection({ setPage }) {
  return (
    <section className="bg-ink py-20 px-4 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl text-white font-light mb-4">
          Your next job starts with a{' '}
          <em className="not-italic italic text-gold">great resume</em>
        </h2>
        <p className="text-white/55 text-base mb-8">
          Join over 2 million professionals who built their resumes with ResuméAI
        </p>
        <button onClick={() => setPage('builder')} className="btn-primary text-base px-10 py-4">
          Build My Resume — Free
        </button>
      </div>
    </section>
  )
}