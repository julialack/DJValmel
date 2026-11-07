import { Link } from "react-router-dom"
import { useBooking } from "../context/BookingContext"

const Home = () => {
  const { gigs } = useBooking()
  const upcomingGig = gigs[0] || { title: "Club Neon", date: "2025-04-12", location: "Stockholm" }

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        {/* Background ambient glow shapes */}
        <div className="hero-glow-bg" />

        <div className="container">
          {/* Top Gig Notification Pill */}
          <div style={{ display: "inline-flex", marginBottom: "16px" }}>
            <div className="badge badge-primary pulse" style={{ padding: "6px 14px", fontSize: "0.8rem", gap: "8px" }}>
              <span>🔥 Nästa Spelning:</span>
              <span style={{ color: "#fff" }}>{upcomingGig.title} - {upcomingGig.location} ({upcomingGig.date})</span>
            </div>
          </div>

          {/* Hero Main Heading */}
          <h1 className="hero-title">
            Skapar Oglömliga Kvällar & <br />
            <span className="gradient-text">Nattklubbsmagi</span>
          </h1>

          <p className="hero-subtitle">
            Sveriges mest energifyllda DJ-upplevelse för nattklubbar, festivaler, bröllop och VIP-företagsevent. Med skräddarsydd musik, professionellt ljud och ljus.
          </p>

          {/* Hero Buttons */}
          <div className="hero-buttons">
            <Link to="/booking" className="btn btn-primary" style={{ padding: "14px 28px", fontSize: "1rem" }}>
              ⚡ Boka DJ Valmel Nu
            </Link>
            <Link to="/music" className="btn btn-secondary" style={{ padding: "14px 28px", fontSize: "1rem" }}>
              🎧 Lyssna På Mixar
            </Link>
          </div>

          {/* Quick Stats Grid */}
          <div className="glass-panel stats-grid">
            <div className="stat-item">
              <div className="stat-number" style={{ color: "var(--primary)" }}>500+</div>
              <div className="stat-label">Spelningar & Event</div>
            </div>
            <div className="stat-item">
              <div className="stat-number" style={{ color: "var(--secondary)" }}>100%</div>
              <div className="stat-label">Nöjda Kundbetyg</div>
            </div>
            <div className="stat-item">
              <div className="stat-number" style={{ color: "var(--accent-pink)" }}>10 kW+</div>
              <div className="stat-label">Pro Ljud & Lasersystem</div>
            </div>
            <div className="stat-item">
              <div className="stat-number" style={{ color: "var(--accent-gold)" }}>Top 10</div>
              <div className="stat-label">Nattklubbs-DJ i Sverige</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Showcase */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header">
            <span className="badge badge-purple" style={{ marginBottom: "8px" }}>EVENT & TJÄNSTER</span>
            <h2 className="section-title">Skräddarsydd Stämning För Alla Tillfällen</h2>
          </div>

          <div className="cards-grid">
            <div className="glass-panel card-item">
              <div style={{ fontSize: "2.2rem", marginBottom: "12px" }}>👰</div>
              <h3 style={{ color: "#fff", fontSize: "1.2rem", marginBottom: "8px" }}>Bröllop & Jubileum</h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginBottom: "16px" }}>
                Från stämningsfull mingelmusik och brudvals till ösigt dansgolv hela natten. Vi anpassar låtvalen efter er smak.
              </p>
              <Link to="/booking" style={{ color: "var(--primary)", fontWeight: "600", fontSize: "0.9rem", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                Läs mer & boka →
              </Link>
            </div>

            <div className="glass-panel card-item" style={{ border: "1px solid rgba(0, 242, 254, 0.3)" }}>
              <div style={{ fontSize: "2.2rem", marginBottom: "12px" }}>🪩</div>
              <h3 style={{ color: "#fff", fontSize: "1.2rem", marginBottom: "8px" }}>Nattklubb & Festival</h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginBottom: "16px" }}>
                High-energy set med det senaste inom Commercial House, EDM, Tech House & Club Bangers som håller dansgolvet fullt.
              </p>
              <Link to="/booking" style={{ color: "var(--primary)", fontWeight: "600", fontSize: "0.9rem", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                Läs mer & boka →
              </Link>
            </div>

            <div className="glass-panel card-item">
              <div style={{ fontSize: "2.2rem", marginBottom: "12px" }}>👔</div>
              <h3 style={{ color: "#fff", fontSize: "1.2rem", marginBottom: "8px" }}>Företagsevent & Gala</h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginBottom: "16px" }}>
                Professionellt helhetskoncept för personalfester, kundevent och galor med diskret teknik och elegant scenshow.
              </p>
              <Link to="/booking" style={{ color: "var(--primary)", fontWeight: "600", fontSize: "0.9rem", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                Läs mer & boka →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Packages Overview */}
      <section className="section-padding" style={{ background: "rgba(10, 12, 20, 0.5)", borderTop: "1px solid var(--border-color)" }}>
        <div className="container">
          <div className="section-header">
            <span className="badge badge-gold" style={{ marginBottom: "8px" }}>POPULÄRA PAKET</span>
            <h2 className="section-title">Välj Det Perfekta DJ-Paketet</h2>
          </div>

          <div className="cards-grid">
            {/* Package 1 */}
            <div className="glass-panel card-item" style={{ display: "flex", flexDirection: "column" }}>
              <span className="badge badge-primary" style={{ width: "fit-content", marginBottom: "12px" }}>BASIC DJ</span>
              <h3 style={{ color: "#fff", fontSize: "1.4rem", marginBottom: "6px" }}>Standard Club Setup</h3>
              <div style={{ fontSize: "1.8rem", fontWeight: "800", color: "#fff", marginBottom: "16px" }}>
                8 500 <span style={{ fontSize: "0.9rem", color: "var(--text-muted)", fontWeight: "normal" }}>kr ex. moms</span>
              </div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", color: "var(--text-muted)", fontSize: "0.9rem", marginBottom: "24px", flex: 1 }}>
                <li>✅ Upp till 4 timmars aktivt DJ-set</li>
                <li>✅ Pioneer CDJ + Mixer setup</li>
                <li>✅ Kompakt PA-ljudsystem (upp till 100 pers)</li>
                <li>✅ Grundläggande stämningsbelysning</li>
              </ul>
              <Link to="/booking" className="btn btn-secondary" style={{ width: "100%" }}>
                Välj Basic Paket
              </Link>
            </div>

            {/* Package 2 (Featured) */}
            <div className="glass-panel-glow card-item" style={{ display: "flex", flexDirection: "column", position: "relative" }}>
              <div style={{
                position: "absolute",
                top: "-12px",
                right: "16px",
                background: "linear-gradient(135deg, #00f2fe, #7209b7)",
                color: "#fff",
                padding: "3px 12px",
                borderRadius: "20px",
                fontSize: "0.75rem",
                fontWeight: "700"
              }}>
                MEST POPULÄR
              </div>
              <span className="badge badge-purple" style={{ width: "fit-content", marginBottom: "12px" }}>PREMIUM CLUB</span>
              <h3 style={{ color: "#fff", fontSize: "1.4rem", marginBottom: "6px" }}>Pro Concert & Party</h3>
              <div style={{ fontSize: "1.8rem", fontWeight: "800", color: "#fff", marginBottom: "16px" }}>
                14 500 <span style={{ fontSize: "0.9rem", color: "var(--text-muted)", fontWeight: "normal" }}>kr ex. moms</span>
              </div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", color: "var(--text-muted)", fontSize: "0.9rem", marginBottom: "24px", flex: 1 }}>
                <li>✅ Upp till 6 timmars speltid</li>
                <li>✅ Kraftfullt HK Audio Sound System (upp till 300 pers)</li>
                <li>✅ DMX Moving Head Ljusshow & Moving Laser</li>
                <li>✅ Trådlös mikrofon för tal & uppträdanden</li>
                <li>✅ Skräddarsydd låtlista & önskelåtar online</li>
              </ul>
              <Link to="/booking" className="btn btn-primary" style={{ width: "100%" }}>
                Välj Premium Paket
              </Link>
            </div>

            {/* Package 3 */}
            <div className="glass-panel card-item" style={{ display: "flex", flexDirection: "column" }}>
              <span className="badge badge-gold" style={{ width: "fit-content", marginBottom: "12px" }}>GOLD VIP</span>
              <h3 style={{ color: "#fff", fontSize: "1.4rem", marginBottom: "6px" }}>Full Festival Experience</h3>
              <div style={{ fontSize: "1.8rem", fontWeight: "800", color: "#fff", marginBottom: "16px" }}>
                22 000 <span style={{ fontSize: "0.9rem", color: "var(--text-muted)", fontWeight: "normal" }}>kr ex. moms</span>
              </div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", color: "var(--text-muted)", fontSize: "0.9rem", marginBottom: "24px", flex: 1 }}>
                <li>✅ Obegränsad speltid under kvällen</li>
                <li>✅ Massive Subwoofer Setup (upp till 1000 pers)</li>
                <li>✅ Rökmaskin, CO2 Jet-simulator & Full Lasershow</li>
                <li>✅ DJ Valmel + Live Saxofonist / Performer möjlighet</li>
                <li>✅ VIP Support & Teknisk ljudtekniker på plats</li>
              </ul>
              <Link to="/booking" className="btn btn-purple" style={{ width: "100%" }}>
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
            <span className="badge badge-primary" style={{ marginBottom: "8px" }}>BETYG & RECENSIONER</span>
            <h2 className="section-title">Vad Kunderna Säger</h2>
          </div>

          <div className="cards-grid">
            <div className="glass-panel card-item">
              <div style={{ color: "var(--accent-gold)", fontSize: "1.1rem", marginBottom: "8px" }}>★★★★★</div>
              <p style={{ color: "var(--text-main)", fontStyle: "italic", marginBottom: "12px", fontSize: "0.9rem" }}>
                "DJ Valmel gjorde vårt bröllop på Villa Pauli helt magiskt! Dansgolvet var proppfullt från första sekunden till sista låten kl 03:00."
              </p>
              <div style={{ fontWeight: "600", color: "#fff", fontSize: "0.85rem" }}>- Erik & Sofia, Bröllop</div>
            </div>

            <div className="glass-panel card-item">
              <div style={{ color: "var(--accent-gold)", fontSize: "1.1rem", marginBottom: "8px" }}>★★★★★</div>
              <p style={{ color: "var(--text-main)", fontStyle: "italic", marginBottom: "12px", fontSize: "0.9rem" }}>
                "Vi anlitade Valmel för vår stora företagsgala. Otrolig känsla för publiken, ljudet var i absolut världsklass!"
              </p>
              <div style={{ fontWeight: "600", color: "#fff", fontSize: "0.85rem" }}>- Event Manager, Spotify</div>
            </div>

            <div className="glass-panel card-item">
              <div style={{ color: "var(--accent-gold)", fontSize: "1.1rem", marginBottom: "8px" }}>★★★★★</div>
              <p style={{ color: "var(--text-main)", fontStyle: "italic", marginBottom: "12px", fontSize: "0.9rem" }}>
                "En av de bästa klubb-DJ:s vi haft på Berns. Sjuk energi och perfekt mixade överskångar."
              </p>
              <div style={{ fontWeight: "600", color: "#fff", fontSize: "0.85rem" }}>- Nattklubbschef, Stockholm</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
