import { Link } from "react-router-dom"
import { useBooking } from "../context/BookingContext"

const Home = () => {
  const { gigs } = useBooking()
  const upcomingGig = gigs[0] || { title: "Club Neon", date: "2025-04-12", location: "Stockholm" }

  return (
    <div>
      {/* Hero Section */}
      <section style={{
        position: "relative",
        padding: "100px 0 80px",
        textAlign: "center",
        overflow: "hidden"
      }}>
        {/* Background ambient glow shapes */}
        <div style={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "350px",
          background: "radial-gradient(circle, rgba(0,242,254,0.2) 0%, rgba(157,78,221,0.15) 50%, transparent 70%)",
          filter: "blur(60px)",
          zIndex: -1
        }} />

        <div className="container">
          {/* Top Gig Notification Pill */}
          <div style={{ display: "inline-flex", marginBottom: "24px" }}>
            <div className="badge badge-primary pulse" style={{ padding: "8px 18px", fontSize: "0.85rem", gap: "10px" }}>
              <span>🔥 Nästa Spelning:</span>
              <span style={{ color: "#fff" }}>{upcomingGig.title} - {upcomingGig.location} ({upcomingGig.date})</span>
            </div>
          </div>

          {/* Hero Main Heading */}
          <h1 style={{
            fontSize: "clamp(2.5rem, 6vw, 4.8rem)",
            fontWeight: "900",
            lineHeight: "1.1",
            letterSpacing: "-1px",
            color: "#fff",
            marginBottom: "24px"
          }}>
            Skapar Oglömliga Kvällar & <br />
            <span className="gradient-text">Nattklubbsmagi</span>
          </h1>

          <p style={{
            fontSize: "clamp(1.1rem, 2vw, 1.3rem)",
            color: "var(--text-muted)",
            maxWidth: "750px",
            margin: "0 auto 36px",
            lineHeight: "1.6"
          }}>
            Sveriges mest energifyllda DJ-upplevelse för nattklubbar, festivaler, bröllop och VIP-företagsevent. Med skräddarsydd musik, professionellt ljud och ljus.
          </p>

          {/* Hero Buttons */}
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap", marginBottom: "60px" }}>
            <Link to="/booking" className="btn btn-primary" style={{ padding: "16px 36px", fontSize: "1.1rem" }}>
              ⚡ Boka DJ Valmel Nu
            </Link>
            <Link to="/music" className="btn btn-secondary" style={{ padding: "16px 36px", fontSize: "1.1rem" }}>
              🎧 Lyssna På Mixar
            </Link>
          </div>

          {/* Quick Stats Grid */}
          <div className="glass-panel" style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "24px",
            padding: "30px",
            maxWidth: "1000px",
            margin: "0 auto"
          }}>
            <div>
              <div style={{ fontSize: "2.4rem", fontWeight: "800", color: "var(--primary)" }}>500+</div>
              <div style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>Spelningar & Event</div>
            </div>
            <div>
              <div style={{ fontSize: "2.4rem", fontWeight: "800", color: "var(--secondary)" }}>100%</div>
              <div style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>Nöjda Kundbetyg</div>
            </div>
            <div>
              <div style={{ fontSize: "2.4rem", fontWeight: "800", color: "var(--accent-pink)" }}>10 kW+</div>
              <div style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>Pro Ljud & Lasersystem</div>
            </div>
            <div>
              <div style={{ fontSize: "2.4rem", fontWeight: "800", color: "var(--accent-gold)" }}>Top 10</div>
              <div style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>Nattklubbs-DJ i Sverige</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Showcase */}
      <section className="section-padding">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <span className="badge badge-purple" style={{ marginBottom: "12px" }}>EVENT & TJÄNSTER</span>
            <h2 style={{ fontSize: "2.4rem", color: "#fff", fontWeight: "800" }}>Skräddarsydd Stämning För Alla Tillfällen</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
            <div className="glass-panel" style={{ padding: "32px", transition: "transform 0.3s" }}>
              <div style={{ fontSize: "2.5rem", marginBottom: "16px" }}>👰</div>
              <h3 style={{ color: "#fff", fontSize: "1.3rem", marginBottom: "12px" }}>Bröllop & Jubileum</h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", marginBottom: "20px" }}>
                Från stämningsfull mingelmusik och brudvals till ösigt dansgolv hela natten. Vi anpassar låtvalen efter er smak.
              </p>
              <Link to="/booking" style={{ color: "var(--primary)", fontWeight: "600", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                Läs mer & boka →
              </Link>
            </div>

            <div className="glass-panel" style={{ padding: "32px", border: "1px solid rgba(0, 242, 254, 0.3)" }}>
              <div style={{ fontSize: "2.5rem", marginBottom: "16px" }}>🪩</div>
              <h3 style={{ color: "#fff", fontSize: "1.3rem", marginBottom: "12px" }}>Nattklubb & Festival</h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", marginBottom: "20px" }}>
                High-energy set med det senaste inom Commercial House, EDM, Tech House & Club Bangers som håller dansgolvet fullt.
              </p>
              <Link to="/booking" style={{ color: "var(--primary)", fontWeight: "600", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                Läs mer & boka →
              </Link>
            </div>

            <div className="glass-panel" style={{ padding: "32px" }}>
              <div style={{ fontSize: "2.5rem", marginBottom: "16px" }}>👔</div>
              <h3 style={{ color: "#fff", fontSize: "1.3rem", marginBottom: "12px" }}>Företagsevent & Gala</h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", marginBottom: "20px" }}>
                Professionellt helhetskoncept för personalfester, kundevent och galor med diskret teknik och elegant scenshow.
              </p>
              <Link to="/booking" style={{ color: "var(--primary)", fontWeight: "600", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                Läs mer & boka →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Packages Overview */}
      <section className="section-padding" style={{ background: "rgba(10, 12, 20, 0.5)", borderTop: "1px solid var(--border-color)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <span className="badge badge-gold" style={{ marginBottom: "12px" }}>POPULÄRA PAKET</span>
            <h2 style={{ fontSize: "2.4rem", color: "#fff", fontWeight: "800" }}>Välj Det Perfekta DJ-Paketet</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px" }}>
            {/* Package 1 */}
            <div className="glass-panel" style={{ padding: "36px", display: "flex", flexDirection: "column" }}>
              <span className="badge badge-primary" style={{ width: "fit-content", marginBottom: "16px" }}>BASIC DJ</span>
              <h3 style={{ color: "#fff", fontSize: "1.6rem", marginBottom: "8px" }}>Standard Club Setup</h3>
              <div style={{ fontSize: "2rem", fontWeight: "800", color: "#fff", marginBottom: "20px" }}>
                8 500 <span style={{ fontSize: "1rem", color: "var(--text-muted)", fontWeight: "normal" }}>kr ex. moms</span>
              </div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px", color: "var(--text-muted)", fontSize: "0.95rem", marginBottom: "30px", flex: 1 }}>
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
            <div className="glass-panel-glow" style={{ padding: "36px", display: "flex", flexDirection: "column", position: "relative" }}>
              <div style={{
                position: "absolute",
                top: "-14px",
                right: "24px",
                background: "linear-gradient(135deg, #00f2fe, #7209b7)",
                color: "#fff",
                padding: "4px 16px",
                borderRadius: "20px",
                fontSize: "0.8rem",
                fontWeight: "700"
              }}>
                MEST POPULÄR
              </div>
              <span className="badge badge-purple" style={{ width: "fit-content", marginBottom: "16px" }}>PREMIUM CLUB</span>
              <h3 style={{ color: "#fff", fontSize: "1.6rem", marginBottom: "8px" }}>Pro Concert & Party</h3>
              <div style={{ fontSize: "2rem", fontWeight: "800", color: "#fff", marginBottom: "20px" }}>
                14 500 <span style={{ fontSize: "1rem", color: "var(--text-muted)", fontWeight: "normal" }}>kr ex. moms</span>
              </div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px", color: "var(--text-muted)", fontSize: "0.95rem", marginBottom: "30px", flex: 1 }}>
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
            <div className="glass-panel" style={{ padding: "36px", display: "flex", flexDirection: "column" }}>
              <span className="badge badge-gold" style={{ width: "fit-content", marginBottom: "16px" }}>GOLD VIP</span>
              <h3 style={{ color: "#fff", fontSize: "1.6rem", marginBottom: "8px" }}>Full Festival Experience</h3>
              <div style={{ fontSize: "2rem", fontWeight: "800", color: "#fff", marginBottom: "20px" }}>
                22 000 <span style={{ fontSize: "1rem", color: "var(--text-muted)", fontWeight: "normal" }}>kr ex. moms</span>
              </div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px", color: "var(--text-muted)", fontSize: "0.95rem", marginBottom: "30px", flex: 1 }}>
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
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <span className="badge badge-primary" style={{ marginBottom: "12px" }}>BETYG & RECENSIONER</span>
            <h2 style={{ fontSize: "2.4rem", color: "#fff", fontWeight: "800" }}>Vad Kunderna Säger</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
            <div className="glass-panel" style={{ padding: "28px" }}>
              <div style={{ color: "var(--accent-gold)", fontSize: "1.2rem", marginBottom: "12px" }}>★★★★★</div>
              <p style={{ color: "var(--text-main)", fontStyle: "italic", marginBottom: "16px", fontSize: "0.95rem" }}>
                "DJ Valmel gjorde vårt bröllop på Villa Pauli helt magiskt! Dansgolvet var proppfullt från första sekunden till sista låten kl 03:00."
              </p>
              <div style={{ fontWeight: "600", color: "#fff", fontSize: "0.9rem" }}>- Erik & Sofia, Bröllop</div>
            </div>

            <div className="glass-panel" style={{ padding: "28px" }}>
              <div style={{ color: "var(--accent-gold)", fontSize: "1.2rem", marginBottom: "12px" }}>★★★★★</div>
              <p style={{ color: "var(--text-main)", fontStyle: "italic", marginBottom: "16px", fontSize: "0.95rem" }}>
                "Vi anlitade Valmel för vår stora företagsgala. Otrolig känsla för publiken, ljudet var i absolut världsklass!"
              </p>
              <div style={{ fontWeight: "600", color: "#fff", fontSize: "0.9rem" }}>- Event Manager, Spotify</div>
            </div>

            <div className="glass-panel" style={{ padding: "28px" }}>
              <div style={{ color: "var(--accent-gold)", fontSize: "1.2rem", marginBottom: "12px" }}>★★★★★</div>
              <p style={{ color: "var(--text-main)", fontStyle: "italic", marginBottom: "16px", fontSize: "0.95rem" }}>
                "En av de bästa klubb-DJ:s vi haft på Berns. Sjuk energi och perfekt mixade överskångar."
              </p>
              <div style={{ fontWeight: "600", color: "#fff", fontSize: "0.9rem" }}>- Nattklubbschef, Stockholm</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
