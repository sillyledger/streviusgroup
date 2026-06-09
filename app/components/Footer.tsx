import React from 'react'

export default function Footer() {
  const year = new Date().getFullYear()

  const col1 = [
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Legal', href: '/legal' },
  ]

  const col2 = [
    { label: 'Holdings', href: '/holdings' },
    { label: 'Markets', href: '/markets' },
    { label: 'Capital', href: '/capital' },
  ]

  const col3 = [
    { label: 'Login', href: '/login' },
  ]

  const linkStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '14px',
    fontWeight: 300,
    color: '#555',
    textDecoration: 'none',
    lineHeight: '1',
    transition: 'color 0.15s ease',
  }

  return (
    <footer style={{
      borderTop: '0.5px solid #2a2a2c',
      marginTop: '0',
      fontFamily: 'Geist, Helvetica, Arial, sans-serif',
    }}>
      <div style={{ maxWidth: '980px', margin: '0 auto', padding: '60px 50px 40px' }}>

        {/* Top row — wordmark + columns */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '40px', marginBottom: '60px' }}>

          {/* Wordmark */}
          <div style={{ flexShrink: 0 }}>
            <a href="/" style={{ textDecoration: 'none' }}>
              <span style={{ fontSize: '18px', fontWeight: 900, color: '#f0f0f0', letterSpacing: '-0.02em' }}>
                <span style={{ color: '#E8C840' }}>/</span>ryoka<span style={{ color: '#E8C840' }}>/</span>
              </span>
            </a>
          </div>

          {/* Nav columns */}
          <div style={{ display: 'flex', gap: '80px' }}>

            {/* Column 1 */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              {col1.map(({ label, href }) => (
                <FooterLink key={label} href={href} label={label} style={linkStyle} />
              ))}
            </div>

            {/* Column 2 */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              {col2.map(({ label, href }) => (
                <FooterLink key={label} href={href} label={label} style={linkStyle} />
              ))}
            </div>

            {/* Column 3 */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              {col3.map(({ label, href }) => (
                <FooterLink key={label} href={href} label={label} style={linkStyle} />
              ))}
            </div>

          </div>
        </div>

        {/* Bottom strip */}
        <div style={{ borderTop: '0.5px solid #2a2a2c', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <p style={{ fontSize: '12px', color: '#333', fontWeight: 300, margin: 0 }}>
            © {year} Ryoka. All rights reserved.
          </p>
          <p style={{ fontSize: '12px', color: '#333', fontWeight: 300, margin: 0 }}>
            ryoka.xyz
          </p>
        </div>

      </div>
    </footer>
  )
}

// Separate component so hover state works without 'use client' on the footer
function FooterLink({ href, label, style }: { href: string; label: string; style: React.CSSProperties }) {
  return (
    <a
      href={href}
      style={style}
      onMouseEnter={e => (e.currentTarget.style.color = '#888')}
      onMouseLeave={e => (e.currentTarget.style.color = '#555')}
    >
      {label}
    </a>
  )
}
