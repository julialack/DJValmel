import { useState } from "react"
import { useBooking } from "../context/BookingContext"

const TRACKS = [
  { id: 1, title: "Club Neon Live Set 2025", category: "EDM", duration: "54:20", plays: "12,450", date: "2025-02" },
  { id: 2, title: "Summer Sunset Deep House Mix", category: "Deep House", duration: "1:02:15", plays: "28,900", date: "2025-01" },
  { id: 3, title: "Stockholm Festival Warmup", category: "Tech House", duration: "45:00", plays: "9,800", date: "2024-12" },
  { id: 4, title: "90s & 00s Retro Throwback Party", category: "Party Classics", duration: "1:15:40", plays: "41,200", date: "2024-11" },
  { id: 5, title: "Afro House & Lounge Chill Session", category: "Afro House", duration: "58:30", plays: "15,600", date: "2024-10" }
]

const Music = () => {
  const [activeCategory, setActiveCategory] = useState("Alla")
  const [playingId, setPlayingId] = useState(null)
  const [songInput, setSongInput] = useState("")
  const [guestName, setGuestName] = useState("")
  const [requestSubmitted, setRequestSubmitted] = useState(false)

  const { addSongRequest } = useBooking()

  const categories = ["Alla", "EDM", "Deep House", "Tech House", "Party Classics", "Afro House"]

  const filteredTracks = activeCategory === "Alla"
    ? TRACKS
    : TRACKS.filter((t) => t.category === activeCategory)

  const handleRequestSubmit = (e) => {
    e.preventDefault()
    if (!songInput.trim()) return
    addSongRequest(songInput, guestName)
    setRequestSubmitted(true)
    setSongInput("")
    setGuestName("")
    setTimeout(() => setRequestSubmitted(false), 4000)
  }

  return (
    <div className="container section-padding">
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <span className="badge badge-primary" style={{ marginBottom: "12px" }}>LYSSNA & MISA</span>
        <h1 style={{ fontSize: "3rem", color: "#fff", fontWeight: "900", marginBottom: "16px" }}>
          Musik, Mixar & <span className="gradient-text">Önskelåtar</span>
        </h1>
        <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", maxWidth: "650px", margin: "0 auto" }}>
          Utforska DJ Valmels senaste live-set, studio-mixar och skicka in dina önskelåtar inför nästa spelning!
        </p>
      </div>

      {/* Category Filter Pills */}
      <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap", marginBottom: "40px" }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className="btn btn-secondary"
            style={{
              padding: "8px 20px",
              borderRadius: "20px",
              fontSize: "0.9rem",
              background: activeCategory === cat ? "linear-gradient(135deg, #00f2fe, #4facfe)" : "rgba(255,255,255,0.06)",
              color: activeCategory === cat ? "#050b14" : "var(--text-main)",
              borderColor: activeCategory === cat ? "transparent" : "var(--border-color)",
              boxShadow: activeCategory === cat ? "0 0 15px rgba(0,242,254,0.3)" : "none"
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Track List */}
      <div className="glass-panel" style={{ padding: "24px", marginBottom: "60px" }}>
        <table className="custom-table">
          <thead>
            <tr>
              <th style={{ width: "60px" }}>Spela</th>
              <th>Mix / Titel</th>
              <th>Kategori</th>
              <th>Längd</th>
              <th>Spelningar</th>
              <th style={{ textAlign: "right" }}>Länk</th>
            </tr>
          </thead>
          <tbody>
            {filteredTracks.map((track) => (
              <tr key={track.id}>
                <td>
                  <button
                    onClick={() => setPlayingId(playingId === track.id ? null : track.id)}
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      background: playingId === track.id ? "var(--accent-pink)" : "var(--primary)",
                      color: "#050b14",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.9rem",
                      fontWeight: "bold"
                    }}
                  >
                    {playingId === track.id ? "⏸" : "▶"}
                  </button>
                </td>
                <td>
                  <div style={{ fontWeight: "600", color: "#fff" }}>{track.title}</div>
                  {playingId === track.id && (
                    <div style={{ fontSize: "0.75rem", color: "var(--primary)" }}>Spelar nu... 🔊</div>
                  )}
                </td>
                <td>
                  <span className="badge badge-purple">{track.category}</span>
                </td>
                <td>{track.duration}</td>
                <td style={{ color: "var(--text-muted)" }}>{track.plays}</td>
                <td style={{ textAlign: "right" }}>
                  <a href="#soundcloud" className="btn btn-secondary btn-sm">SoundCloud ↗</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Live Song Request Box for Audience */}
      <div className="glass-panel-glow" style={{ padding: "36px", maxWidth: "700px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "24px" }}>
          <span className="badge badge-gold" style={{ marginBottom: "10px" }}>ÖNSKELÅTSBOX</span>
          <h2 style={{ fontSize: "1.8rem", color: "#fff", fontWeight: "800" }}>Skicka LåtönskeMål Till DJn 🎵</h2>
          <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>
            Är du på en spelning just nu? Skicka din låtönskan direkt till DJ Valmels skärm i dj-båset!
          </p>
        </div>

        {requestSubmitted && (
          <div style={{
            background: "rgba(16, 185, 129, 0.15)",
            border: "1px solid rgba(16, 185, 129, 0.4)",
            color: "#10b981",
            padding: "14px",
            borderRadius: "10px",
            textAlign: "center",
            marginBottom: "20px",
            fontWeight: "600"
          }}>
            ✅ Din låtönskan har skickats till DJ Valmels dj-bås!
          </div>
        )}

        <form onSubmit={handleRequestSubmit}>
          <div className="form-group">
            <label>Önskad Låt & Artist *</label>
            <input
              type="text"
              className="form-control"
              placeholder="t.ex. Avicii - Levels eller Fred again.."
              value={songInput}
              onChange={(e) => setSongInput(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Ditt Namn / Bord (valfritt)</label>
            <input
              type="text"
              className="form-control"
              placeholder="t.ex. Bord 5 eller Anna N"
              value={guestName}
              onChange={(e) => setGuestName(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary" style={{ width: "100%", padding: "14px", marginTop: "10px" }}>
            🚀 Skicka Önskelåt Till DJn
          </button>
        </form>
      </div>
    </div>
  )
}

export default Music
