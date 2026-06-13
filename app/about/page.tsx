'use client'

import Navbar from '../components/Navbar'

export default function About() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#0D1821', fontFamily: 'Geist, Helvetica, Arial, sans-serif' }}>
      <Navbar />

      {/* Hero */}
      <div style={{ maxWidth: '980px', margin: '0 auto', padding: '140px 50px 0' }}>
        <p style={{ fontSize: '13px', color: '#555', letterSpacing: '0.08em', marginBottom: '24px' }}>About</p>
        <h1 style={{ fontSize: '80px', fontWeight: 900, lineHeight: '1.0', letterSpacing: '-0.03em', color: '#f0f0f0', marginBottom: '32px' }}>
          Small group.<br />Long game.
        </h1>
        <p style={{ fontSize: '25px', lineHeight: '38px', fontWeight: 300, color: '#d4d4d4', maxWidth: '980px' }}>
          Ryoka is a small, independent group founded in 2025. We build internet companies, make micro-acquisitions, and run experiments across digital assets. We are based in London and Taipei.
        </p>
      </div>

      {/* Body */}
      <div style={{ maxWidth: '980px', margin: '0 auto', padding: '100px 50px 0' }}>
        <p style={{ fontSize: '13px', color: '#555', letterSpacing: '0.08em', marginBottom: '24px' }}>How we operate</p>
        <p style={{ fontSize: '25px', lineHeight: '38px', fontWeight: 300, color: '#d4d4d4', maxWidth: '980px', marginBottom: '80px' }}>
          We are founder-led, independently held, and operating quietly for the long term. No outside mandates, no quarterly pressure. Just patient capital and deliberate ownership. Our builds, acquisitions, and experiments are funded by capital markets activity and revenue from the portfolio itself.
        </p>
        <p style={{ fontSize: '13px', color: '#555', letterSpacing: '0.08em', marginBottom: '24px' }}>On experiments</p>
        <p style={{ fontSize: '25px', lineHeight: '38px', fontWeight: 300, color: '#d4d4d4', maxWidth: '980px' }}>
          Not every idea is serious. Some are stupid on purpose. We believe the weird ones, the niche ones, the ones that probably will not work, are how you find the things that do. We run them anyway, cheaply and fast, and keep what compounds.
        </p>
      </div>

      {/* Divider */}
      <div style={{ maxWidth: '980px', margin: '0 auto', padding: '100px 50px 0' }}>
        <div style={{ borderTop: '0.5px solid #1a2a3a' }} />
      </div>

      {/* CTA */}
      <div style={{ maxWidth: '980px', margin: '0 auto', padding: '40px 50px 120px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <p style={{ fontSize: '18px', fontWeight: 300, color: '#555', maxWidth: '480px', lineHeight: '1.5' }}>
          Interested in a chat?
        </p>
        <a href="mailto:p@ryoka.xyz" style={{ fontSize: '18px', color: '#666', textDecoration: 'none', borderBottom: '1px solid #444', paddingBottom: '2px', letterSpacing: '0.06em', whiteSpace: 'nowrap', flexShrink: 0 }}>
          Get in touch
        </a>
      </div>

    </main>
  )
}
