import { useState } from 'react'

function App() {
  return (
    <div className="min-h-screen surface text-[var(--color-primary)] font-body py-20 px-4 md:px-16 flex flex-col justify-center items-center">
      
      {/* Hero Section */}
      <div className="max-w-5xl mx-auto w-full relative z-10 glass rounded-3xl p-12 md:p-24 ghost-border flex flex-col gap-8 md:flex-row shadow-2xl ambient-shadow">
        <div className="flex-1">
          <h1 className="text-5xl md:text-7xl font-bold font-display leading-[1.1] tracking-tight">
            The Digital<br />Architect.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-[var(--color-primary-container)] max-w-lg leading-relaxed">
            Bridging the gap between high-precision engineering and avant-garde artistry. Redefining what premium technical services look like.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <button className="btn-primary">Initialize Sequence</button>
            <button className="btn-secondary">View the Manifesto</button>
          </div>
        </div>

        {/* Asymmetrical Element */}
        <div className="w-full md:w-1/3 mt-12 md:mt-0 flex flex-col gap-6 surface-high p-8 rounded-[1.5rem] relative top-8 -right-8 ambient-shadow">
          <h3 className="text-2xl font-bold font-display">System Status</h3>
          <div className="flex gap-4 border-b border-[var(--color-outline-variant)] border-opacity-10 pb-4">
            <div className="w-2 h-2 rounded-full bg-green-400 mt-2"></div>
            <div>
              <p className="text-sm uppercase tracking-widest text-[#a1a1a1] mb-1 font-semibold">Nodes</p>
              <p className="text-lg">All systems operational</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-2 h-2 rounded-full bg-[var(--color-primary)] mt-2"></div>
            <div>
              <p className="text-sm uppercase tracking-widest text-[#a1a1a1] mb-1 font-semibold">Latency</p>
              <p className="text-lg">12ms response</p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default App
