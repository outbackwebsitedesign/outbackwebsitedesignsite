import { useState } from 'react'

const SERVICES = [
  { n: '01', t: <>Brand <em>identity</em></>, p: 'Wordmarks, type systems and the visual posture a website sits on top of. Done together, the work compounds.', tags: ['Wordmark', 'Type system', 'Guidelines'], ph: 'phw-1' },
  { n: '02', t: <>Website <em>design</em></>, p: 'Marketing sites, editorial publications and portfolios. Typeset to the millimetre, every interaction held to a line.', tags: ['UX', 'Art direction', 'Prototype'], ph: 'phw-2' },
  { n: '03', t: <>Engineering <em>& build</em></>, p: 'Custom front-ends in Next or Astro, headless CMS, considered performance. We ship our own code, no offshoring.', tags: ['Next.js', 'Sanity', 'Vercel'], ph: 'phw-4' },
  { n: '04', t: <>Editorial <em>& voice</em></>, p: 'In-house writer for naming, manifestos and ongoing editorial. Words are 80% of a website, treated like it.', tags: ['Naming', 'Copy', 'Editorial'], ph: 'phw-5' },
  { n: '05', t: <>Bespoke <em>commerce</em></>, p: 'Direct-to-consumer storefronts on Shopify Hydrogen or custom. Built for catalogues of under 80 products, made well.', tags: ['Hydrogen', 'Stripe', 'Custom'], ph: 'phw-3' },
  { n: '06', t: <>Retainer <em>& care</em></>, p: 'Six clients on monthly retainer for ongoing iteration. Strategic counsel, art direction, and the occasional emergency.', tags: ['Monthly', 'Strategy', 'Iteration'], ph: 'phw-6' },
]

export default function Services() {
  const [active, setActive] = useState(0)

  return (
    <section className="services reveal" id="services">
      <span className="s-num">№ 03 / Services</span>
      <div className="s-head">
        <span className="eyebrow">What we make, and how</span>
        <h2>Six <em>disciplines</em>, <span className="mute">one studio</span></h2>
      </div>
      <div className="svc-wrap">
        <div className="svc-list">
          {SERVICES.map((s, i) => (
            <div key={s.n} className={'svc-row ' + (active === i ? 'active' : '')} onMouseEnter={() => setActive(i)} onClick={() => setActive(i)}>
              <span className="n">— {s.n}</span>
              <span className="t">{s.t}</span>
              <span className="ar">↗</span>
            </div>
          ))}
        </div>
        <div className="svc-stage">
          {SERVICES.map((s, i) => (
            <div key={s.n} className={'svc-pane ' + (active === i ? 'on' : '')}>
              <div className={'ph ' + s.ph} style={{ position: 'absolute', inset: 0 }} />
              <div className="body">
                <h4>{s.t}</h4>
                <p>{s.p}</p>
                <div className="tags">{s.tags.map(t => <span className="tag" key={t}>{t}</span>)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
