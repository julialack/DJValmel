import { Link } from "react-router-dom"

const About = () => {
  return (
    <div className="container section-padding">
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "36px" }}>
        <span className="badge badge-purple" style={{ marginBottom: "8px" }}>BIOGRAFI & UTRUSTNING</span>
        <h1 className="section-title" style={{ fontSize: "clamp(2rem, 5vw, 3rem)", marginBottom: "12px" }}>
          Om DJ <span className="gradient-text">Valmel</span>
        </h1>
        <p style={{ color: "var(--text-muted)", fontSize: "clamp(0.95rem, 2vw, 1.1rem)", maxWidth: "700px", margin: "0 auto" }}>
          Över 10 års erfarenhet av att skapa fantastiska musikupplevelser på Sveriges största klubbar, bröllop och VIP-event.
        </p>
      </div>

      {/* Grid Section: Story & Picture */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px", alignItems: "center", marginBottom: "48px" }}>
        <div className="glass-panel-glow" style={{ padding: "30px", textAlign: "center" }}>
          <div style={{ fontSize: "3.8rem", margin: "10px 0" }}>🎛️🎧✨</div>
          <div style={{ display: "flex", gap: "8px", justifyContent: "center", flexWrap: "wrap", marginTop: "16px" }}>
            <span className="badge badge-primary">Club DJ</span>
            <span className="badge badge-purple">Producer</span>
            <span className="badge badge-gold">Event Master</span>
          </div>
        </div>

        <div>
          <h2 style={{ fontSize: "clamp(1.5rem, 3.5vw, 2rem)", color: "#fff", marginBottom: "14px" }}>
            Passion För Musik & <span className="gradient-text">Perfekt Stämning</span>
          </h2>
          <p style={{ color: "var(--text-main)", fontSize: "0.95rem", lineHeight: "1.7", marginBottom: "14px" }}>
            DJ Valmel började sin bana i Stockholms nattliv och har sedan dess vuxit till en av de mest anlitade DJ-profilerna för exklusiva evenemang. Med en fingertoppskänsla för publikens energi skapas en oavbruten musical journey.
          </p>
          <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: "1.6", marginBottom: "20px" }}>
            Oavsett om det gäller tung Tech House på en festivalscen, energifyllda 90-talsklassiker på ett 30-årskalas eller stämningsfull lounge-house på ett bröllop, anpassas alltid musiken i stunden.
          </p>

          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <Link to="/booking" className="btn btn-primary" style={{ flex: "1 1 200px" }}>
              ⚡ Boka För Ditt Event
            </Link>
            <Link to="/music" className="btn btn-secondary" style={{ flex: "1 1 200px" }}>
              🔊 Lyssna På Mixar
            </Link>
          </div>
        </div>
      </div>

      {/* Technical Equipment & Gear Spec Sheet */}
      <div className="glass-panel" style={{ padding: "28px" }}>
        <h3 style={{ fontSize: "clamp(1.3rem, 3vw, 1.7rem)", color: "#fff", marginBottom: "8px", display: "flex", alignItems: "center", gap: "10px" }}>
          <span>🔊</span> Professionell Ljud & Ljusutrustning
        </h3>
        <p style={{ color: "var(--text-muted)", marginBottom: "24px", fontSize: "0.9rem" }}>
          Vi använder endast branschledande utrustning i absolut högsta kvalitet för att garantera perfekt ljud och visuell show.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px" }}>
          <div style={{ background: "rgba(255,255,255,0.03)", padding: "16px", borderRadius: "10px", border: "1px solid var(--border-color)" }}>
            <h4 style={{ color: "var(--primary)", fontSize: "1rem", marginBottom: "8px" }}>🎛️ DJ Rig & Player</h4>
            <ul style={{ listStyle: "none", color: "var(--text-muted)", fontSize: "0.85rem", display: "flex", flexDirection: "column", gap: "6px" }}>
              <li>• 2x Pioneer CDJ-3000 Flagship</li>
              <li>• 1x Pioneer DJM-A9 4-Channel Mixer</li>
              <li>• Pioneer Rekordbox & Serato DJ Pro</li>
              <li>• Rekordbox DVS & Wireless Control</li>
            </ul>
          </div>

          <div style={{ background: "rgba(255,255,255,0.03)", padding: "16px", borderRadius: "10px", border: "1px solid var(--border-color)" }}>
            <h4 style={{ color: "var(--secondary)", fontSize: "1rem", marginBottom: "8px" }}>🔊 Sound & PA Systems</h4>
            <ul style={{ listStyle: "none", color: "var(--text-muted)", fontSize: "0.85rem", display: "flex", flexDirection: "column", gap: "6px" }}>
              <li>• HK Audio Elements Big Base PA</li>
              <li>• Electro-Voice EKX-15P Active Subwoofers</li>
              <li>• Sennheiser EW-D Digital Wireless Mics</li>
              <li>• Up to 10 000W Active RMS Power</li>
            </ul>
          </div>

          <div style={{ background: "rgba(255,255,255,0.03)", padding: "16px", borderRadius: "10px", border: "1px solid var(--border-color)" }}>
            <h4 style={{ color: "var(--accent-pink)", fontSize: "1rem", marginBottom: "8px" }}>💡 Light & Effects</h4>
            <ul style={{ listStyle: "none", color: "var(--text-muted)", fontSize: "0.85rem", display: "flex", flexDirection: "column", gap: "6px" }}>
              <li>• DMX Moving Head Spot Lights</li>
              <li>• Full RGB 3W Club Lasers</li>
              <li>• Wireless LED Ambient Uplights</li>
              <li>• Haze & Smoke FX Machines</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
