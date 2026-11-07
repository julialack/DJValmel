import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

const Login = () => {
  const { loginAsITAdmin, loginAsDJAdmin, user } = useAuth()
  const navigate = useNavigate()

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleITLogin = () => {
    loginAsITAdmin()
    navigate("/admin")
  }

  const handleDJLogin = () => {
    loginAsDJAdmin()
    navigate("/admin")
  }

  const handleManualLogin = (e) => {
    e.preventDefault()
    if (username.toLowerCase().includes("it") || username.toLowerCase().includes("admin")) {
      loginAsITAdmin()
      navigate("/admin")
    } else if (username.toLowerCase().includes("dj") || username.toLowerCase().includes("valmel")) {
      loginAsDJAdmin()
      navigate("/admin")
    } else {
      setError("Ogiltigt användarnamn eller lösenord. Använd snabbknapparna nedan för test-inloggning.")
    }
  }

  return (
    <div className="container section-padding" style={{ maxWidth: "750px" }}>
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <span className="badge badge-primary" style={{ marginBottom: "8px" }}>PORTAL ACCESS</span>
        <h1 className="section-title" style={{ fontSize: "clamp(1.8rem, 4vw, 2.3rem)", marginBottom: "8px" }}>
          Administrationsinloggning
        </h1>
        <p style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>
          Välj portal för att logga in som <strong>IT-Support (System)</strong> eller <strong>DJ Valmel (Artist)</strong>.
        </p>
      </div>

      {user ? (
        <div className="glass-panel-glow" style={{ padding: "30px", textAlign: "center" }}>
          <div style={{ fontSize: "2.5rem", marginBottom: "8px" }}>{user.avatar}</div>
          <h2 style={{ color: "#fff", fontSize: "1.4rem", marginBottom: "6px" }}>
            Du är inloggad som <span className="gradient-text">{user.name}</span>
          </h2>
          <p style={{ color: "var(--text-muted)", marginBottom: "20px", fontSize: "0.9rem" }}>
            Aktiv roll: <strong>{user.role === "it_admin" ? "IT System Admin" : "DJ Valmel Admin"}</strong>
          </p>

          <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
            <button onClick={() => navigate("/admin")} className="btn btn-primary" style={{ width: "100%" }}>
              ⚙️ Öppna Admin Dashboard
            </button>
          </div>
        </div>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
          {/* Preset One-Click Role Logins */}
          <div className="glass-panel-glow" style={{ padding: "24px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <span className="badge badge-purple" style={{ marginBottom: "12px" }}>SNABB-INLOGGNING</span>
              <h3 style={{ color: "#fff", fontSize: "1.2rem", marginBottom: "12px" }}>Välj Din Roll</h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", marginBottom: "18px" }}>
                Klicka på önskad roll för omedelbar tillgång till motsvarande administrationspanel:
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <button
                  onClick={handleITLogin}
                  className="btn btn-purple"
                  style={{ width: "100%", padding: "14px", justifyContent: "flex-start", gap: "10px", textAlign: "left" }}
                >
                  <span style={{ fontSize: "1.3rem" }}>⚙️</span>
                  <div>
                    <div style={{ fontWeight: "700", fontSize: "0.95rem" }}>Logga in som IT-Admin</div>
                    <div style={{ fontSize: "0.72rem", opacity: 0.85 }}>Systemhälsa, loggar & inställningar</div>
                  </div>
                </button>

                <button
                  onClick={handleDJLogin}
                  className="btn btn-primary"
                  style={{ width: "100%", padding: "14px", justifyContent: "flex-start", gap: "10px", textAlign: "left" }}
                >
                  <span style={{ fontSize: "1.3rem" }}>🎧</span>
                  <div>
                    <div style={{ fontWeight: "700", fontSize: "0.95rem" }}>Logga in som DJ Valmel</div>
                    <div style={{ fontSize: "0.72rem", opacity: 0.85 }}>Bokningar, kalender & önskelåtar</div>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Traditional Login Form */}
          <div className="glass-panel" style={{ padding: "24px" }}>
            <h3 style={{ color: "#fff", fontSize: "1.2rem", marginBottom: "16px" }}>Standard Form-Inloggning</h3>

            {error && (
              <div style={{ background: "rgba(239, 68, 68, 0.15)", border: "1px solid rgba(239, 68, 68, 0.4)", color: "#ef4444", padding: "10px", borderRadius: "8px", fontSize: "0.8rem", marginBottom: "14px" }}>
                {error}
              </div>
            )}

            <form onSubmit={handleManualLogin}>
              <div className="form-group">
                <label>Användarnamn / E-post</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="it_admin eller dj_valmel"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label>Lösenord</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <button type="submit" className="btn btn-secondary" style={{ width: "100%", padding: "12px", marginTop: "6px" }}>
                Logga In med Form
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default Login
