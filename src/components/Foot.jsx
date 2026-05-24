import { useRef, useEffect } from 'react'

export default function Foot() {
  const btn = useRef(null)

  useEffect(() => {
    if (!btn.current) return
    const el = btn.current
    const onMove = e => {
      const r = el.getBoundingClientRect()
      const x = e.clientX - (r.left + r.width / 2)
      const y = e.clientY - (r.top + r.height / 2)
      el.style.transform = `translate(${x * .18}px, ${y * .18}px)`
    }
    const onLeave = () => { el.style.transform = 'translate(0,0)' }
    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    return () => { el.removeEventListener('mousemove', onMove); el.removeEventListener('mouseleave', onLeave) }
  }, [])

  return (
    <section className="foot-cta" id="contact">
      <span className="eyebrow">№ 07 / Begin</span>
      <h2>Write us<br />a <em>letter</em>.<span className="ar">↗</span></h2>

      <div style={{ marginTop: 36 }}>
        <a ref={btn} className="btn-pri" href="mailto:atelier@outback.studio" style={{ background: 'var(--ochre)', borderColor: 'var(--ochre)', display: 'inline-flex', padding: '18px 26px' }}>
          <span>atelier@outback.studio</span>
          <span className="arrow" style={{ fontSize: 18 }}>↗</span>
        </a>
      </div>

      <div className="foot-actions">
        <div>
          <div className="lbl">By telephone</div>
          <div className="val">+61 8 8000 <em>1234</em></div>
        </div>
        <div>
          <div className="lbl">In person</div>
          <div className="val">14 <em>Gilbert</em> St, Adelaide SA</div>
        </div>
        <div>
          <div className="lbl">Following</div>
          <div className="val">Instagram &nbsp;·&nbsp; Are.na &nbsp;·&nbsp; <em>Letters</em></div>
        </div>
      </div>

      <div className="foot-bottom">
        <div><b>Outback Website Design</b><span>ABN 22 884 117 309<br />Adelaide · Australia</span></div>
        <div><b>Studio hours</b><span>Mon — Thu, 9 — 5 ACST<br />Closed January</span></div>
        <div><b>Following</b><span>Instagram ↗<br />Are.na ↗<br />Letters quarterly ↗</span></div>
        <div style={{ textAlign: 'right' }}><b>© MMXXVI</b><span>All rights, reserved.<br />Made by hand in Adelaide.</span></div>
      </div>
    </section>
  )
}
