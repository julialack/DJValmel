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
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <span className="badge badge-purple" style={{ marginBottom: "12px" }}>KONTAKT & SUPPORT</span>
        <h1 style={{ fontSize: "3rem", color: "#fff", fontWeight: "900", marginBottom: "16px" }}>
          Hör Av Dig Till <span className="gradient-text">DJ Valmel</span>
        </h1>
        <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", maxWidth: "600px", margin: "0 auto" }}>
          Har du frågor inför din bokning eller önskar du skräddarsy en lösning? Skicka ett meddelande eller ring direkt!
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px", marginBottom: "60px" }}>
        {/* Contact Info Cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div className="glass-panel" style={{ padding: "28px", display: "flex", alignItems: "center", gap: "20px" }}>
            <div style={{ width: "50px", height: "50px", borderRadius: "12px", background: "rgba(0,242,254,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem" }}>
              📧
            </div>
            <div>
              <div style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>E-POST</div>
              <div style={{ color: "#fff", fontWeight: "700", fontSize: "1.1rem" }}>boka@djvalmel.se</div>
            </div>
          </div>

          <div className="glass-panel" style={{ padding: "28px", display: "flex", alignItems: "center", gap: "20px" }}>
            <div style={{ width: "50px", height: "50px", borderRadius: "12px", background: "rgba(157,78,221,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem" }}>
              📞
            </div>
            <div>
              <div style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>TELEFON / BOKNING</div>
              <div style={{ color: "#fff", fontWeight: "700", fontSize: "1.1rem" }}>070-987 65 43</div>
            </div>
          </div>

          <div className="glass-panel" style={{ padding: "28px", display: "flex", alignItems: "center", gap: "20px" }}>
            <div style={{ width: "50px", height: "50px", borderRadius: "12px", background: "rgba(255,183,3,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem" }}>
              📍
            </div>
            <div>
              <div style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>BAS & STUDIO</div>
              <div style={{ color: "#fff", fontWeight: "700", fontSize: "1.1rem" }}>Stockholm, Sverige (Turnerar i hela landet)</div>
            </div>
          </div>
        </div>

        {/* Send Message Form */}
        <div className="glass-panel" style={{ padding: "36px" }}>
          <h3 style={{ color: "#fff", fontSize: "1.4rem", marginBottom: "20px" }}>Skicka Ett Direktmeddelande</h3>

          {submitted && (
            <div style={{ background: "rgba(16, 185, 129, 0.15)", border: "1px solid rgba(16, 185, 129, 0.4)", color: "#10b981", padding: "14px", borderRadius: "10px", textAlign: "center", marginBottom: "20px" }}>
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
              <textarea className="form-control" rows="4" placeholder="Skriv din fråga här..." required></textarea>
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: "100%", padding: "14px" }}>
              ✉️ Skicka Meddelande
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
