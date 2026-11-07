import { useState } from "react"
import { useBooking } from "../../context/BookingContext"
import { useAuth } from "../../context/AuthContext"

const ITAdminDashboard = () => {
  const { systemLogs, systemFlags, toggleFlag, resetAllData, addLog } = useBooking()
  const { user } = useAuth()

  const [logFilter, setLogFilter] = useState("ALL")
  const [testApiMsg, setTestApiMsg] = useState("")

  const filteredLogs = logFilter === "ALL"
    ? systemLogs
    : systemLogs.filter((l) => l.level === logFilter)

  const handleTestPing = () => {
    addLog("SUCCESS", "API_HEALTH", "Manual ping executed. REST & WebSocket servers responding in 8ms.")
    setTestApiMsg("✅ Ping genomförd! API Svar: 200 OK (8ms)")
    setTimeout(() => setTestApiMsg(""), 4000)
  }

  return (
    <div style={{ padding: "10px 0" }}>
      {/* Header Info */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px", flexWrap: "wrap", gap: "12px" }}>
        <div>
          <span className="badge badge-purple" style={{ marginBottom: "4px" }}>IT INFRASTRUCTURE & DEV CONTROL</span>
          <h2 style={{ fontSize: "clamp(1.5rem, 3.5vw, 2rem)", color: "#fff", fontWeight: "800" }}>System & IT Administration</h2>
          <p style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>
            Inloggad som <strong>{user?.name || "IT Support"}</strong> • Alla servrar & databaser operativa
          </p>
        </div>

        <div style={{ display: "flex", gap: "8px", width: "100%", maxWidth: "400px" }}>
          <button onClick={handleTestPing} className="btn btn-secondary btn-sm" style={{ flex: 1 }}>
            📡 Server Ping
          </button>
          <button onClick={resetAllData} className="btn btn-outline btn-sm" style={{ flex: 1, color: "var(--warning)", borderColor: "var(--warning)" }}>
            🔄 Återställ Demo Data
          </button>
        </div>
      </div>

      {testApiMsg && (
        <div style={{ background: "rgba(16, 185, 129, 0.15)", border: "1px solid rgba(16, 185, 129, 0.4)", color: "#10b981", padding: "10px 14px", borderRadius: "8px", marginBottom: "20px", fontSize: "0.85rem" }}>
          {testApiMsg}
        </div>
      )}

      {/* System Health Metrics Cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "12px", marginBottom: "24px" }}>
        <div className="glass-panel" style={{ padding: "16px" }}>
          <div style={{ color: "var(--text-muted)", fontSize: "0.75rem", marginBottom: "4px" }}>UPTIME</div>
          <div style={{ fontSize: "1.4rem", fontWeight: "800", color: "var(--success)" }}>99.98%</div>
          <div style={{ fontSize: "0.7rem", color: "var(--text-dim)" }}>SLA: 99.9%</div>
        </div>

        <div className="glass-panel" style={{ padding: "16px" }}>
          <div style={{ color: "var(--text-muted)", fontSize: "0.75rem", marginBottom: "4px" }}>API SVARSTID</div>
          <div style={{ fontSize: "1.4rem", fontWeight: "800", color: "var(--primary)" }}>12 ms</div>
          <div style={{ fontSize: "0.7rem", color: "var(--text-dim)" }}>Edge Proxy</div>
        </div>

        <div className="glass-panel" style={{ padding: "16px" }}>
          <div style={{ color: "var(--text-muted)", fontSize: "0.75rem", marginBottom: "4px" }}>WEBSOCKETS</div>
          <div style={{ fontSize: "1.4rem", fontWeight: "800", color: "var(--secondary)" }}>42 anslutna</div>
          <div style={{ fontSize: "0.7rem", color: "var(--text-dim)" }}>Live Stream</div>
        </div>

        <div className="glass-panel" style={{ padding: "16px" }}>
          <div style={{ color: "var(--text-muted)", fontSize: "0.75rem", marginBottom: "4px" }}>SSL CERTIFIKAT</div>
          <div style={{ fontSize: "1.4rem", fontWeight: "800", color: "var(--accent-gold)" }}>Giltigt</div>
          <div style={{ fontSize: "0.7rem", color: "var(--text-dim)" }}>TLS 1.3 Active</div>
        </div>
      </div>

      {/* Feature Flags & Config Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px", marginBottom: "24px" }}>
        {/* System Flags Toggle Box */}
        <div className="glass-panel" style={{ padding: "20px" }}>
          <h3 style={{ color: "#fff", fontSize: "1.1rem", marginBottom: "14px", display: "flex", alignItems: "center", gap: "8px" }}>
            <span>⚙️</span> System-Switchar & Feature Flags
          </h3>

          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <div style={{ color: "#fff", fontSize: "0.9rem", fontWeight: "600" }}>Online Bokningsmotor</div>
                <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>Tillåt kunder att boka online</div>
              </div>
              <button
                onClick={() => toggleFlag("bookingEnabled")}
                className={`btn btn-sm ${systemFlags.bookingEnabled ? "btn-primary" : "btn-secondary"}`}
                style={{ padding: "4px 10px", fontSize: "0.75rem" }}
              >
                {systemFlags.bookingEnabled ? "Aktiv" : "Inaktiv"}
              </button>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <div style={{ color: "#fff", fontSize: "0.9rem", fontWeight: "600" }}>High Bitrate Audio Stream</div>
                <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>320kbps MP3 / FLAC Streaming</div>
              </div>
              <button
                onClick={() => toggleFlag("highBitrateAudio")}
                className={`btn btn-sm ${systemFlags.highBitrateAudio ? "btn-primary" : "btn-secondary"}`}
                style={{ padding: "4px 10px", fontSize: "0.75rem" }}
              >
                {systemFlags.highBitrateAudio ? "Aktiv" : "Inaktiv"}
              </button>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <div style={{ color: "#fff", fontSize: "0.9rem", fontWeight: "600" }}>SMS-Notiser Till DJ</div>
                <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>Skicka SMS vid ny bokning</div>
              </div>
              <button
                onClick={() => toggleFlag("smsNotifications")}
                className={`btn btn-sm ${systemFlags.smsNotifications ? "btn-primary" : "btn-secondary"}`}
                style={{ padding: "4px 10px", fontSize: "0.75rem" }}
              >
                {systemFlags.smsNotifications ? "Aktiv" : "Inaktiv"}
              </button>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <div style={{ color: "#fff", fontSize: "0.9rem", fontWeight: "600" }}>Underhållsläge</div>
                <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>Lås publika sidor för underhåll</div>
              </div>
              <button
                onClick={() => toggleFlag("maintenanceMode")}
                className={`btn btn-sm ${systemFlags.maintenanceMode ? "btn-purple" : "btn-secondary"}`}
                style={{ padding: "4px 10px", fontSize: "0.75rem" }}
              >
                {systemFlags.maintenanceMode ? "PASTE MODE" : "Normal"}
              </button>
            </div>
          </div>
        </div>

        {/* Server & API Configuration */}
        <div className="glass-panel" style={{ padding: "20px" }}>
          <h3 style={{ color: "#fff", fontSize: "1.1rem", marginBottom: "14px", display: "flex", alignItems: "center", gap: "8px" }}>
            <span>🌐</span> Server & API Endpoints
          </h3>

          <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "0.85rem" }}>
            <div style={{ background: "rgba(255,255,255,0.02)", padding: "10px", borderRadius: "8px", border: "1px solid var(--border-color)", wordBreak: "break-all" }}>
              <div style={{ color: "var(--text-muted)", fontSize: "0.7rem" }}>SOUNDCLOUD STREAM PROXY</div>
              <code style={{ background: "none", padding: 0, color: "var(--primary)", fontSize: "0.78rem" }}>https://api.djvalmel.se/v1/stream/audio-proxy</code>
            </div>

            <div style={{ background: "rgba(255,255,255,0.02)", padding: "10px", borderRadius: "8px", border: "1px solid var(--border-color)", wordBreak: "break-all" }}>
              <div style={{ color: "var(--text-muted)", fontSize: "0.7rem" }}>BOOKING WEBHOOK DISPATCHER</div>
              <code style={{ background: "none", padding: 0, color: "var(--secondary)", fontSize: "0.78rem" }}>https://api.djvalmel.se/v1/webhooks/booking-alert</code>
            </div>

            <div style={{ background: "rgba(255,255,255,0.02)", padding: "10px", borderRadius: "8px", border: "1px solid var(--border-color)", wordBreak: "break-all" }}>
              <div style={{ color: "var(--text-muted)", fontSize: "0.7rem" }}>LIVE AUDIENCE WEBSOCKET</div>
              <code style={{ background: "none", padding: 0, color: "var(--accent-gold)", fontSize: "0.78rem" }}>wss://ws.djvalmel.se/live-booth-feed</code>
            </div>
          </div>
        </div>
      </div>

      {/* Real-time System Logs Console */}
      <div className="glass-panel" style={{ padding: "20px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px", flexWrap: "wrap", gap: "10px" }}>
          <h3 style={{ color: "#fff", fontSize: "1.1rem", display: "flex", alignItems: "center", gap: "8px" }}>
            <span>📜</span> System- & Säkerhetsloggar
          </h3>

          <div style={{ display: "flex", gap: "4px", flexWrap: "wrap" }}>
            {["ALL", "INFO", "SUCCESS", "WARN", "ERROR"].map((lvl) => (
              <button
                key={lvl}
                onClick={() => setLogFilter(lvl)}
                className="btn btn-secondary btn-sm"
                style={{
                  padding: "3px 8px",
                  fontSize: "0.7rem",
                  background: logFilter === lvl ? "rgba(255,255,255,0.15)" : "transparent"
                }}
              >
                {lvl}
              </button>
            ))}
          </div>
        </div>

        <div style={{ maxHeight: "250px", overflowY: "auto", background: "#05060a", padding: "12px", borderRadius: "8px", fontFamily: "Consolas, monospace", fontSize: "0.78rem" }}>
          {filteredLogs.map((log) => (
            <div key={log.id} style={{ marginBottom: "6px", borderBottom: "1px dashed rgba(255,255,255,0.05)", paddingBottom: "4px", wordBreak: "break-word" }}>
              <span style={{ color: "var(--text-dim)", marginRight: "8px" }}>[{log.timestamp}]</span>
              <span
                style={{
                  fontWeight: "bold",
                  marginRight: "8px",
                  color:
                    log.level === "ERROR" ? "#ef4444" :
                    log.level === "WARN" ? "#f59e0b" :
                    log.level === "SUCCESS" ? "#10b981" : "#00f2fe"
                }}
              >
                [{log.level}]
              </span>
              <span style={{ color: "var(--secondary)", marginRight: "8px" }}>[{log.module}]</span>
              <span style={{ color: "#e5e7eb" }}>{log.message}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ITAdminDashboard
