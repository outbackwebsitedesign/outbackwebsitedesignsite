import { useState, useEffect, useRef } from 'react'

export default function Hero() {
  const [time, setTime] = useState(new Date())
  const [counters, setCounters] = useState({ a: 0, b: 0, c: 0, d: 0 })
  const sunRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 30000)
    return () => clearInterval(t)
  }, [])

  useEffect(() => {
    const targets = { a: 64, b: 4, c: 14, d: 96 }
    const dur = 1600, start = performance.now()
    let raf
    const step = now => {
      const t = Math.min(1, (now - start) / dur)
      const ease = 1 - Math.pow(1 - t, 3)
      setCounters({ a: Math.round(targets.a * ease), b: Math.round(targets.b * ease), c: Math.round(targets.c * ease), d: Math.round(targets.d * ease) })
      if (t < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [])

  useEffect(() => {
    const onMove = e => {
      const cx = e.clientX / innerWidth - .5
      const cy = e.clientY / innerHeight - .5
      cardsRef.current.forEach((el, i) => {
        if (!el) return
        const f = [14, 9, 18][i] || 10
        el.style.transform = `translate(${cx * f}px, ${cy * f}px)`
      })
      if (sunRef.current) sunRef.current.style.transform = `translate(${cx * -20}px, ${cy * -12}px)`
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  const fmt = time.toLocaleTimeString('en-AU', { hour: '2-digit', minute: '2-digit', hour12: false, timeZone: 'Australia/Adelaide' })

  return (
    <section className="hero" id="top">
      <div className="hero-bg" />
      <div className="hero-sun" ref={sunRef}>
        <svg viewBox="0 0 600 600">
          <g className="rays" stroke="rgba(194,74,34,0.18)" strokeWidth="1" fill="none">
            {Array.from({ length: 36 }).map((_, i) => {
              const a = (i * 10) * Math.PI / 180; const r1 = 180, r2 = 290
              return <line key={i} x1={300 + Math.cos(a) * r1} y1={300 + Math.sin(a) * r1} x2={300 + Math.cos(a) * r2} y2={300 + Math.sin(a) * r2} />
            })}
          </g>
          <g className="disc">
            <circle cx="300" cy="300" r="160" fill="url(#sg)" />
            <circle cx="300" cy="300" r="160" fill="none" stroke="rgba(194,74,34,0.4)" strokeWidth="1" />
          </g>
          <defs>
            <radialGradient id="sg" cx="50%" cy="40%" r="50%">
              <stop offset="0%" stopColor="#F0C079" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#D9933A" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#C24A22" stopOpacity="0.1" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      <div className="hero-meta">
        <div><b>Adelaide</b> &nbsp;·&nbsp; {fmt} ACST &nbsp;·&nbsp; 22° clear</div>
        <div>Independent studio · est. MMXXII · &nbsp;Vol. IV / № 042</div>
      </div>

      <div className="hero-left">
        <span className="hero-eyebrow">Studio for considered websites</span>
        <h1>
          <span className="line"><span>Websites built</span></span>
          <span className="line"><span>like <em>cathedrals,</em></span></span>
          <span className="line"><span>not <em>tents.</em></span></span>
        </h1>
        <p className="hero-sub">
          A four-person atelier in Adelaide designing and engineering <em>considered</em> websites for category-defining brands. We make perhaps twelve per year. No themes, no templates, no churn.
        </p>
        <div className="hero-actions">
          <a className="btn-pri" href="#contact"><span>Begin a conversation</span><span className="arrow">↗</span></a>
          <a className="btn-sec" href="#work">See selected work →</a>
        </div>
        <div className="hero-stats">
          <div className="stat"><b>{counters.a}<em>.</em></b><span>Websites shipped since 2022</span></div>
          <div className="stat"><b>{counters.b}<em>.</em></b><span>Designers, engineers, writer</span></div>
          <div className="stat"><b>{counters.c}<em>wk</em></b><span>Average engagement</span></div>
          <div className="stat"><b>{counters.d}<em>%</em></b><span>Of clients return</span></div>
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-card hc-1" ref={el => cardsRef.current[0] = el}><span className="lbl">Maison Lévrier · 2025</span></div>
        <div className="hero-card hc-2" ref={el => cardsRef.current[1] = el}><span className="lbl">Halcyon Press · 2025</span></div>
        <div className="hero-card hc-3" ref={el => cardsRef.current[2] = el}><span className="lbl">Ember Field · 2024</span></div>

        <div className="badge">
          <svg viewBox="0 0 200 200">
            <defs>
              <path id="circ" d="M 100, 100 m -76, 0 a 76,76 0 1,1 152,0 a 76,76 0 1,1 -152,0" />
            </defs>
            <text fill="#15110D" style={{ fontFamily: 'var(--mono)', fontSize: '10.5px', letterSpacing: '.18em' }}>
              <textPath href="#circ">AVAILABLE FOR COMMISSION ✦ Q3 — Q4 2026 ✦ </textPath>
            </text>
          </svg>
          <span className="center">✦</span>
        </div>
      </div>
    </section>
  )
}
