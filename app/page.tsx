import Navbar from './components/Navbar'

export default function Home() {
  const holdings = [
    {
      name: 'Aegos Intel',
      domain: 'aegosintel.com',
      description: 'Company intelligence and data platform. Structured business insights for operators and analysts.',
      tag: 'SaaS',
      initial: 'A',
      iconBg: '#E8C840',
      iconColor: '#1c1c1e',
    },
    {
      name: 'One Peak Two',
      domain: 'onepeaktwo.com',
      description: 'Studio and experiments arm. Building and acquiring small internet projects with compounding intent.',
      tag: 'Studio',
      initial: 'O',
      iconBg: '#2a2a2c',
      iconColor: '#aaa',
    },
    {
      name: 'Story Brew',
      domain: 'storybrew.co',
      description: 'Narrative content brand. Long-form and documentary storytelling across digital formats.',
      tag: 'Media',
      initial: 'S',
      iconBg: '#1a3a5c',
      iconColor: '#7aaee8',
    },
    {
      name: 'Study Brew',
      domain: 'studybrew.co',
      description: 'Educational media brand. Content and resources for focused, deliberate learners.',
      tag: 'Media',
      initial: 'S',
      iconBg: '#1a3d2b',
      iconColor: '#4caf7d',
    },
  ]

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#1c1c1e', fontFamily: 'Geist, Helvetica, Arial, sans-serif' }}>
      <Navbar />

      {/* Hero */}
      <div style={{ maxWidth: '980px', margin: '0 auto', padding: '118px 50px 0' }}>
        <h1 style={{ fontSize: '80px', fontWeight: 900, lineHeight: '1.0', letterSpacing: '-0.03em', color: '#f0f0f0', marginBottom: '50px' }}>
          <span style={{ color: '#E8C840' }}>/</span>ryo-ka<span style={{ color: '#E8C840' }}>/</span>
        </h1>
        <p style={{ fontSize: '35px', lineHeight: '50px', fontWeight: 300, color: '#d4d4d4', marginBottom: '50px' }}>
          We're a permanent capital company that builds, acquires, and invests in exceptional assets across private and public markets. We pursue durable ownership, patient capital, and long-term value creation.
        </p>
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '80px' }}>
          <a href="/about" style={{ fontSize: '20px', color: '#666', textDecoration: 'none', borderBottom: '2px solid #E8C840', paddingBottom: '2px', letterSpacing: '0.08em' }}>
            About
          </a>
        </div>
      </div>

      {/* Our Approach */}
      <div style={{ maxWidth: '980px', margin: '0 auto', padding: '120px 50px 120px' }}>
        <p style={{ fontSize: '13px', color: '#555', letterSpacing: '0.08em', marginBottom: '24px' }}>Our Approach</p>
        <p style={{ fontSize: '25px', lineHeight: '35px', fontWeight: 300, color: '#d4d4d4', marginBottom: '35px' }}>
          Most firms optimize for exits. We optimize for ownership. The longer we hold, the more we learn, and the better our next move becomes. We currently operate across a small number of owned properties. Software tools, content assets, and early-stage bets. Each is chosen for its potential to grow quietly and hold value over time.
        </p>
        <p style={{ fontSize: '25px', lineHeight: '35px', fontWeight: 300, color: '#d4d4d4' }}>
          We look for undervalued digital properties, niche media brands, and small real-world businesses with durable fundamentals. We are not chasing growth. We are building a base of assets that quietly and consistently generate value.
        </p>
      </div>

      {/* Divider */}
      <div style={{ maxWidth: '980px', margin: '0 auto', padding: '0 50px' }}>
        <div style={{ borderTop: '0.5px solid #2a2a2c' }} />
      </div>

      {/* Portfolio */}
      <div style={{ maxWidth: '980px', margin: '0 auto', padding: '80px 50px 120px' }}>
        <p style={{ fontSize: '13px', color: '#555', letterSpacing: '0.08em', marginBottom: '40px' }}>Portfolio</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          {holdings.map((h) => (
            <div
              key={h.name}
              style={{
                background: '#242426',
                borderRadius: '10px',
                padding: '24px',
                border: '0.5px solid #2e2e30',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '18px', fontWeight: 700, color: '#f0f0f0' }}>
                  {h.name}
                  <span style={{ color: '#444', fontSize: '14px' }}>↗</span>
                </div>
                <div style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '8px',
                  background: h.iconBg,
                  color: h.iconColor,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '15px',
                  flexShrink: 0,
                }}>
                  {h.initial}
                </div>
              </div>
              <p style={{ fontSize: '13px', color: '#555', marginBottom: '16px' }}>{h.domain}</p>
              <p style={{ fontSize: '14px', color: '#888', lineHeight: '1.5', fontWeight: 300 }}>{h.description}</p>
              <span style={{
                display: 'inline-block',
                marginTop: '16px',
                fontSize: '11px',
                color: '#555',
                border: '0.5px solid #333',
                borderRadius: '4px',
                padding: '2px 8px',
                letterSpacing: '0.05em',
              }}>
                {h.tag}
              </span>
            </div>
          ))}
        </div>
      </div>

    </main>
  )
}
