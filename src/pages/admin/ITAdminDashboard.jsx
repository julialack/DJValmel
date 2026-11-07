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
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "30px", flexWrap: "wrap", gap: "15px" }}>
        <div>
          <span className="badge badge-purple" style={{ marginBottom: "6px" }}>IT INFRASTRUCTURE & DEV CONTROL</span>
          <h2 style={{ fontSize: "2rem", color: "#fff", fontWeight: "800" }}>System & IT Administration</h2>
          <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>
            Inloggad som <strong>{user?.name || "IT Support"}</strong> • Alla servrar & databaser operativa
          </p>
        </div>

        <div style={{ display: "flex", gap: "12px" }}>
          <button onClick={handleTestPing} className="btn btn-secondary btn-sm">
            📡 Testa Server Ping
          </button>
          <button onClick={resetAllData} className="btn btn-outline btn-sm" style={{ color: "var(--warning)", borderColor: "var(--warning)" }}>
            🔄 Återställ Demo Data
          </button>
        </div>
      </div>

      {testApiMsg && (
        <div style={{ background: "rgba(16, 185, 129, 0.15)", border: "1px solid rgba(16, 185, 129, 0.4)", color: "#10b981", padding: "12px 16px", borderRadius: "8px", marginBottom: "24px", fontSize: "0.9rem" }}>
          {testApiMsg}
        </div>
      )}

      {/* System Health Metrics Cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px", marginBottom: "36px" }}>
        <div className="glass-panel" style={{ padding: "20px" }}>
          <div style={{ color: "var(--text-muted)", fontSize: "0.85rem", marginBottom: "6px" }}>SERVER UPTIME</div>
          <div style={{ fontSize: "1.8rem", fontWeight: "800", color: "var(--success)" }}>99.98%</div>
          <div style={{ fontSize: "0.75rem", color: "var(--text-dim)" }}>SLA Target: 99.9%</div>
        </div>

        <div className="glass-panel" style={{ padding: "20px" }}>
          <div style={{ color: "var(--text-muted)", fontSize: "0.85rem", marginBottom: "6px" }}>API RESPONSIVITET</div>
          <div style={{ fontSize: "1.8rem", fontWeight: "800", color: "var(--primary)" }}>12 ms</div>
          <div style={{ fontSize: "0.75rem", color: "var(--text-dim)" }}>Edge Proxy Cache Enabled</div>
        </div>

        <div className="glass-panel" style={{ padding: "20px" }}>
          <div style={{ color: "var(--text-muted)", fontSize: "0.85rem", marginBottom: "6px" }}>AKTIVA WEBSOCKETS</div>
          <div style={{ fontSize: "1.8rem", fontWeight: "800", color: "var(--secondary)" }}>42 anslutna</div>
          <div style={{ fontSize: "0.75rem", color: "var(--text-dim)" }}>Live Song Request Feed</div>
        </div>

        <div className="glass-panel" style={{ padding: "20px" }}>
          <div style={{ color: "var(--text-muted)", fontSize: "0.85rem", marginBottom: "6px" }}>SSL CERTIFIKAT</div>
          <div style={{ fontSize: "1.8rem", fontWeight: "800", color: "var(--accent-gold)" }}>Giltigt</div>
          <div style={{ fontSize: "0.75rem", color: "var(--text-dim)" }}>TLS 1.3 Kryptering Active</div>
        </div>
      </div>

      {/* Feature Flags & Config Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px", marginBottom: "36px" }}>
        {/* System Flags Toggle Box */}
        <div className="glass-panel" style={{ padding: "28px" }}>
          <h3 style={{ color: "#fff", fontSize: "1.2rem", marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
            <span>⚙️</span> System-Switchar & Feature Flags
          </h3>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <div style={{ color: "#fff", fontSize: "0.95rem", fontWeight: "600" }}>Online Bokningsmotor</div>
                <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>Tillåt kunder att boka via formuläret</div>
              </div>
              <button
                onClick={() => toggleFlag("bookingEnabled")}
                className={`btn btn-sm ${systemFlags.bookingEnabled ? "btn-primary" : "btn-secondary"}`}
              >
                {systemFlags.bookingEnabled ? "Aktiv" : "Inaktiv"}
              </button>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <div style={{ color: "#fff", fontSize: "0.95rem", fontWeight: "600" }}>High Bitrate Audio Stream</div>
                <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>320kbps MP3 / FLAC Streaming</div>
              </div>
              <button
                onClick={() => toggleFlag("highBitrateAudio")}
                className={`btn btn-sm ${systemFlags.highBitrateAudio ? "btn-primary" : "btn-secondary"}`}
              >
                {systemFlags.highBitrateAudio ? "Aktiv" : "Inaktiv"}
              </button>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <div style={{ color: "#fff", fontSize: "0.95rem", fontWeight: "600" }}>SMS-Notiser Till DJ</div>
                <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>Skicka direkt-SMS vid ny bokning</div>
              </div>
              <button
                onClick={() => toggleFlag("smsNotifications")}
                className={`btn btn-sm ${systemFlags.smsNotifications ? "btn-primary" : "btn-secondary"}`}
              >
                {systemFlags.smsNotifications ? "Aktiv" : "Inaktiv"}
              </button>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <div style={{ color: "#fff", fontSize: "0.95rem", fontWeight: "600" }}>Underhållsläge (Maintenance)</div>
                <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>Lås publika sidor för underhåll</div>
              </div>
              <button
                onClick={() => toggleFlag("maintenanceMode")}
                className={`btn btn-sm ${systemFlags.maintenanceMode ? "btn-purple" : "btn-secondary"}`}
              >
                {systemFlags.maintenanceMode ? "PASTE MODE" : "Normal"}
              </button>
            </div>
          </div>
        </div>

        {/* Server & API Configuration */}
        <div className="glass-panel" style={{ padding: "28px" }}>
          <h3 style={{ color: "#fff", fontSize: "1.2rem", marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
            <span>🌐</span> Server & API Endpoints
          </h3>

          <div style={{ display: "flex", flexDirection: "column", gap: "14px", fontSize: "0.9rem" }}>
            <div style={{ background: "rgba(255,255,255,0.02)", padding: "12px", borderRadius: "8px", border: "1px solid var(--border-color)" }}>
              <div style={{ color: "var(--text-muted)", fontSize: "0.75rem" }}>SOUNDCLOUD STREAM PROXY</div>
              <code style={{ background: "none", padding: 0, color: "var(--primary)" }}>https://api.djvalmel.se/v1/stream/audio-proxy</code>
            </div>

            <div style={{ background: "rgba(255,255,255,0.02)", padding: "12px", borderRadius: "8px", border: "1px solid var(--border-color)" }}>
              <div style={{ color: "var(--text-muted)", fontSize: "0.75rem" }}>BOOKING WEBHOOK DISPATCHER</div>
              <code style={{ background: "none", padding: 0, color: "var(--secondary)" }}>https://api.djvalmel.se/v1/webhooks/booking-alert</code>
            </div>

            <div style={{ background: "rgba(255,255,255,0.02)", padding: "12px", borderRadius: "8px", border: "1px solid var(--border-color)" }}>
              <div style={{ color: "var(--text-muted)", fontSize: "0.75rem" }}>LIVE AUDIENCE WEBSOCKET</div>
              <code style={{ background: "none", padding: 0, color: "var(--accent-gold)" }}>wss://ws.djvalmel.se/live-booth-feed</code>
            </div>
          </div>
        </div>
      </div>

      {/* Real-time System Logs Console */}
      <div className="glass-panel" style={{ padding: "28px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px", flexWrap: "wrap", gap: "12px" }}>
          <h3 style={{ color: "#fff", fontSize: "1.2rem", display: "flex", alignItems: "center", gap: "8px" }}>
            <span>📜</span> System- & Säkerhetsloggar
          </h3>

          <div style={{ display: "flex", gap: "8px" }}>
            {["ALL", "INFO", "SUCCESS", "WARN", "ERROR"].map((lvl) => (
              <button
                key={lvl}
                onClick={() => setLogFilter(lvl)}
                className="btn btn-secondary btn-sm"
                style={{
                  padding: "4px 12px",
                  fontSize: "0.75rem",
                  background: logFilter === lvl ? "rgba(255,255,255,0.15)" : "transparent"
                }}
              >
                {lvl}
              </button>
            ))}
          </div>
        </div>

        <div style={{ maxHeight: "300px", overflowY: "auto", background: "#05060a", padding: "16px", borderRadius: "8px", fontFamily: "Consolas, monospace", fontSize: "0.85rem" }}>
          {filteredLogs.map((log) => (
            <div key={log.id} style={{ marginBottom: "8px", borderBottom: "1px dashed rgba(255,255,255,0.05)", paddingBottom: "6px" }}>
              <span style={{ color: "var(--text-dim)", marginRight: "10px" }}>[{log.timestamp}]</span>
              <span
                style={{
                  fontWeight: "bold",
                  marginRight: "10px",
                  color:
                    log.level === "ERROR" ? "#ef4444" :
                    log.level === "WARN" ? "#f59e0b" :
                    log.level === "SUCCESS" ? "#10b981" : "#00f2fe"
                }}
              >
                [{log.level}]
              </span>
              <span style={{ color: "var(--secondary)", marginRight: "10px" }}>[{log.module}]</span>
              <span style={{ color: "#e5e7eb" }}>{log.message}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ITAdminDashboard
