import { useState, useEffect } from 'react'
import { PALETTES, applyPalette } from './lib/palette'
import { useReveal } from './hooks/useReveal'
import Cursor from './components/Cursor'
import Ticker from './components/Ticker'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import PinnedWorks from './components/PinnedWorks'
import Manifesto from './components/Manifesto'
import Services from './components/Services'
import Engagement from './components/Engagement'
import Process from './components/Process'
import Testimonial from './components/Testimonial'
import Logos from './components/Logos'
import Foot from './components/Foot'
import Tweaks from './components/Tweaks'

const TWEAK_DEFAULTS = {
  palette: 'redearth',
  showCursor: true,
  marqueeSpeed: 50,
}

export default function App() {
  const [tweaks, setTweaks] = useState(TWEAK_DEFAULTS)
  const [open, setOpen] = useState(false)

  useEffect(() => { applyPalette(PALETTES[tweaks.palette] || PALETTES.redearth) }, [tweaks.palette])
  useReveal()

  const setTweak = (k, v) => {
    const next = { ...tweaks, [k]: v }; setTweaks(next)
    window.parent.postMessage({ type: '__edit_mode_set_keys', edits: { [k]: v } }, '*')
  }

  useEffect(() => {
    const onMsg = e => {
      if (!e.data) return
      if (e.data.type === '__activate_edit_mode') setOpen(true)
      if (e.data.type === '__deactivate_edit_mode') setOpen(false)
    }
    window.addEventListener('message', onMsg)
    window.parent.postMessage({ type: '__edit_mode_available' }, '*')
    return () => window.removeEventListener('message', onMsg)
  }, [])

  const handleClose = () => { setOpen(false); window.parent.postMessage({ type: '__edit_mode_dismissed' }, '*') }

  return (
    <div className="app">
      <Cursor on={tweaks.showCursor} />
      <Ticker />
      <Nav />
      <Hero />
      <Marquee />
      <PinnedWorks />
      <Manifesto />
      <Services />
      <Engagement />
      <Process />
      <Testimonial />
      <Logos />
      <Foot />
      <Tweaks open={open} onClose={handleClose} tweaks={tweaks} setTweak={setTweak} />
    </div>
  )
}
