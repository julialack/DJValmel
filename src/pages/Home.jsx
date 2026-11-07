import { Link } from "react-router-dom"
import { useBooking } from "../context/BookingContext"

const Home = () => {
  const { gigs } = useBooking()
  const upcomingGig = gigs[0] || { title: "Club Neon", date: "2025-04-12", location: "Stockholm" }

  return (
    <div>
      {/* Hero Section - Mobile First */}
      <section className="hero-section">
        <div className="container">
          {/* Gig Pill */}
          <div style={{ display: "inline-flex", marginBottom: "12px" }}>
            <div className="badge badge-primary pulse" style={{ padding: "6px 12px", fontSize: "0.78rem" }}>
              🔥 {upcomingGig.title} • {upcomingGig.location} ({upcomingGig.date})
            </div>
          </div>

          {/* Hero Main Heading */}
          <h1 className="hero-title">
            Skapar Oglömliga Kvällar & <br />
            <span className="gradient-text">Nattklubbsmagi</span>
          </h1>

          <p className="hero-subtitle">
            Sveriges mest energifyllda DJ-upplevelse för nattklubbar, festivaler, bröllop och VIP-event. Med skräddarsydd musik, professionellt ljud och ljus.
          </p>

          {/* Hero Buttons (Mobile first: full width stacked) */}
          <div className="hero-buttons">
            <Link to="/booking" className="btn btn-primary">
              ⚡ Boka DJ Valmel Nu
            </Link>
            <Link to="/music" className="btn btn-secondary">
              🎧 Lyssna På Mixar
            </Link>
          </div>

          {/* Quick Stats Grid */}
          <div className="glass-panel stats-grid">
            <div className="stat-item">
              <div className="stat-number" style={{ color: "var(--primary)" }}>500+</div>
              <div className="stat-label">Spelningar</div>
            </div>
            <div className="stat-item">
              <div className="stat-number" style={{ color: "var(--secondary)" }}>100%</div>
              <div className="stat-label">Nöjda Kunder</div>
            </div>
            <div className="stat-item">
              <div className="stat-number" style={{ color: "var(--accent-pink)" }}>10 kW+</div>
              <div className="stat-label">Pro Ljud/Ljus</div>
            </div>
            <div className="stat-item">
              <div className="stat-number" style={{ color: "var(--accent-gold)" }}>Top 10</div>
              <div className="stat-label">Klubb-DJ</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Showcase */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header">
            <span className="badge badge-purple" style={{ marginBottom: "6px" }}>EVENT & TJÄNSTER</span>
            <h2 className="section-title">Skräddarsydd Stämning För Alla Tillfällen</h2>
          </div>

          <div className="cards-grid">
            <div className="glass-panel card-item">
              <div style={{ fontSize: "2rem", marginBottom: "10px" }}>👰</div>
              <h3 style={{ color: "#fff", fontSize: "1.15rem", marginBottom: "6px" }}>Bröllop & Fest</h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.88rem", marginBottom: "14px" }}>
                Från stämningsfull mingelmusik och brudvals till ösigt dansgolv hela natten. Vi anpassar låtvalen efter er smak.
              </p>
              <Link to="/booking" style={{ color: "var(--primary)", fontWeight: "700", fontSize: "0.85rem", display: "inline-flex", alignItems: "center", gap: "4px" }}>
                Boka för bröllop →
              </Link>
            </div>

            <div className="glass-panel card-item" style={{ border: "1px solid rgba(0, 242, 254, 0.3)" }}>
              <div style={{ fontSize: "2rem", marginBottom: "10px" }}>🪩</div>
              <h3 style={{ color: "#fff", fontSize: "1.15rem", marginBottom: "6px" }}>Nattklubb & Festival</h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.88rem", marginBottom: "14px" }}>
                High-energy set med det senaste inom Commercial House, EDM, Tech House & Club Bangers som håller dansgolvet fullt.
              </p>
              <Link to="/booking" style={{ color: "var(--primary)", fontWeight: "700", fontSize: "0.85rem", display: "inline-flex", alignItems: "center", gap: "4px" }}>
                Boka för nattklubb →
              </Link>
            </div>

            <div className="glass-panel card-item">
              <div style={{ fontSize: "2rem", marginBottom: "10px" }}>👔</div>
              <h3 style={{ color: "#fff", fontSize: "1.15rem", marginBottom: "6px" }}>Företagsevent & Gala</h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.88rem", marginBottom: "14px" }}>
                Professionellt helhetskoncept för personalfester, kundevent och galor med diskret teknik och elegant scenshow.
              </p>
              <Link to="/booking" style={{ color: "var(--primary)", fontWeight: "700", fontSize: "0.85rem", display: "inline-flex", alignItems: "center", gap: "4px" }}>
                Boka för företag →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Packages Overview */}
      <section className="section-padding" style={{ background: "rgba(10, 12, 20, 0.5)", borderTop: "1px solid var(--border-color)" }}>
        <div className="container">
          <div className="section-header">
            <span className="badge badge-gold" style={{ marginBottom: "6px" }}>POPULÄRA PAKET</span>
            <h2 className="section-title">Välj Det Perfekta DJ-Paketet</h2>
          </div>

          <div className="cards-grid">
            {/* Package 1 */}
            <div className="glass-panel card-item" style={{ display: "flex", flexDirection: "column" }}>
              <span className="badge badge-primary" style={{ width: "fit-content", marginBottom: "10px" }}>BASIC DJ</span>
              <h3 style={{ color: "#fff", fontSize: "1.3rem", marginBottom: "4px" }}>Standard Club Setup</h3>
              <div style={{ fontSize: "1.6rem", fontWeight: "800", color: "#fff", marginBottom: "14px" }}>
                8 500 <span style={{ fontSize: "0.85rem", color: "var(--text-muted)", fontWeight: "normal" }}>kr ex. moms</span>
              </div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px", color: "var(--text-muted)", fontSize: "0.88rem", marginBottom: "20px", flex: 1 }}>
                <li>✅ Upp till 4 timmars aktivt DJ-set</li>
                <li>✅ Pioneer CDJ + Mixer setup</li>
                <li>✅ Kompakt PA-ljudsystem (upp till 100 pers)</li>
                <li>✅ Stämningsbelysning</li>
              </ul>
              <Link to="/booking" className="btn btn-secondary">
                Välj Basic Paket
              </Link>
            </div>

            {/* Package 2 (Featured) */}
            <div className="glass-panel-glow card-item" style={{ display: "flex", flexDirection: "column", position: "relative" }}>
              <div style={{
                position: "absolute",
                top: "-10px",
                right: "14px",
                background: "linear-gradient(135deg, #00f2fe, #7209b7)",
                color: "#fff",
                padding: "2px 10px",
                borderRadius: "20px",
                fontSize: "0.72rem",
                fontWeight: "700"
              }}>
                MEST POPULÄR
              </div>
              <span className="badge badge-purple" style={{ width: "fit-content", marginBottom: "10px" }}>PREMIUM CLUB</span>
              <h3 style={{ color: "#fff", fontSize: "1.3rem", marginBottom: "4px" }}>Pro Concert & Party</h3>
              <div style={{ fontSize: "1.6rem", fontWeight: "800", color: "#fff", marginBottom: "14px" }}>
                14 500 <span style={{ fontSize: "0.85rem", color: "var(--text-muted)", fontWeight: "normal" }}>kr ex. moms</span>
              </div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px", color: "var(--text-muted)", fontSize: "0.88rem", marginBottom: "20px", flex: 1 }}>
                <li>✅ Upp till 6 timmars speltid</li>
                <li>✅ Kraftfullt HK Audio PA (upp till 300 pers)</li>
                <li>✅ DMX Moving Head Ljus & Lasershow</li>
                <li>✅ Trådlös mikrofon för tal</li>
                <li>✅ Skräddarsydd låtlista online</li>
              </ul>
              <Link to="/booking" className="btn btn-primary">
                Välj Premium Paket
              </Link>
            </div>

            {/* Package 3 */}
            <div className="glass-panel card-item" style={{ display: "flex", flexDirection: "column" }}>
              <span className="badge badge-gold" style={{ width: "fit-content", marginBottom: "10px" }}>GOLD VIP</span>
              <h3 style={{ color: "#fff", fontSize: "1.3rem", marginBottom: "4px" }}>Full Festival Experience</h3>
              <div style={{ fontSize: "1.6rem", fontWeight: "800", color: "#fff", marginBottom: "14px" }}>
                22 000 <span style={{ fontSize: "0.85rem", color: "var(--text-muted)", fontWeight: "normal" }}>kr ex. moms</span>
              </div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px", color: "var(--text-muted)", fontSize: "0.88rem", marginBottom: "20px", flex: 1 }}>
                <li>✅ Obegränsad speltid under kvällen</li>
                <li>✅ Massive Subwoofer Setup (upp till 1000 pers)</li>
                <li>✅ Rökmaskin & CO2 Jet-simulator</li>
                <li>✅ DJ Valmel + Live Saxofonist möjlighet</li>
                <li>✅ VIP Support på plats</li>
              </ul>
              <Link to="/booking" className="btn btn-purple">
                Välj Gold VIP Paket
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header">
            <span className="badge badge-primary" style={{ marginBottom: "6px" }}>RECENSIONER</span>
            <h2 className="section-title">Vad Kunderna Säger</h2>
          </div>

          <div className="cards-grid">
            <div className="glass-panel card-item">
              <div style={{ color: "var(--accent-gold)", fontSize: "1rem", marginBottom: "6px" }}>★★★★★</div>
              <p style={{ color: "var(--text-main)", fontStyle: "italic", marginBottom: "10px", fontSize: "0.88rem" }}>
                "DJ Valmel gjorde vårt bröllop på Villa Pauli helt magiskt! Dansgolvet var proppfullt hela natten."
              </p>
              <div style={{ fontWeight: "700", color: "#fff", fontSize: "0.82rem" }}>- Erik & Sofia, Bröllop</div>
            </div>

            <div className="glass-panel card-item">
              <div style={{ color: "var(--accent-gold)", fontSize: "1rem", marginBottom: "6px" }}>★★★★★</div>
              <p style={{ color: "var(--text-main)", fontStyle: "italic", marginBottom: "10px", fontSize: "0.88rem" }}>
                "Vi anlitade Valmel för vår stora företagsgala. Otrolig känsla för publiken och världsklassljud!"
              </p>
              <div style={{ fontWeight: "700", color: "#fff", fontSize: "0.82rem" }}>- Event Manager, Spotify</div>
            </div>

            <div className="glass-panel card-item">
              <div style={{ color: "var(--accent-gold)", fontSize: "1rem", marginBottom: "6px" }}>★★★★★</div>
              <p style={{ color: "var(--text-main)", fontStyle: "italic", marginBottom: "10px", fontSize: "0.88rem" }}>
                "En av de bästa klubb-DJ:s vi haft på Berns. Sjuk energi och perfekt mixade överskångar."
              </p>
              <div style={{ fontWeight: "700", color: "#fff", fontSize: "0.82rem" }}>- Nattklubbschef, Stockholm</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
