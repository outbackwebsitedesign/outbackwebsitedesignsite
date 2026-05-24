import { useState, useEffect } from 'react'

const TESTI = [
  { q: <>They treated our homepage like a piece of <em>writing</em> — argued about every comma. The site closed a series B in week one.</>, who: 'Anya Whitaker', role: 'Founder, Northwind Capital', av: 'A' },
  { q: <>The only studio we considered hiring <em>twice.</em> Slower than anyone, and somehow always on time.</>, who: 'Tomás Belmonte', role: 'Creative Director, Halcyon Press', av: 'T' },
  { q: <>An expensive decision that has been the <em>cheapest</em> we ever made. Five years on the same site.</>, who: 'Mira Okafor', role: 'Owner, Maison Lévrier', av: 'M' },
]

export default function Testimonial() {
  const [i, setI] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setI(x => (x + 1) % TESTI.length), 7000)
    return () => clearInterval(t)
  }, [])

  const t = TESTI[i]

  return (
    <section className="testi reveal">
      <span className="s-num" style={{ color: 'rgba(239,231,214,.55)' }}>№ 06 / Voices</span>
      <span className="mark">"</span>
      <div className="s-head head" style={{ borderColor: 'rgba(239,231,214,.3)' }}>
        <span className="eyebrow">From the correspondence</span>
        <h2>What clients <em>say</em></h2>
      </div>
      <blockquote>{t.q}</blockquote>
      <div className="cite">
        <div className="cite-av">{t.av}</div>
        <div className="cite-who"><b>{t.who}</b><span>{t.role}</span></div>
        <div className="cite-nav">
          <button onClick={() => setI((i - 1 + TESTI.length) % TESTI.length)} aria-label="prev">←</button>
          <button onClick={() => setI((i + 1) % TESTI.length)} aria-label="next">→</button>
        </div>
      </div>
      <div className="pips">{TESTI.map((_, k) => <span key={k} className={k === i ? 'on' : ''} />)}</div>
    </section>
  )
}
