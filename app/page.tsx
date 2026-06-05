export default function Home() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#1c1c1e', fontFamily: 'Geist, Helvetica, Arial, sans-serif' }}>
      <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '24px 50px 0', fontSize: '13px', color: '#666' }}>
        <span>Welcome</span>
        <a href="#" style={{ color: '#666', textDecoration: 'none' }}>Contact</a>
      </nav>
      <div style={{ maxWidth: '1228px', margin: '0 auto', padding: '118px 50px 0' }}>
        <h1 style={{ fontSize: '40px', fontWeight: 900, lineHeight: '50px', letterSpacing: '-0.03em', color: '#f0f0f0', marginBottom: '50px' }}>
          /ryo-ka/
        </h1>
        <p style={{ fontSize: '40px', lineHeight: '50px', fontWeight: 400, color: '#d4d4d4', marginBottom: '50px', marginRight: '180px' }}>
          Ryoka is a brand and design consultancy working from offices in London and Mallorca. We deliver creative thinking and world-class design across a wide range of disciplines for clients far and wide, big and small.
        </p>
        <p style={{ fontSize: '40px', lineHeight: '50px', fontWeight: 400, color: '#d4d4d4', marginRight: '180px' }}>
          We believe in the transformative power of ideas to generate business success.
        </p>
      </div>
    </main>
  )
}
