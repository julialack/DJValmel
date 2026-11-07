import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

const Navbar = () => {
  const location = useLocation()
  const { user, logout } = useAuth()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const isActive = (path) => location.pathname === path

  const closeMobileMenu = () => setMobileMenuOpen(false)

  return (
    <header className="glass-panel" style={{ position: "sticky", top: 0, zIndex: 1000, borderRadius: 0, borderTop: "none", borderLeft: "none", borderRight: "none" }}>
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "70px" }}>
        {/* Brand Logo */}
        <Link to="/" onClick={closeMobileMenu} style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
          <div style={{
            width: "40px",
            height: "40px",
            borderRadius: "10px",
            background: "linear-gradient(135deg, #00f2fe 0%, #9d4edd 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 0 15px rgba(0, 242, 254, 0.4)",
            fontSize: "1.3rem"
          }}>
            🎧
          </div>
          <div>
            <span style={{ fontSize: "1.2rem", fontWeight: "800", letterSpacing: "1px", color: "#fff", display: "block", lineHeight: 1 }}>
              DJ <span className="gradient-text">VALMEL</span>
            </span>
            <span style={{ fontSize: "0.65rem", color: "var(--text-muted)", letterSpacing: "1.5px", textTransform: "uppercase" }}>
              Official Website
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav-menu" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Link
            to="/"
            style={{
              padding: "8px 14px",
              borderRadius: "20px",
              fontWeight: 500,
              fontSize: "0.9rem",
              color: isActive("/") ? "var(--primary)" : "var(--text-muted)",
              background: isActive("/") ? "rgba(0, 242, 254, 0.1)" : "transparent",
              border: isActive("/") ? "1px solid rgba(0, 242, 254, 0.2)" : "1px solid transparent"
            }}
          >
            Start
          </Link>
          <Link
            to="/about"
            style={{
              padding: "8px 14px",
              borderRadius: "20px",
              fontWeight: 500,
              fontSize: "0.9rem",
              color: isActive("/about") ? "var(--primary)" : "var(--text-muted)",
              background: isActive("/about") ? "rgba(0, 242, 254, 0.1)" : "transparent",
              border: isActive("/about") ? "1px solid rgba(0, 242, 254, 0.2)" : "1px solid transparent"
            }}
          >
            Om DJ
          </Link>
          <Link
            to="/music"
            style={{
              padding: "8px 14px",
              borderRadius: "20px",
              fontWeight: 500,
              fontSize: "0.9rem",
              color: isActive("/music") ? "var(--primary)" : "var(--text-muted)",
              background: isActive("/music") ? "rgba(0, 242, 254, 0.1)" : "transparent",
              border: isActive("/music") ? "1px solid rgba(0, 242, 254, 0.2)" : "1px solid transparent"
            }}
          >
            Musik & Mixar
          </Link>
          <Link
            to="/booking"
            style={{
              padding: "8px 14px",
              borderRadius: "20px",
              fontWeight: 600,
              fontSize: "0.9rem",
              color: isActive("/booking") ? "#fff" : "#00f2fe",
              background: isActive("/booking") ? "linear-gradient(135deg, #00f2fe 0%, #4facfe 100%)" : "rgba(0, 242, 254, 0.12)",
              border: "1px solid rgba(0, 242, 254, 0.4)",
              boxShadow: isActive("/booking") ? "0 0 15px rgba(0, 242, 254, 0.4)" : "none"
            }}
          >
            ⚡ Boka Nu
          </Link>
          <Link
            to="/contact"
            style={{
              padding: "8px 14px",
              borderRadius: "20px",
              fontWeight: 500,
              fontSize: "0.9rem",
              color: isActive("/contact") ? "var(--primary)" : "var(--text-muted)",
              background: isActive("/contact") ? "rgba(0, 242, 254, 0.1)" : "transparent",
              border: isActive("/contact") ? "1px solid rgba(0, 242, 254, 0.2)" : "1px solid transparent"
            }}
          >
            Kontakt
          </Link>
        </nav>

        {/* Desktop Admin status / Login */}
        <div className="desktop-admin-status" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          {user ? (
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Link
                to="/admin"
                className={`badge ${user.role === "it_admin" ? "badge-purple" : "badge-gold"}`}
                style={{ textDecoration: "none", padding: "6px 12px", fontSize: "0.8rem", gap: "6px" }}
              >
                <span>{user.avatar}</span>
                <span>{user.role === "it_admin" ? "IT Admin" : "DJ Admin"}</span>
              </Link>
              <button
                onClick={logout}
                className="btn btn-secondary btn-sm"
                title="Logga ut"
                style={{ padding: "6px 10px", fontSize: "0.8rem" }}
              >
                Ut
              </button>
            </div>
          ) : (
            <Link to="/login" className="btn btn-secondary btn-sm" style={{ gap: "6px" }}>
              🔒 Admin
            </Link>
          )}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="mobile-hamburger-btn"
          aria-label="Meny"
          style={{
            display: "none",
            background: "rgba(255,255,255,0.08)",
            border: "1px solid var(--border-color)",
            color: "#fff",
            fontSize: "1.4rem",
            width: "44px",
            height: "44px",
            borderRadius: "10px",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          {mobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu Slide-down Drawer */}
      {mobileMenuOpen && (
        <div
          className="mobile-menu-drawer"
          style={{
            background: "rgba(10, 12, 20, 0.98)",
            backdropFilter: "blur(20px)",
            borderBottom: "1px solid var(--border-glow)",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "12px"
          }}
        >
          <Link
            to="/"
            onClick={closeMobileMenu}
            style={{
              padding: "12px 16px",
              borderRadius: "10px",
              fontWeight: 600,
              fontSize: "1.05rem",
              color: isActive("/") ? "var(--primary)" : "#fff",
              background: isActive("/") ? "rgba(0, 242, 254, 0.15)" : "rgba(255,255,255,0.03)"
            }}
          >
            🏠 Start
          </Link>
          <Link
            to="/about"
            onClick={closeMobileMenu}
            style={{
              padding: "12px 16px",
              borderRadius: "10px",
              fontWeight: 600,
              fontSize: "1.05rem",
              color: isActive("/about") ? "var(--primary)" : "#fff",
              background: isActive("/about") ? "rgba(0, 242, 254, 0.15)" : "rgba(255,255,255,0.03)"
            }}
          >
            ✨ Om DJ Valmel
          </Link>
          <Link
            to="/music"
            onClick={closeMobileMenu}
            style={{
              padding: "12px 16px",
              borderRadius: "10px",
              fontWeight: 600,
              fontSize: "1.05rem",
              color: isActive("/music") ? "var(--primary)" : "#fff",
              background: isActive("/music") ? "rgba(0, 242, 254, 0.15)" : "rgba(255,255,255,0.03)"
            }}
          >
            🎧 Musik & Mixar
          </Link>
          <Link
            to="/booking"
            onClick={closeMobileMenu}
            style={{
              padding: "14px 16px",
              borderRadius: "10px",
              fontWeight: 700,
              fontSize: "1.05rem",
              color: "#050b14",
              background: "linear-gradient(135deg, #00f2fe 0%, #4facfe 100%)",
              textAlign: "center"
            }}
          >
            ⚡ Boka DJ Valmel Nu
          </Link>
          <Link
            to="/contact"
            onClick={closeMobileMenu}
            style={{
              padding: "12px 16px",
              borderRadius: "10px",
              fontWeight: 600,
              fontSize: "1.05rem",
              color: isActive("/contact") ? "var(--primary)" : "#fff",
              background: isActive("/contact") ? "rgba(0, 242, 254, 0.15)" : "rgba(255,255,255,0.03)"
            }}
          >
            💬 Kontakt
          </Link>

          <div style={{ borderTop: "1px solid var(--border-color)", paddingTop: "14px", marginTop: "6px" }}>
            {user ? (
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Link
                  to="/admin"
                  onClick={closeMobileMenu}
                  className={`badge ${user.role === "it_admin" ? "badge-purple" : "badge-gold"}`}
                  style={{ textDecoration: "none", padding: "10px 16px", fontSize: "0.9rem" }}
                >
                  {user.avatar} {user.role === "it_admin" ? "IT Admin Portal" : "DJ Admin Portal"}
                </Link>
                <button onClick={() => { logout(); closeMobileMenu(); }} className="btn btn-secondary btn-sm">
                  Logga ut
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                onClick={closeMobileMenu}
                className="btn btn-secondary"
                style={{ width: "100%", justifyContent: "center" }}
              >
                🔒 Administrationsinloggning
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
