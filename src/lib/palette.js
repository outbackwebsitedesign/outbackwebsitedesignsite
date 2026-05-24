export const PALETTES = {
  redearth: {
    name: 'Red Earth', cream: '#EFE7D6', cream2: '#E4D8C0', paper: '#F5EFE1',
    ink: '#15110D', ink2: '#241D15', dust: '#8A7A62', dust2: '#5F523F',
    ochre: '#C24A22', ochre2: '#8A2F14', gold: '#D9933A',
  },
  ironbark: {
    name: 'Ironbark', cream: '#EAE4D6', cream2: '#D8CFBC', paper: '#F0EADC',
    ink: '#10110D', ink2: '#1E2017', dust: '#7C7560', dust2: '#5A5340',
    ochre: '#3F624C', ochre2: '#264734', gold: '#C29A4A',
  },
  midnight: {
    name: 'Midnight', cream: '#10131A', cream2: '#181C26', paper: '#1B1F2A',
    ink: '#F4EFE2', ink2: '#D8D2C4', dust: '#7C8190', dust2: '#A8ADBA',
    ochre: '#E0844A', ochre2: '#B85F2E', gold: '#E5B265',
  },
}

export function applyPalette(p) {
  const r = document.documentElement.style
  Object.entries({
    cream: p.cream, 'cream-2': p.cream2, paper: p.paper,
    ink: p.ink, 'ink-2': p.ink2, dust: p.dust, 'dust-2': p.dust2,
    ochre: p.ochre, 'ochre-2': p.ochre2, gold: p.gold,
  }).forEach(([k, v]) => r.setProperty('--' + k, v))
  const dark = p.name === 'Midnight'
  r.setProperty('--line', dark ? 'rgba(244,239,226,0.15)' : 'rgba(21,17,13,0.15)')
  r.setProperty('--line-2', dark ? 'rgba(244,239,226,0.35)' : 'rgba(21,17,13,0.35)')
}
