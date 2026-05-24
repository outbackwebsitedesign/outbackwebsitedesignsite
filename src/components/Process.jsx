const steps = [
  { n: '01', t: <>The <em>letter</em></>, when: 'Week 0', p: 'You write us a letter about the brand. We write back, candidly, about whether we are the right studio for it.' },
  { n: '02', t: <>The <em>discovery</em></>, when: 'Week 1 — 3', p: 'Two days on-site. Interviews, archive, audit. We return with a written brief, not a deck of stock images.' },
  { n: '03', t: <>The <em>making</em></>, when: 'Week 4 — 11', p: 'Design and engineering happen in the same room. You see new work every Friday. Two rounds of revision.' },
  { n: '04', t: <>The <em>launch</em></>, when: 'Week 12 — 14', p: 'Press materials, soft launch to your list, and ninety days of paid care while the site finds its feet.' },
]

export default function Process() {
  return (
    <section className="process reveal" id="process">
      <span className="s-num">№ 05 / Process</span>
      <div className="s-head">
        <span className="eyebrow">How an engagement moves</span>
        <h2>From <em>letter</em> to <span className="mute">launch</span></h2>
      </div>
      <div className="proc-rail">
        {steps.map(s => (
          <div className="proc-step" key={s.n}>
            <div className="proc-dot">{s.n}</div>
            <h4>{s.t}</h4>
            <p>{s.p}</p>
            <span className="when">{s.when}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
