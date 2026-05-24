const items = [
  'Booking commissions for Q3 — Q4 2026', <i key="i1">✦</i>,
  'Now reading correspondence from 14 prospective clients', <i key="i2">✦</i>,
  'Studio note vol. 042 published this week', <i key="i3">✦</i>,
  'Maison Lévrier — case study now live', <i key="i4">✦</i>,
  'Two atelier slots remaining for the calendar year', <i key="i5">✦</i>,
]

function Row() {
  return <>{items.map((t, i) => <span key={i}>{t}</span>)}</>
}

export default function Ticker() {
  return (
    <div className="ticker">
      <div className="seg live"><span className="dot" /> Live · Adelaide</div>
      <div className="feed">
        <div className="feed-track"><Row /><Row /></div>
      </div>
      <div className="seg">Vol. IV · 2026 · № 042</div>
    </div>
  )
}
