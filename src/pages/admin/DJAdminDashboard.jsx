import { useState } from "react"
import { useBooking } from "../../context/BookingContext"
import { useAuth } from "../../context/AuthContext"

const DJAdminDashboard = () => {
  const { bookings, updateBookingStatus, gigs, addGig, songRequests, updateSongRequestStatus } = useBooking()
  const { user } = useAuth()

  // New Gig Modal/Form state
  const [showAddGig, setShowAddGig] = useState(false)
  const [gigTitle, setGigTitle] = useState("")
  const [gigLocation, setGigLocation] = useState("")
  const [gigDate, setGigDate] = useState("")
  const [gigTime, setGigTime] = useState("22:00 - 03:00")
  const [gigType, setGigType] = useState("Nattklubb")

  // Metrics
  const pendingCount = bookings.filter((b) => b.status === "Väntar på bekräftelse").length
  const totalRevenue = bookings
    .filter((b) => b.status === "Godkänd")
    .reduce((sum, b) => sum + (b.totalPrice || 0), 0)

  const handleAddGigSubmit = (e) => {
    e.preventDefault()
    if (!gigTitle || !gigDate) return

    addGig({
      title: gigTitle,
      location: gigLocation || "Stockholm",
      date: gigDate,
      time: gigTime,
      type: gigType,
      status: "Bekräftad"
    })

    setGigTitle("")
    setGigLocation("")
    setGigDate("")
    setShowAddGig(false)
  }

  return (
    <div style={{ padding: "10px 0" }}>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "30px", flexWrap: "wrap", gap: "15px" }}>
        <div>
          <span className="badge badge-gold" style={{ marginBottom: "6px" }}>ARTIST PORTAL</span>
          <h2 style={{ fontSize: "2rem", color: "#fff", fontWeight: "800" }}>DJ Valmel Management Portal</h2>
          <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>
            Välkommen tillbaka, <strong>Valmel</strong>! Hantera dina bokningar, spelningar och dj-bås.
          </p>
        </div>

        <button onClick={() => setShowAddGig(!showAddGig)} className="btn btn-primary">
          ➕ Lägg Till Ny Spelning
        </button>
      </div>

      {/* Overview Stats Bar */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px", marginBottom: "36px" }}>
        <div className="glass-panel" style={{ padding: "20px" }}>
          <div style={{ color: "var(--text-muted)", fontSize: "0.85rem", marginBottom: "6px" }}>TOTALT ANTAL BOKNINGAR</div>
          <div style={{ fontSize: "1.8rem", fontWeight: "800", color: "#fff" }}>{bookings.length} st</div>
          <div style={{ fontSize: "0.75rem", color: "var(--text-dim)" }}>Inkomna via webbplatsen</div>
        </div>

        <div className="glass-panel" style={{ padding: "20px" }}>
          <div style={{ color: "var(--text-muted)", fontSize: "0.85rem", marginBottom: "6px" }}>VÄNTAR PÅ SVAR</div>
          <div style={{ fontSize: "1.8rem", fontWeight: "800", color: "var(--warning)" }}>{pendingCount} st</div>
          <div style={{ fontSize: "0.75rem", color: "var(--text-dim)" }}>Kräver godkännande</div>
        </div>

        <div className="glass-panel" style={{ padding: "20px" }}>
          <div style={{ color: "var(--text-muted)", fontSize: "0.85rem", marginBottom: "6px" }}>BEKRÄFTADE SPELNINGAR</div>
          <div style={{ fontSize: "1.8rem", fontWeight: "800", color: "var(--primary)" }}>{gigs.length} st</div>
          <div style={{ fontSize: "0.75rem", color: "var(--text-dim)" }}>I kalendern</div>
        </div>

        <div className="glass-panel" style={{ padding: "20px" }}>
          <div style={{ color: "var(--text-muted)", fontSize: "0.85rem", marginBottom: "6px" }}>GODKÄNDA INTÄKTER</div>
          <div style={{ fontSize: "1.8rem", fontWeight: "800", color: "var(--accent-gold)" }}>
            {totalRevenue.toLocaleString("sv-SE")} kr
          </div>
          <div style={{ fontSize: "0.75rem", color: "var(--text-dim)" }}>Exklusive moms</div>
        </div>
      </div>

      {/* Add New Gig Collapsible Form */}
      {showAddGig && (
        <div className="glass-panel-glow" style={{ padding: "28px", marginBottom: "36px" }}>
          <h3 style={{ color: "#fff", fontSize: "1.3rem", marginBottom: "20px" }}>➕ Lägg Till Ny Spelning i Kalendern</h3>
          <form onSubmit={handleAddGigSubmit} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px" }}>
            <div className="form-group">
              <label>Titel / Klubb *</label>
              <input type="text" className="form-control" placeholder="Club Neon Mainstage" value={gigTitle} onChange={(e) => setGigTitle(e.target.value)} required />
            </div>

            <div className="form-group">
              <label>Plats / Stad</label>
              <input type="text" className="form-control" placeholder="Stockholm" value={gigLocation} onChange={(e) => setGigLocation(e.target.value)} />
            </div>

            <div className="form-group">
              <label>Datum *</label>
              <input type="date" className="form-control" value={gigDate} onChange={(e) => setGigDate(e.target.value)} required />
            </div>

            <div className="form-group">
              <label>Tid</label>
              <input type="text" className="form-control" placeholder="22:00 - 03:00" value={gigTime} onChange={(e) => setGigTime(e.target.value)} />
            </div>

            <div className="form-group">
              <label>Eventtyp</label>
              <select className="form-control" value={gigType} onChange={(e) => setGigType(e.target.value)}>
                <option value="Nattklubb">Nattklubb</option>
                <option value="Bröllop">Bröllop</option>
                <option value="Företagsevent">Företagsevent</option>
                <option value="Festival">Festival</option>
              </select>
            </div>

            <div style={{ gridColumn: "1 / -1", display: "flex", gap: "12px", marginTop: "10px" }}>
              <button type="submit" className="btn btn-primary">Spara Spelning</button>
              <button type="button" onClick={() => setShowAddGig(false)} className="btn btn-secondary">Avbryt</button>
            </div>
          </form>
        </div>
      )}

      {/* Main Grid: Bookings & Song Requests */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "36px", marginBottom: "36px" }}>
        {/* Bookings Table */}
        <div className="glass-panel" style={{ padding: "28px" }}>
          <h3 style={{ color: "#fff", fontSize: "1.3rem", marginBottom: "20px", display: "flex", alignItems: "center", gap: "10px" }}>
            <span>📋</span> Inkomna Bokningsförfrågningar
          </h3>

          <div style={{ overflowX: "auto" }}>
            <table className="custom-table">
              <thead>
                <tr>
                  <th>ID / Datum</th>
                  <th>Kund & Event</th>
                  <th>Plats / Gäster</th>
                  <th>Paket & Tillval</th>
                  <th>Beräknat Pris</th>
                  <th>Status</th>
                  <th style={{ textAlign: "right" }}>Åtgärder</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((b) => (
                  <tr key={b.id}>
                    <td>
                      <div style={{ fontWeight: "700", color: "var(--primary)" }}>{b.id}</div>
                      <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>{b.date}</div>
                    </td>
                    <td>
                      <div style={{ fontWeight: "600", color: "#fff" }}>{b.name}</div>
                      <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>{b.eventType} • {b.phone}</div>
                    </td>
                    <td>
                      <div>{b.location}</div>
                      <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>{b.guests}</div>
                    </td>
                    <td>
                      <div style={{ fontWeight: "600", color: "var(--secondary)" }}>{b.packageType}</div>
                      {b.addons && b.addons.length > 0 && (
                        <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
                          + {b.addons.join(", ")}
                        </div>
                      )}
                    </td>
                    <td>
                      <strong style={{ color: "var(--accent-gold)" }}>
                        {b.totalPrice ? b.totalPrice.toLocaleString("sv-SE") : "Offert"} kr
                      </strong>
                    </td>
                    <td>
                      <span className={`badge ${
                        b.status === "Godkänd" ? "badge-success" :
                        b.status === "Väntar på bekräftelse" ? "badge-warning" : "badge-purple"
                      }`}>
                        {b.status}
                      </span>
                    </td>
                    <td style={{ textAlign: "right" }}>
                      <div style={{ display: "flex", gap: "6px", justifyContent: "flex-end" }}>
                        {b.status !== "Godkänd" && (
                          <button
                            onClick={() => updateBookingStatus(b.id, "Godkänd")}
                            className="btn btn-primary btn-sm"
                            style={{ padding: "4px 10px", fontSize: "0.8rem" }}
                          >
                            Godkänn
                          </button>
                        )}
                        {b.status !== "Avböjd" && (
                          <button
                            onClick={() => updateBookingStatus(b.id, "Avböjd")}
                            className="btn btn-secondary btn-sm"
                            style={{ padding: "4px 10px", fontSize: "0.8rem", color: "var(--danger)" }}
                          >
                            Avböj
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Live Song Requests Board */}
        <div className="glass-panel" style={{ padding: "28px" }}>
          <h3 style={{ color: "#fff", fontSize: "1.3rem", marginBottom: "20px", display: "flex", alignItems: "center", gap: "10px" }}>
            <span>📻</span> Live Önskelåtar Från Publiken (DJ-Bås Feed)
          </h3>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "16px" }}>
            {songRequests.map((req) => (
              <div key={req.id} style={{ background: "rgba(255,255,255,0.03)", padding: "16px", borderRadius: "10px", border: "1px solid var(--border-color)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                    <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>🕒 {req.time}</span>
                    <span className={`badge ${req.status === "Spelad" ? "badge-success" : "badge-warning"}`}>
                      {req.status}
                    </span>
                  </div>
                  <div style={{ fontWeight: "700", color: "#fff", fontSize: "1rem", marginBottom: "4px" }}>
                    {req.song}
                  </div>
                  <div style={{ fontSize: "0.85rem", color: "var(--primary)" }}>
                    Önskad av: {req.requestedBy}
                  </div>
                </div>

                <div style={{ display: "flex", gap: "8px", marginTop: "16px" }}>
                  {req.status !== "Spelad" && (
                    <button
                      onClick={() => updateSongRequestStatus(req.id, "Spelad")}
                      className="btn btn-primary btn-sm"
                      style={{ flex: 1, padding: "4px" }}
                    >
                      ✓ Markera Spelad
                    </button>
                  )}
                  {req.status !== "Köad" && (
                    <button
                      onClick={() => updateSongRequestStatus(req.id, "Köad")}
                      className="btn btn-secondary btn-sm"
                      style={{ flex: 1, padding: "4px" }}
                    >
                      Köa Låt
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DJAdminDashboard
