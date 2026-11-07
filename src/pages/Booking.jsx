import { useState } from "react"
import { useBooking } from "../context/BookingContext"

const Booking = () => {
  const { addBooking } = useBooking()

  const [step, setStep] = useState(1)

  // Form State
  const [eventType, setEventType] = useState("Bröllop")
  const [date, setDate] = useState("")
  const [location, setLocation] = useState("")
  const [guests, setGuests] = useState("50-150 personer")
  const [packageType, setPackageType] = useState("Premium Club")
  const [selectedAddons, setSelectedAddons] = useState([])
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [notes, setNotes] = useState("")

  const [confirmedBooking, setConfirmedBooking] = useState(null)

  const packages = [
    { name: "Basic DJ", price: 8500, desc: "Standard setup upp till 4 timmar, idealisk för mindre fester." },
    { name: "Premium Club", price: 14500, desc: "Pro HK Audio ljud, DMX Moving Heads & Lasers. Vår populäraste!" },
    { name: "Gold VIP Sound & Light", price: 22000, desc: "Massiv ljudanläggning, rök, lasershow & obegränsad Speltid." }
  ]

  const availableAddons = [
    { id: "Rökmaskin", name: "💨 Professional Rökmaskin / Haze", price: 1200 },
    { id: "Trådlösa mikrofoner", name: "🎤 Extra Trådlösa Sennheiser Mics", price: 800 },
    { id: "Lasershow", name: "💥 High-Power Club Lasershow", price: 2500 },
    { id: "Extra basar", name: "🔊 Subwoofer Boom Upgrade (+1000W)", price: 2000 },
    { id: "Live Saxofonist", name: "🎷 Live Saxofonist Jam Session (1h)", price: 4500 }
  ]

  const toggleAddon = (addonId) => {
    setSelectedAddons((prev) =>
      prev.includes(addonId) ? prev.filter((id) => id !== addonId) : [...prev, addonId]
    )
  }

  // Price Calculation
  const selectedPkgObj = packages.find((p) => p.name === packageType) || packages[1]
  const addonsTotal = selectedAddons.reduce((sum, addonId) => {
    const item = availableAddons.find((a) => a.id === addonId)
    return sum + (item ? item.price : 0)
  }, 0)
  const estimatedPrice = selectedPkgObj.price + addonsTotal

  const handleSubmit = (e) => {
    e.preventDefault()
    const bookingData = {
      name,
      email,
      phone,
      eventType,
      date: date || new Date().toISOString().split("T")[0],
      location: location || "Stockholm",
      guests,
      packageType,
      addons: selectedAddons,
      totalPrice: estimatedPrice,
      notes
    }

    const created = addBooking(bookingData)
    setConfirmedBooking(created)
  }

  return (
    <div className="container section-padding">
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <span className="badge badge-gold" style={{ marginBottom: "12px" }}>BOKA ONLINE</span>
        <h1 style={{ fontSize: "3rem", color: "#fff", fontWeight: "900", marginBottom: "16px" }}>
          Boka DJ Valmel För Ditt <span className="gradient-text">Evenemang</span>
        </h1>
        <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", maxWidth: "650px", margin: "0 auto" }}>
          Fyll i formuläret nedan för att räkna ut pris och skicka in en bokningsförfrågan. Svar lämnas vanligtvis inom 2 timmar!
        </p>
      </div>

      {confirmedBooking ? (
        <div className="glass-panel-glow" style={{ padding: "50px", maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontSize: "4rem", marginBottom: "16px" }}>🎉</div>
          <h2 style={{ fontSize: "2.2rem", color: "#fff", marginBottom: "12px" }}>Tack För Din Bokningsförfrågan!</h2>
          <p style={{ color: "var(--text-muted)", fontSize: "1rem", marginBottom: "24px" }}>
            Din förfrågan har registrerats i vårt system och skickats direkt till DJ Valmels kalender.
          </p>

          <div style={{ background: "rgba(255,255,255,0.03)", padding: "24px", borderRadius: "12px", border: "1px solid var(--border-color)", textAlign: "left", marginBottom: "30px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px", fontSize: "0.95rem" }}>
              <span style={{ color: "var(--text-muted)" }}>Boknings-ID:</span>
              <strong style={{ color: "var(--primary)" }}>{confirmedBooking.id}</strong>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px", fontSize: "0.95rem" }}>
              <span style={{ color: "var(--text-muted)" }}>Kund:</span>
              <strong style={{ color: "#fff" }}>{confirmedBooking.name}</strong>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px", fontSize: "0.95rem" }}>
              <span style={{ color: "var(--text-muted)" }}>Typ & Datum:</span>
              <strong style={{ color: "#fff" }}>{confirmedBooking.eventType} ({confirmedBooking.date})</strong>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px", fontSize: "0.95rem" }}>
              <span style={{ color: "var(--text-muted)" }}>Valt Paket:</span>
              <strong style={{ color: "var(--secondary)" }}>{confirmedBooking.packageType}</strong>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "1.1rem", borderTop: "1px solid var(--border-color)", paddingTop: "12px", marginTop: "12px" }}>
              <span style={{ color: "#fff" }}>Beräknat Pris (ex. moms):</span>
              <strong style={{ color: "var(--accent-gold)" }}>{confirmedBooking.totalPrice.toLocaleString("sv-SE")} kr</strong>
            </div>
          </div>

          <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
            <button
              onClick={() => {
                setConfirmedBooking(null)
                setStep(1)
              }}
              className="btn btn-secondary"
            >
              Gör En Ny Bokning
            </button>
          </div>
        </div>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "40px" }}>
          {/* Main Booking Wizard */}
          <div className="glass-panel" style={{ padding: "40px" }}>
            {/* Step Indicators */}
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "30px", borderBottom: "1px solid var(--border-color)", paddingBottom: "16px" }}>
              <div style={{ color: step >= 1 ? "var(--primary)" : "var(--text-muted)", fontWeight: "600", fontSize: "0.9rem" }}>
                1. Event & Datum
              </div>
              <div style={{ color: step >= 2 ? "var(--primary)" : "var(--text-muted)", fontWeight: "600", fontSize: "0.9rem" }}>
                2. Paket & Tillval
              </div>
              <div style={{ color: step >= 3 ? "var(--primary)" : "var(--text-muted)", fontWeight: "600", fontSize: "0.9rem" }}>
                3. Dina Uppgifter
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              {/* STEP 1 */}
              {step === 1 && (
                <div>
                  <h3 style={{ color: "#fff", fontSize: "1.3rem", marginBottom: "20px" }}>Steg 1: Om Eventet</h3>

                  <div className="form-group">
                    <label>Typ Av Evenemang *</label>
                    <select className="form-control" value={eventType} onChange={(e) => setEventType(e.target.value)}>
                      <option value="Bröllop">👰 Bröllop & Fest</option>
                      <option value="Nattklubb">🪩 Nattklubb & Klubbkväll</option>
                      <option value="Företagsevent">👔 Företagsfest & Gala</option>
                      <option value="Privatfest">🎉 Privatfest / Födelsedag</option>
                      <option value="Student">🎓 Student & Examen</option>
                      <option value="Övrigt">✨ Övrigt Event</option>
                    </select>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                    <div className="form-group">
                      <label>Önskat Datum *</label>
                      <input
                        type="date"
                        className="form-control"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Plats / Ort *</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="t.ex. Stockholm, Villa Pauli"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Uppskattat Antal Gäster</label>
                    <select className="form-control" value={guests} onChange={(e) => setGuests(e.target.value)}>
                      <option value="Under 50 personer">Under 50 personer</option>
                      <option value="50-150 personer">50 - 150 personer</option>
                      <option value="150-300 personer">150 - 300 personer</option>
                      <option value="Över 300 personer (Festival/Klubb)">Över 300 personer (Festival/Klubb)</option>
                    </select>
                  </div>

                  <button type="button" onClick={() => setStep(2)} className="btn btn-primary" style={{ width: "100%", marginTop: "10px" }}>
                    Nästa Steg: Välj Paket →
                  </button>
                </div>
              )}

              {/* STEP 2 */}
              {step === 2 && (
                <div>
                  <h3 style={{ color: "#fff", fontSize: "1.3rem", marginBottom: "20px" }}>Steg 2: Paket & Tillval</h3>

                  <div className="form-group">
                    <label>Välj Huvudpaket</label>
                    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                      {packages.map((pkg) => (
                        <div
                          key={pkg.name}
                          onClick={() => setPackageType(pkg.name)}
                          style={{
                            padding: "16px",
                            borderRadius: "10px",
                            background: packageType === pkg.name ? "rgba(0, 242, 254, 0.12)" : "rgba(255,255,255,0.03)",
                            border: packageType === pkg.name ? "1px solid var(--primary)" : "1px solid var(--border-color)",
                            cursor: "pointer",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center"
                          }}
                        >
                          <div>
                            <div style={{ fontWeight: "700", color: "#fff", fontSize: "1rem" }}>{pkg.name}</div>
                            <div style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>{pkg.desc}</div>
                          </div>
                          <div style={{ fontWeight: "800", color: "var(--primary)", fontSize: "1.1rem", whiteSpace: "nowrap" }}>
                            {pkg.price.toLocaleString("sv-SE")} kr
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="form-group" style={{ marginTop: "24px" }}>
                    <label>Tillval Utrustning & Upplevelser</label>
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                      {availableAddons.map((addon) => {
                        const isChecked = selectedAddons.includes(addon.id)
                        return (
                          <div
                            key={addon.id}
                            onClick={() => toggleAddon(addon.id)}
                            style={{
                              padding: "12px 16px",
                              borderRadius: "8px",
                              background: isChecked ? "rgba(157, 78, 221, 0.15)" : "rgba(255,255,255,0.02)",
                              border: isChecked ? "1px solid rgba(157, 78, 221, 0.4)" : "1px solid var(--border-color)",
                              cursor: "pointer",
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center"
                            }}
                          >
                            <span style={{ color: isChecked ? "#fff" : "var(--text-muted)", fontSize: "0.9rem", fontWeight: isChecked ? "600" : "normal" }}>
                              {addon.name}
                            </span>
                            <span style={{ color: "var(--accent-gold)", fontSize: "0.9rem", fontWeight: "600" }}>
                              +{addon.price.toLocaleString("sv-SE")} kr
                            </span>
                          </div>
                        )
                      })}
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: "12px", marginTop: "24px" }}>
                    <button type="button" onClick={() => setStep(1)} className="btn btn-secondary" style={{ flex: 1 }}>
                      ← Tillbaka
                    </button>
                    <button type="button" onClick={() => setStep(3)} className="btn btn-primary" style={{ flex: 2 }}>
                      Nästa Steg: Kontakt →
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3 */}
              {step === 3 && (
                <div>
                  <h3 style={{ color: "#fff", fontSize: "1.3rem", marginBottom: "20px" }}>Steg 3: Dina Kontaktuppgifter</h3>

                  <div className="form-group">
                    <label>Ditt Namn / Företag *</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Anna Svensson"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                    <div className="form-group">
                      <label>E-postadress *</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="anna@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Telefonnummer *</label>
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="070-123 45 67"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Meddelande & Speciella Önskemål</label>
                    <textarea
                      className="form-control"
                      rows="3"
                      placeholder="Beskriv tider, musikstil eller om du önskar specifik utrustning..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                    ></textarea>
                  </div>

                  <div style={{ display: "flex", gap: "12px", marginTop: "24px" }}>
                    <button type="button" onClick={() => setStep(2)} className="btn btn-secondary" style={{ flex: 1 }}>
                      ← Tillbaka
                    </button>
                    <button type="submit" className="btn btn-primary" style={{ flex: 2, padding: "14px" }}>
                      ⚡ Skicka Bokningsförfrågan
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>

          {/* Live Price Estimation Box */}
          <div>
            <div className="glass-panel-glow" style={{ padding: "30px", position: "sticky", top: "100px" }}>
              <span className="badge badge-primary" style={{ marginBottom: "12px" }}>PRISÖVERSIKT</span>
              <h3 style={{ color: "#fff", fontSize: "1.4rem", marginBottom: "20px" }}>Beräknad Offert</h3>

              <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "20px", fontSize: "0.95rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", color: "var(--text-muted)" }}>
                  <span>Eventtyp:</span>
                  <strong style={{ color: "#fff" }}>{eventType}</strong>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", color: "var(--text-muted)" }}>
                  <span>Valt Paket:</span>
                  <strong style={{ color: "#fff" }}>{selectedPkgObj.name}</strong>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", color: "var(--text-muted)" }}>
                  <span>Paketpris:</span>
                  <span style={{ color: "#fff" }}>{selectedPkgObj.price.toLocaleString("sv-SE")} kr</span>
                </div>

                {selectedAddons.length > 0 && (
                  <div style={{ borderTop: "1px dashed var(--border-color)", paddingTop: "10px", marginTop: "4px" }}>
                    <div style={{ fontSize: "0.85rem", color: "var(--secondary)", marginBottom: "6px", fontWeight: "600" }}>Valda Tillval:</div>
                    {selectedAddons.map((id) => {
                      const item = availableAddons.find((a) => a.id === id)
                      return (
                        <div key={id} style={{ display: "flex", justifyContent: "space-between", fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "4px" }}>
                          <span>• {item?.id}</span>
                          <span>+{item?.price.toLocaleString("sv-SE")} kr</span>
                        </div>
                      )
                    })}
                  </div>
                )}
              </div>

              <div style={{ borderTop: "1px solid var(--border-color)", paddingTop: "16px", marginTop: "16px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                  <span style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>Uppskattad Totalsumma:</span>
                  <span style={{ fontSize: "1.8rem", fontWeight: "900", color: "var(--accent-gold)" }}>
                    {estimatedPrice.toLocaleString("sv-SE")} <span style={{ fontSize: "0.9rem", color: "var(--text-muted)", fontWeight: "normal" }}>kr</span>
                  </span>
                </div>
                <div style={{ fontSize: "0.75rem", color: "var(--text-dim)", marginTop: "6px" }}>
                  * Exklusive moms (25%). Slutgiltig bekräftad offert skickas via e-post.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Booking
