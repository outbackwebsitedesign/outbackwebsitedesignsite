import { useEffect } from 'react'

export function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) }
    }), { threshold: .15 })
    document.querySelectorAll('.reveal, .proc-rail').forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])
}
