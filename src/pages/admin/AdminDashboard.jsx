import { useState } from "react"
import { useAuth } from "../../context/AuthContext"
import ITAdminDashboard from "./ITAdminDashboard"
import DJAdminDashboard from "./DJAdminDashboard"

const AdminDashboard = () => {
  const { user } = useAuth()
  const [activeTab, setActiveTab] = useState(() => {
    return user?.role === "it_admin" ? "it" : "dj"
  })

  return (
    <div className="container section-padding">
      {/* Top Portal Switcher Bar */}
      <div className="glass-panel" style={{ padding: "16px 20px", marginBottom: "24px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "14px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{ fontSize: "1.3rem" }}>🔐</span>
          <div>
            <h1 style={{ fontSize: "1.1rem", margin: 0, color: "#fff" }}>DJ Valmel Administration Hub</h1>
            <div style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>
              Inloggad som: <strong>{user?.name || "Administratör"}</strong> ({user?.role === "it_admin" ? "IT System Admin" : "DJ Valmel Artist"})
            </div>
          </div>
        </div>

        {/* Tab Switcher Buttons */}
        <div style={{ display: "flex", gap: "8px", background: "rgba(0,0,0,0.4)", padding: "4px", borderRadius: "10px", width: "100%", maxWidth: "450px" }}>
          <button
            onClick={() => setActiveTab("dj")}
            className="btn"
            style={{
              flex: 1,
              padding: "8px 12px",
              borderRadius: "8px",
              fontSize: "0.82rem",
              background: activeTab === "dj" ? "linear-gradient(135deg, #00f2fe, #4facfe)" : "transparent",
              color: activeTab === "dj" ? "#050b14" : "var(--text-muted)"
            }}
          >
            🎧 DJ-Admin
          </button>
          <button
            onClick={() => setActiveTab("it")}
            className="btn"
            style={{
              flex: 1,
              padding: "8px 12px",
              borderRadius: "8px",
              fontSize: "0.82rem",
              background: activeTab === "it" ? "linear-gradient(135deg, #7209b7, #b5179e)" : "transparent",
              color: activeTab === "it" ? "#fff" : "var(--text-muted)"
            }}
          >
            ⚙️ IT-Admin
          </button>
        </div>
      </div>

      {/* Render selected Dashboard view */}
      {activeTab === "it" ? <ITAdminDashboard /> : <DJAdminDashboard />}
    </div>
  )
}

export default AdminDashboard
