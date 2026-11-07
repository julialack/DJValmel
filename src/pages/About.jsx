import { Link } from "react-router-dom"

const About = () => {
  return (
    <div className="container section-padding">
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "60px" }}>
        <span className="badge badge-purple" style={{ marginBottom: "12px" }}>BIOGRAFI & UTRUSTNING</span>
        <h1 style={{ fontSize: "3rem", color: "#fff", fontWeight: "900", marginBottom: "16px" }}>
          Om DJ <span className="gradient-text">Valmel</span>
        </h1>
        <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", maxWidth: "700px", margin: "0 auto" }}>
          Över 10 års erfarenhet av att skapa fantastiska musikupplevelser på Sveriges största klubbar, bröllop och VIP-event.
        </p>
      </div>

      {/* Grid Section: Story & Picture */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "40px", alignItems: "center", marginBottom: "80px" }}>
        <div className="glass-panel-glow" style={{ padding: "40px", position: "relative", overflow: "hidden" }}>
          <div style={{ fontSize: "5rem", textAlign: "center", margin: "20px 0" }}>🎛️🎧✨</div>
          <div style={{ display: "flex", gap: "10px", justifyContent: "center", marginTop: "20px" }}>
            <span className="badge badge-primary">Club DJ</span>
            <span className="badge badge-purple">Producer</span>
            <span className="badge badge-gold">Event Master</span>
          </div>
        </div>

        <div>
          <h2 style={{ fontSize: "2rem", color: "#fff", marginBottom: "20px" }}>
            Passion För Musik & <span className="gradient-text">Perfekt Stämning</span>
          </h2>
          <p style={{ color: "var(--text-main)", fontSize: "1rem", lineHeight: "1.8", marginBottom: "16px" }}>
            DJ Valmel började sin bana i Stockholms nattliv och har sedan dess vuxit till en av de mest anlitade DJ-profilerna för exklusiva evenemang. Med en fingertoppskänsla för publikens energi skapas en oavbruten musical journey.
          </p>
          <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: "1.7", marginBottom: "24px" }}>
            Oavsett om det gäller tung Tech House på en festivalscen, energifyllda 90-talsklassiker på ett 30-årskalas eller stämningsfull lounge-house på ett bröllop, anpassas alltid musiken i stunden.
          </p>

          <div style={{ display: "flex", gap: "16px" }}>
            <Link to="/booking" className="btn btn-primary">
              ⚡ Boka För Ditt Event
            </Link>
            <Link to="/music" className="btn btn-secondary">
              🔊 Lyssna På Mixar
            </Link>
          </div>
        </div>
      </div>

      {/* Technical Equipment & Gear Spec Sheet */}
      <div className="glass-panel" style={{ padding: "40px", marginBottom: "60px" }}>
        <h3 style={{ fontSize: "1.8rem", color: "#fff", marginBottom: "10px", display: "flex", alignItems: "center", gap: "12px" }}>
          <span>🔊</span> Professionell Ljud & Ljusutrustning
        </h3>
        <p style={{ color: "var(--text-muted)", marginBottom: "30px", fontSize: "0.95rem" }}>
          Vi använder endast branschledande utrustning i absolut högsta kvalitet för att garantera perfekt ljud och visuell show.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "24px" }}>
          <div style={{ background: "rgba(255,255,255,0.03)", padding: "20px", borderRadius: "12px", border: "1px solid var(--border-color)" }}>
            <h4 style={{ color: "var(--primary)", fontSize: "1.1rem", marginBottom: "10px" }}>🎛️ DJ Rig & Player</h4>
            <ul style={{ listStyle: "none", color: "var(--text-muted)", fontSize: "0.9rem", display: "flex", flexDirection: "column", gap: "6px" }}>
              <li>• 2x Pioneer CDJ-3000 Flagship</li>
              <li>• 1x Pioneer DJM-A9 4-Channel Mixer</li>
              <li>• Pioneer Rekordbox & Serato DJ Pro</li>
              <li>• Rekordbox DVS & Wireless Control</li>
            </ul>
          </div>

          <div style={{ background: "rgba(255,255,255,0.03)", padding: "20px", borderRadius: "12px", border: "1px solid var(--border-color)" }}>
            <h4 style={{ color: "var(--secondary)", fontSize: "1.1rem", marginBottom: "10px" }}>🔊 Sound & PA Systems</h4>
            <ul style={{ listStyle: "none", color: "var(--text-muted)", fontSize: "0.9rem", display: "flex", flexDirection: "column", gap: "6px" }}>
              <li>• HK Audio Elements Big Base PA</li>
              <li>• Electro-Voice EKX-15P Active Subwoofers</li>
              <li>• Sennheiser EW-D Digital Wireless Mics</li>
              <li>• Up to 10 000W Active RMS Power</li>
            </ul>
          </div>

          <div style={{ background: "rgba(255,255,255,0.03)", padding: "20px", borderRadius: "12px", border: "1px solid var(--border-color)" }}>
            <h4 style={{ color: "var(--accent-pink)", fontSize: "1.1rem", marginBottom: "10px" }}>💡 Light & Effects</h4>
            <ul style={{ listStyle: "none", color: "var(--text-muted)", fontSize: "0.9rem", display: "flex", flexDirection: "column", gap: "6px" }}>
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
