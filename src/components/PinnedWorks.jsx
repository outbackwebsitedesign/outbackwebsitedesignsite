import { useState, useEffect, useRef } from 'react'

const WORKS = [
  { n: '01', title: <>Maison <em>Lévrier</em></>, year: "'25", tags: ['Brand', 'Site', 'Shop'], ph: 'phw-1' },
  { n: '02', title: <>Halcyon <em>Press</em></>, year: "'25", tags: ['Editorial', 'CMS'], ph: 'phw-2' },
  { n: '03', title: <>Northwind <em>Capital</em></>, year: "'24", tags: ['Finance', 'IR'], ph: 'phw-3' },
  { n: '04', title: <>Studio <em>Ohto</em></>, year: "'24", tags: ['Portfolio', 'Archive'], ph: 'phw-4' },
  { n: '05', title: <>Vellichor <em>&amp; Co.</em></>, year: "'23", tags: ['Hospitality', 'Booking'], ph: 'phw-5' },
  { n: '06', title: <>Ember <em>Field</em></>, year: "'23", tags: ['Beverage', 'DTC'], ph: 'phw-6' },
]

export default function PinnedWorks() {
  const wrap = useRef(null)
  const track = useRef(null)
  const [p, setP] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const el = wrap.current; if (!el) return
      const r = el.getBoundingClientRect()
      const total = r.height - innerHeight
      const pct = Math.max(0, Math.min(1, -r.top / total))
      setP(pct)
      if (track.current) {
        const max = track.current.scrollWidth - innerWidth + 72
        track.current.style.transform = `translateX(${-pct * max}px)`
      }
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll) }
  }, [])

  const idx = Math.min(WORKS.length, Math.floor(p * WORKS.length) + 1)

  return (
    <section className="works-pin" id="work" ref={wrap}>
      <div className="sticky">
        <div className="head">
          <div style={{ display: 'flex', gap: 24, alignItems: 'baseline' }}>
            <span className="eyebrow">№ 01 / Selected Work</span>
            <h2>An index of <em>recent</em> commissions</h2>
          </div>
          <div className="progress">
            <b>{String(idx).padStart(2, '0')}</b> &nbsp;/&nbsp; {String(WORKS.length).padStart(2, '0')}
          </div>
        </div>
        <div className="works-track" ref={track}>
          {WORKS.map(w => (
            <div key={w.n} className="work-card">
              <div className={'ph ' + w.ph} />
              <div className="top">
                <span className="num">— {w.n}</span>
                <h3 className="title">{w.title}</h3>
              </div>
              <div className="bot meta">
                <div className="tags">{w.tags.map(t => <span className="tag" key={t}>{t}</span>)}</div>
                <span className="yr">{w.year}</span>
              </div>
            </div>
          ))}
          <div style={{ flex: '0 0 auto', width: 560, height: '72vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: 24, color: 'rgba(239,231,214,.6)' }}>
            <span style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '.08em', textTransform: 'uppercase' }}>— 64 archived</span>
            <div>
              <h3 style={{ fontFamily: 'var(--serif)', fontSize: 46, letterSpacing: '-.02em', lineHeight: 1, margin: '0 0 12px', color: 'var(--cream)' }}>The <em style={{ color: 'var(--ochre)', fontStyle: 'italic' }}>archive →</em></h3>
              <p style={{ fontSize: 13.5, maxWidth: '30ch' }}>Sixty-four commissions, organised by year and discipline.</p>
              <a href="#" style={{ display: 'inline-block', marginTop: 16, fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--cream)', borderBottom: '1px solid var(--ochre)', paddingBottom: 4 }}>Open archive ↗</a>
            </div>
          </div>
        </div>
        <div className="scrubber">
          <span className="lbl">Scroll to advance</span>
          <div className="bar"><div className="fill" style={{ width: (p * 100) + '%' }} /></div>
          <span className="hint">drag <span className="kbd">↓</span></span>
        </div>
      </div>
    </section>
  )
}
