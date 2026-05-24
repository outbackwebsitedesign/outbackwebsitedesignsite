import { useState, useEffect } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const f = () => setScrolled(scrollY > 40)
    window.addEventListener('scroll', f)
    return () => window.removeEventListener('scroll', f)
  }, [])

  return (
    <nav className={'nav ' + (scrolled ? 'scrolled' : '')}>
      <a className="brand" href="#top">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <circle cx="12" cy="12" r="10" />
          <path d="M2 14 Q 8 9 14 13 T 22 11" />
          <circle cx="17" cy="7" r="2" fill="currentColor" stroke="none" />
        </svg>
        <span className="brand-text"><b>Outback</b><span>Website Design · MMXXII</span></span>
      </a>
      <div className="nav-links">
        <a href="#work"><span className="num">01</span> Work</a>
        <a href="#letter"><span className="num">02</span> Letter</a>
        <a href="#services"><span className="num">03</span> Services</a>
        <a href="#engage"><span className="num">04</span> Engagement</a>
        <a href="#process"><span className="num">05</span> Process</a>
      </div>
      <a href="#contact" className="nav-cta">
        <span className="dot" />Book a call <span style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 13 }}>↗</span>
      </a>
    </nav>
  )
}
