import Link from 'next/link'

export default function Navbar() {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px 50px 0' }}>
      <Link href="/">
        <img src="/ryoka-mark.svg" alt="Ryoka" style={{ height: '60px' }} />
      </Link>
      <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
        <Link href="/holdings" style={{ fontSize: '20px', color: '#666', textDecoration: 'none', letterSpacing: '0.06em' }}>Holdings</Link>
        <Link href="/markets" style={{ fontSize: '20px', color: '#666', textDecoration: 'none', letterSpacing: '0.06em' }}>Markets</Link>
        <Link href="/capital" style={{ fontSize: '20px', color: '#666', textDecoration: 'none', letterSpacing: '0.06em' }}>Capital</Link>
        <Link href="/about" style={{ fontSize: '20px', color: '#666', textDecoration: 'none', letterSpacing: '0.06em' }}>About</Link>
        <a href="mailto:p@ryoka.xyz" style={{ fontSize: '20px', color: '#666', textDecoration: 'none', borderBottom: '1px solid #E8C840', paddingBottom: '2px' }}>Contact</a>
      </div>
    </nav>
  )
}
