export default function Studio() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#1c1c1e', fontFamily: 'Geist, Helvetica, Arial, sans-serif' }}>
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px 50px 0' }}>
        <a href="/" style={{ fontSize: '35px', fontWeight: 900, color: '#f0f0f0', letterSpacing: '-0.03em', textDecoration: 'none' }}>ryoka</a>
        <a href="mailto:p@ryoka.xyz" style={{ fontSize: '20px', color: '#666', textDecoration: 'none', borderBottom: '2px solid #E8C840', paddingBottom: '2px' }}>p@ryoka.xyz</a>
      </nav>

      <div style={{ maxWidth: '980px', margin: '0 auto', padding: '0 50px' }}>

        {/* Split hero */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', padding: '100px 0 80px', alignItems: 'end' }}>
          <div>
            <a href="/" style={{ fontSize: '11px', color: '#555', letterSpacing: '0.1em', textDecoration: 'none', display: 'inline-block', marginBottom: '40px' }}>← Back</a>
            <h1 style={{ fontSize: '80px', fontWeight: 900, lineHeight: '1.0', letterSpacing: '-0.03em', color: '#f0f0f0', margin: 0 }}>
              studio
            </h1>
          </div>
          <div style={{ paddingBottom: '6px' }}>
            <p style={{ fontSize: '20px', lineHeight: '30px', fontWeight: 300, color: '#888' }}>
              We turn ideas into experiments and experiments into assets. The studio is where Ryoka builds from scratch — products, tools, and brands that we own and operate directly.
            </p>
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '0.5px solid #2a2a2a', marginBottom: '40px' }}/>

        <p style={{ fontSize: '11px', color: '#444', letterSpacing: '0.12em', marginBottom: '32px' }}>Current builds</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: '#2a2a2a', marginBottom: '80px' }}>
          {[
            { num: '01', name: 'Two Docs', desc: 'A minimal writing and document tool. Built for focus. No noise, no bloat.', status: 'Live', live: true },
            { num: '02', name: 'Aegos Intel', desc: 'Company intelligence platform for professionals who need clarity fast.', status: 'Live', live: true },
            { num: '03', name: 'Story Brew', desc: 'Narrative content brand built for audiences that want depth over noise.', status: 'In progress', live: false },
            { num: '04', name: 'Untitled', desc: 'A new experiment in early development. Details coming soon.', status: 'Stealth', live: false },
          ].map((item) => (
            <div key={item.num} style={{ backgroundColor: '#1c1c1e', padding: '40px', display: 'grid', gridTemplateRows: '20px 48px 1fr 24px', gap: '16px' }}>
              <p style={{ fontSize: '11px', color: '#444', letterSpacing: '0.12em', margin: 0 }}>{item.num}</p>
              <p style={{ fontSize: '26px', fontWeight: 900, color: '#f0f0f0', letterSpacing: '-0.03em', lineHeight: 1, margin: 0, alignSelf: 'center' }}>{item.name}</p>
              <p style={{ fontSize: '13px', color: '#555', lineHeight: '1.6', margin: 0 }}>{item.desc}</p>
              <p style={{ fontSize: '11px', color: item.live ? '#E8C840' : '#444', letterSpacing: '0.08em', margin: 0, alignSelf: 'end' }}>{item.status}</p>
            </div>
          ))}
        </div>

        <hr style={{ border: 'none', borderTop: '0.5px solid #2a2a2a', marginBottom: '40px' }}/>

        <p style={{ fontSize: '11px', color: '#444', letterSpacing: '0.12em', marginBottom: '24px' }}>How we build</p>
        <p style={{ fontSize: '25px', lineHeight: '35px', fontWeight: 300, color: '#d4d4d4', maxWidth: '680px', marginBottom: '16px' }}>
          Every studio project starts as an internal experiment. A gap we spotted, a thesis we wanted to test, or a tool we wanted to use ourselves.
        </p>
        <p style={{ fontSize: '17px', lineHeight: '28px', fontWeight: 300, color: '#666', maxWidth: '580px' }}>
          We build lean, validate early, and hold what works. The studio is not an agency and we do not build for clients. Everything we make, we own.
        </p>

        <div style={{ borderTop: '0.5px solid #2a2a2a', marginTop: '60px', paddingTop: '60px', paddingBottom: '80px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <p style={{ fontSize: '16px', color: '#555' }}>Have an idea worth building together?</p>
          <a href="mailto:p@ryoka.xyz" style={{ fontSize: '16px', color: '#666', textDecoration: 'none', borderBottom: '2px solid #E8C840', paddingBottom: '2px' }}>p@ryoka.xyz</a>
        </div>

      </div>
    </main>
  )
}
