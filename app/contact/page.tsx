'use client'

import Navbar from '../components/Navbar'

export default function Contact() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#0D1821', fontFamily: 'Geist, Helvetica, Arial, sans-serif' }}>
      <Navbar />

      {/* Hero */}
      <div style={{ maxWidth: '980px', margin: '0 auto', padding: '140px 50px 0' }}>
        <p style={{ fontSize: '13px', color: '#555', letterSpacing: '0.08em', marginBottom: '24px' }}>Contact</p>
        <h1 style={{ fontSize: '80px', fontWeight: 900, lineHeight: '1.0', letterSpacing: '-0.03em', color: '#f0f0f0', marginBottom: '32px' }}>
          The door is open.
        </h1>
        <p style={{ fontSize: '25px', lineHeight: '38px', fontWeight: 300, color: '#d4d4d4', maxWidth: '980px' }}>
          We are a small team and we read everything. Whether you are looking to sell a business, co-invest, build something together, or just follow what we are doing, reach out directly.
        </p>
      </div>

      {/* Cards */}
      <div style={{ maxWidth: '980px', margin: '0 auto', padding: '80px 50px 120px' }}>
        <p style={{ fontSize: '13px', color: '#555', letterSpacing: '0.08em', marginBottom: '40px' }}>Get in touch</p>

        {/* General email full width */}
        <div style={{
          background: '#112233',
          borderRadius: '10px',
          padding: '28px',
          border: '0.5px solid #1a3050',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '12px',
        }}>
          <div>
            <p style={{ fontSize: '11px', color: '#555', letterSpacing: '0.08em', marginBottom: '10px' }}>General</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ width: '6px', height: '6px', background: '#446', borderRadius: '50%', display: 'inline-block', flexShrink: 0 }} />
              <a href="mailto:p@ryoka.xyz" style={{ fontSize: '20px', color: '#f0f0f0', fontWeight: 300, textDecoration: 'none', borderBottom: '1px solid #444', paddingBottom: '2px' }}>
                p@ryoka.xyz
              </a>
            </div>
          </div>
          <a href="mailto:p@ryoka.xyz" style={{ fontSize: '16px', color: '#666', textDecoration: 'none', borderBottom: '1px solid #444', paddingBottom: '2px', letterSpacing: '0.06em', whiteSpace: 'nowrap', flexShrink: 0 }}>
            Send a message
          </a>
        </div>

        {/* 2x2 grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>

          <div style={{ background: '#112233', borderRadius: '10px', padding: '28px', border: '0.5px solid #1a3050' }}>
            <p style={{ fontSize: '11px', color: '#555', letterSpacing: '0.08em', marginBottom: '12px' }}>Acquisitions</p>
            <p style={{ fontSize: '17px', color: '#d4d4d4', fontWeight: 300, marginBottom: '20px' }}>Selling a business or project?</p>
            <a href="mailto:p@ryoka.xyz?subject=Acquisition Inquiry" style={{ fontSize: '13px', color: '#666', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              Get in touch
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="M2 12L12 2M12 2H5M12 2V9" stroke="#555" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          </div>

          <div style={{ background: '#112233', borderRadius: '10px', padding: '28px', border: '0.5px solid #1a3050' }}>
            <p style={{ fontSize: '11px', color: '#555', letterSpacing: '0.08em', marginBottom: '12px' }}>Partnerships</p>
            <p style={{ fontSize: '17px', color: '#d4d4d4', fontWeight: 300, marginBottom: '20px' }}>Building something aligned?</p>
            <a href="mailto:p@ryoka.xyz?subject=Partnership" style={{ fontSize: '13px', color: '#666', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              Let&apos;s explore
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="M2 12L12 2M12 2H5M12 2V9" stroke="#555" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          </div>

          <div style={{ background: '#112233', borderRadius: '10px', padding: '28px', border: '0.5px solid #1a3050' }}>
            <p style={{ fontSize: '11px', color: '#555', letterSpacing: '0.08em', marginBottom: '12px' }}>Markets</p>
            <p style={{ fontSize: '17px', color: '#d4d4d4', fontWeight: 300, marginBottom: '20px' }}>Interested in co-investing?</p>
            <a href="mailto:p@ryoka.xyz?subject=Markets" style={{ fontSize: '13px', color: '#666', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              Partner inquiries
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="M2 12L12 2M12 2H5M12 2V9" stroke="#555" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          </div>

          <div style={{ background: '#112233', borderRadius: '10px', padding: '28px', border: '0.5px solid #1a3050' }}>
            <p style={{ fontSize: '11px', color: '#555', letterSpacing: '0.08em', marginBottom: '12px' }}>Press</p>
            <p style={{ fontSize: '17px', color: '#d4d4d4', fontWeight: 300, marginBottom: '20px' }}>Writing about Ryoka?</p>
            <a href="mailto:p@ryoka.xyz?subject=Press" style={{ fontSize: '13px', color: '#666', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              Reach out
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="M2 12L12 2M12 2H5M12 2V9" stroke="#555" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          </div>

        </div>
      </div>

    </main>
  )
}
