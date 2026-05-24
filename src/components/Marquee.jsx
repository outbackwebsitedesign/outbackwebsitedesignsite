const items = ['Selected works', 'Recent commissions', 'Brand systems', 'Editorial publications', 'Bespoke commerce', 'Long-form storytelling']

function Row() {
  return (
    <div>
      {items.map((t, i) => (
        <span key={i}>{t}<i>✦</i></span>
      ))}
    </div>
  )
}

export default function Marquee() {
  return (
    <div className="marquee">
      <div className="track"><Row /><Row /></div>
    </div>
  )
}
