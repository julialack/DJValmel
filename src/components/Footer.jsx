import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

const Footer = () => {
  const { user } = useAuth()

  return (
    <footer style={{ background: "#05060a", borderTop: "1px solid var(--border-color)", padding: "50px 0 30px", marginTop: "auto" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "40px", marginBottom: "40px" }}>
          {/* Col 1: Brand Info */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <span style={{ fontSize: "1.6rem" }}>🎧</span>
              <span style={{ fontSize: "1.3rem", fontWeight: "800", color: "#fff" }}>
                DJ <span className="gradient-text">VALMEL</span>
              </span>
            </div>
            <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginBottom: "16px" }}>
              Exklusiva DJ-upplevelser för nattklubbar, festivaler, bröllop och företagsevent i hela Sverige. Professionellt ljud, ljus och magisk stämning.
            </p>
            <div style={{ display: "flex", gap: "12px" }}>
              <a href="#spotify" style={{ width: "36px", height: "36px", borderRadius: "50%", background: "rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem" }}>
                🎵
              </a>
              <a href="#instagram" style={{ width: "36px", height: "36px", borderRadius: "50%", background: "rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem" }}>
                📸
              </a>
              <a href="#soundcloud" style={{ width: "36px", height: "36px", borderRadius: "50%", background: "rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem" }}>
                🔊
              </a>
              <a href="#tiktok" style={{ width: "36px", height: "36px", borderRadius: "50%", background: "rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem" }}>
                🎬
              </a>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 style={{ color: "#fff", fontSize: "1rem", marginBottom: "18px", fontWeight: "600" }}>Snabblänkar</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
              <li><Link to="/" style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>Start</Link></li>
              <li><Link to="/about" style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>Om DJ Valmel</Link></li>
              <li><Link to="/music" style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>Musik & Mixar</Link></li>
              <li><Link to="/booking" style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>Boka DJ för Event</Link></li>
              <li><Link to="/contact" style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>Kontakta Oss</Link></li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 style={{ color: "#fff", fontSize: "1rem", marginBottom: "18px", fontWeight: "600" }}>Event & Paket</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", color: "var(--text-muted)", fontSize: "0.9rem" }}>
              <li>👰 Bröllop & Fest</li>
              <li>🪩 Nattklubb & Festival</li>
              <li>👔 Företagsfester</li>
              <li>🎉 Student & Examen</li>
              <li>🔊 Ljud & Ljusutrustning</li>
            </ul>
          </div>

          {/* Col 4: Admin Portal Entrance */}
          <div>
            <h4 style={{ color: "#fff", fontSize: "1rem", marginBottom: "18px", fontWeight: "600" }}>System & Portal</h4>
            <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", marginBottom: "14px" }}>
              Inloggningsportal för IT-support och DJ Valmel administration.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <Link to="/login" className="btn btn-secondary btn-sm" style={{ width: "100%", justifyContent: "flex-start", gap: "8px" }}>
                🔑 Administrationsinloggning
              </Link>
              {user && (
                <Link to="/admin" className="btn btn-outline btn-sm" style={{ width: "100%", justifyContent: "flex-start", gap: "8px" }}>
                  ⚙️ Gå till Admin Dashboard ({user.role === "it_admin" ? "IT" : "DJ"})
                </Link>
              )}
            </div>
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "20px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "15px", fontSize: "0.85rem", color: "var(--text-dim)" }}>
          <div>
            © {new Date().getFullYear()} DJ Valmel. Alla rättigheter förbehållna.
          </div>
          <div style={{ display: "flex", gap: "20px" }}>
            <span>🔒 SSL Krypterad</span>
            <span>⚡ Systemstatus: 100% Drift</span>
            <span>IT Managed Architecture</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
