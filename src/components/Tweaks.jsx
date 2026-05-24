import { PALETTES } from '../lib/palette'

export default function Tweaks({ open, onClose, tweaks, setTweak }) {
  if (!open) return null

  const box = { position: 'fixed', right: 20, bottom: 20, width: 280, zIndex: 1000, background: 'var(--paper)', color: 'var(--ink)', border: '1px solid var(--line-2)', borderRadius: 10, padding: '16px 18px 18px', fontFamily: 'var(--sans)', fontSize: 12, boxShadow: '0 24px 60px -20px rgba(0,0,0,.3)' }
  const hd = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14, fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--dust-2)' }
  const row = { display: 'flex', gap: 6, marginTop: 6 }
  const chip = on => ({ flex: 1, padding: '7px 8px', borderRadius: 6, border: '1px solid ' + (on ? 'var(--ink)' : 'var(--line-2)'), background: on ? 'var(--ink)' : 'transparent', color: on ? 'var(--cream)' : 'var(--ink)', fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.08em', textTransform: 'uppercase', cursor: 'pointer' })
  const lbl = { fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--dust-2)', marginTop: 14, display: 'block' }

  return (
    <div style={box}>
      <div style={hd}><span>Tweaks</span><button onClick={onClose} style={{ color: 'var(--dust-2)' }}>close ✕</button></div>
      <span style={{ ...lbl, marginTop: 0 }}>Palette</span>
      <div style={row}>
        {Object.keys(PALETTES).map(k => (
          <button key={k} style={chip(tweaks.palette === k)} onClick={() => setTweak('palette', k)}>{PALETTES[k].name}</button>
        ))}
      </div>
      <span style={lbl}>Custom cursor</span>
      <div style={row}>
        <button style={chip(tweaks.showCursor === true)} onClick={() => setTweak('showCursor', true)}>On</button>
        <button style={chip(tweaks.showCursor === false)} onClick={() => setTweak('showCursor', false)}>Off</button>
      </div>
    </div>
  )
}
