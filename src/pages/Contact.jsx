import { useState } from "react"

const Contact = () => {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <div className="container section-padding">
      <div style={{ textAlign: "center", marginBottom: "36px" }}>
        <span className="badge badge-purple" style={{ marginBottom: "8px" }}>KONTAKT & SUPPORT</span>
        <h1 className="section-title" style={{ fontSize: "clamp(2rem, 5vw, 3rem)", marginBottom: "12px" }}>
          Hör Av Dig Till <span className="gradient-text">DJ Valmel</span>
        </h1>
        <p style={{ color: "var(--text-muted)", fontSize: "clamp(0.95rem, 2vw, 1.05rem)", maxWidth: "600px", margin: "0 auto" }}>
          Har du frågor inför din bokning eller önskar du skräddarsy en lösning? Skicka ett meddelande eller ring direkt!
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
        {/* Contact Info Cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          <div className="glass-panel" style={{ padding: "20px", display: "flex", alignItems: "center", gap: "16px" }}>
            <div style={{ width: "44px", height: "44px", borderRadius: "10px", background: "rgba(0,242,254,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.3rem", flexShrink: 0 }}>
              📧
            </div>
            <div>
              <div style={{ color: "var(--text-muted)", fontSize: "0.75rem" }}>E-POST</div>
              <div style={{ color: "#fff", fontWeight: "700", fontSize: "1rem" }}>boka@djvalmel.se</div>
            </div>
          </div>

          <div className="glass-panel" style={{ padding: "20px", display: "flex", alignItems: "center", gap: "16px" }}>
            <div style={{ width: "44px", height: "44px", borderRadius: "10px", background: "rgba(157,78,221,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.3rem", flexShrink: 0 }}>
              📞
            </div>
            <div>
              <div style={{ color: "var(--text-muted)", fontSize: "0.75rem" }}>TELEFON / BOKNING</div>
              <div style={{ color: "#fff", fontWeight: "700", fontSize: "1rem" }}>070-987 65 43</div>
            </div>
          </div>

          <div className="glass-panel" style={{ padding: "20px", display: "flex", alignItems: "center", gap: "16px" }}>
            <div style={{ width: "44px", height: "44px", borderRadius: "10px", background: "rgba(255,183,3,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.3rem", flexShrink: 0 }}>
              📍
            </div>
            <div>
              <div style={{ color: "var(--text-muted)", fontSize: "0.75rem" }}>BAS & STUDIO</div>
              <div style={{ color: "#fff", fontWeight: "700", fontSize: "1rem" }}>Stockholm (Turnerar i hela landet)</div>
            </div>
          </div>
        </div>

        {/* Send Message Form */}
        <div className="glass-panel" style={{ padding: "24px" }}>
          <h3 style={{ color: "#fff", fontSize: "1.2rem", marginBottom: "16px" }}>Skicka Ett Direktmeddelande</h3>

          {submitted && (
            <div style={{ background: "rgba(16, 185, 129, 0.15)", border: "1px solid rgba(16, 185, 129, 0.4)", color: "#10b981", padding: "12px", borderRadius: "8px", textAlign: "center", marginBottom: "16px", fontSize: "0.9rem" }}>
              ✅ Tack för ditt meddelande! Vi återkommer inom kort.
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Ditt Namn</label>
              <input type="text" className="form-control" placeholder="Johan Berg" required />
            </div>

            <div className="form-group">
              <label>E-post</label>
              <input type="email" className="form-control" placeholder="johan@example.com" required />
            </div>

            <div className="form-group">
              <label>Meddelande</label>
              <textarea className="form-control" rows="3" placeholder="Skriv din fråga här..." required></textarea>
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: "100%", padding: "12px" }}>
              ✉️ Skicka Meddelande
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
