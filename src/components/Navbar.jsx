import { Link, useLocation } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

const Navbar = () => {
  const location = useLocation()
  const { user, logout } = useAuth()

  const isActive = (path) => location.pathname === path

  return (
    <header className="glass-panel" style={{ position: "sticky", top: 0, zIndex: 1000, borderRadius: 0, borderTop: "none", borderLeft: "none", borderRight: "none" }}>
      <div className="container nav-header-container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "76px" }}>
        {/* Brand Logo */}
        <Link to="/" style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none" }}>
          <div style={{
            width: "44px",
            height: "44px",
            borderRadius: "12px",
            background: "linear-gradient(135deg, #00f2fe 0%, #9d4edd 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 0 15px rgba(0, 242, 254, 0.4)",
            fontSize: "1.4rem"
          }}>
            🎧
          </div>
          <div>
            <span style={{ fontSize: "1.3rem", fontWeight: "800", letterSpacing: "1px", color: "#fff", display: "block", lineHeight: 1 }}>
              DJ <span className="gradient-text">VALMEL</span>
            </span>
            <span style={{ fontSize: "0.68rem", color: "var(--text-muted)", letterSpacing: "2px", textTransform: "uppercase" }}>
              Official Website
            </span>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="nav-links-menu" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
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

        {/* User Login / Admin Status */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
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
      </div>
    </header>
  )
}

export default Navbar
