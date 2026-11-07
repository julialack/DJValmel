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
    <div className="container section-padding" style={{ maxWidth: "800px" }}>
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <span className="badge badge-primary" style={{ marginBottom: "12px" }}>PORTAL ACCESS</span>
        <h1 style={{ fontSize: "2.5rem", color: "#fff", fontWeight: "900", marginBottom: "12px" }}>
          Administrationsinloggning
        </h1>
        <p style={{ color: "var(--text-muted)", fontSize: "1rem" }}>
          Välj portal för att logga in som <strong>IT-Support (System)</strong> eller <strong>DJ Valmel (Artist)</strong>.
        </p>
      </div>

      {user ? (
        <div className="glass-panel-glow" style={{ padding: "40px", textAlign: "center" }}>
          <div style={{ fontSize: "3rem", marginBottom: "12px" }}>{user.avatar}</div>
          <h2 style={{ color: "#fff", fontSize: "1.6rem", marginBottom: "8px" }}>
            Du är inloggad som <span className="gradient-text">{user.name}</span>
          </h2>
          <p style={{ color: "var(--text-muted)", marginBottom: "24px" }}>
            Aktiv roll: <strong>{user.role === "it_admin" ? "IT System Admin" : "DJ Valmel Admin"}</strong>
          </p>

          <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
            <button onClick={() => navigate("/admin")} className="btn btn-primary">
              ⚙️ Öppna Admin Dashboard
            </button>
          </div>
        </div>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "30px" }}>
          {/* Preset One-Click Role Logins */}
          <div className="glass-panel-glow" style={{ padding: "32px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <span className="badge badge-purple" style={{ marginBottom: "16px" }}>SNABB-INLOGGNING</span>
              <h3 style={{ color: "#fff", fontSize: "1.4rem", marginBottom: "16px" }}>Välj Din Roll</h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginBottom: "24px" }}>
                Klicka på önskad roll för omedelbar tillgång till motsvarande administrationspanel:
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                <button
                  onClick={handleITLogin}
                  className="btn btn-purple"
                  style={{ width: "100%", padding: "16px", justifyContent: "flex-start", gap: "12px", textAlign: "left" }}
                >
                  <span style={{ fontSize: "1.5rem" }}>⚙️</span>
                  <div>
                    <div style={{ fontWeight: "700", fontSize: "1rem" }}>Logga in som IT-Admin</div>
                    <div style={{ fontSize: "0.75rem", opacity: 0.8 }}>Systemhälsa, loggar, API & inställningar</div>
                  </div>
                </button>

                <button
                  onClick={handleDJLogin}
                  className="btn btn-primary"
                  style={{ width: "100%", padding: "16px", justifyContent: "flex-start", gap: "12px", textAlign: "left" }}
                >
                  <span style={{ fontSize: "1.5rem" }}>🎧</span>
                  <div>
                    <div style={{ fontWeight: "700", fontSize: "1rem" }}>Logga in som DJ Valmel</div>
                    <div style={{ fontSize: "0.75rem", opacity: 0.8 }}>Bokningar, kalender, mixar & önskelåtar</div>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Traditional Login Form */}
          <div className="glass-panel" style={{ padding: "32px" }}>
            <h3 style={{ color: "#fff", fontSize: "1.3rem", marginBottom: "20px" }}>Standard Form-Inloggning</h3>

            {error && (
              <div style={{ background: "rgba(239, 68, 68, 0.15)", border: "1px solid rgba(239, 68, 68, 0.4)", color: "#ef4444", padding: "12px", borderRadius: "8px", fontSize: "0.85rem", marginBottom: "16px" }}>
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

              <button type="submit" className="btn btn-secondary" style={{ width: "100%", padding: "12px", marginTop: "10px" }}>
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
