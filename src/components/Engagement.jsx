const tiers = [
  {
    name: 'The Mark', title: <>Identity <em>only</em></>, price: '32k', per: 'From AUD · 6 weeks',
    feats: ['Wordmark & lockup', 'Primary type system', 'Colour & motion notes', 'Brand guidelines (PDF & web)', 'Two rounds of revision'], cta: 'Reserve a slot',
  },
  {
    name: 'The Atelier', title: <>Brand <em>+ website</em></>, price: '84k', per: 'From AUD · 12 — 14 weeks',
    feats: ['Everything in The Mark', 'Bespoke website, 8 — 18 pages', 'Custom headless CMS', 'Original art direction & photo brief', 'Editorial copy by in-house writer', '90 days of post-launch care'],
    feat: true, badge: 'Most reserved', cta: 'Begin a conversation',
  },
  {
    name: 'The Commission', title: <>Bespoke <em>system</em></>, price: 'On request', per: 'From 120k AUD · 16+ weeks',
    feats: ['Multi-site or product ecosystem', 'Bespoke design system', 'Engineering team allocation', 'Migration & integrations', 'Quarterly retainer included', 'Reserved, two per year'], cta: 'Enquire',
  },
]

export default function Engagement() {
  return (
    <section className="engage reveal" id="engage">
      <span className="s-num">№ 04 / Engagement</span>
      <div className="s-head">
        <span className="eyebrow">Three ways to begin · pricing in the open</span>
        <h2>Pricing, <em>plainly</em></h2>
      </div>
      <div className="tiers">
        {tiers.map(t => (
          <div key={t.name} className={'tier ' + (t.feat ? 'feat' : '')}>
            {t.badge && <span className="t-badge">{t.badge}</span>}
            <div className="t-name">— {t.name}</div>
            <h3 className="t-title">{t.title}</h3>
            <div className="t-price"><em>from</em>{t.price}</div>
            <div className="t-meta">{t.per}</div>
            <ul className="t-list">{t.feats.map((f, i) => <li key={i}><span>{f}</span></li>)}</ul>
            <div className="t-foot"><button>{t.cta} &nbsp;↗</button></div>
          </div>
        ))}
      </div>
    </section>
  )
}
