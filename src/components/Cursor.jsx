import { useEffect, useRef } from 'react'

export default function Cursor({ on }) {
  const dot = useRef(null)
  const ring = useRef(null)

  useEffect(() => {
    if (!on) return
    const p = { x: innerWidth / 2, y: innerHeight / 2 }
    const q = { ...p }
    const onMove = e => {
      p.x = e.clientX; p.y = e.clientY
      if (dot.current) { dot.current.style.left = p.x + 'px'; dot.current.style.top = p.y + 'px' }
    }
    let raf
    const loop = () => {
      q.x += (p.x - q.x) * .14; q.y += (p.y - q.y) * .14
      if (ring.current) { ring.current.style.left = q.x + 'px'; ring.current.style.top = q.y + 'px' }
      raf = requestAnimationFrame(loop)
    }
    loop()
    window.addEventListener('mousemove', onMove)
    return () => { cancelAnimationFrame(raf); window.removeEventListener('mousemove', onMove) }
  }, [on])

  if (!on) return null
  return (
    <>
      <div className="cur" ref={dot} />
      <div className="cur lg" ref={ring} />
    </>
  )
}
