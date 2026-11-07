import { createContext, useContext, useState, useEffect } from "react"
import { supabase } from "../lib/supabaseClient"

const BookingContext = createContext()

const INITIAL_BOOKINGS = [
  {
    id: "BOK-9421",
    name: "Erik & Sofia Lindqvist",
    email: "erik.l@gmail.com",
    phone: "070-123 45 67",
    eventType: "Bröllop",
    date: "2025-06-14",
    location: "Villa Pauli, Djursholm",
    guests: "120 personer",
    packageType: "Gold VIP Sound & Light",
    addons: ["Rökmaskin", "Trådlösa mikrofoner", "Lasershow"],
    totalPrice: 18500,
    status: "Godkänd",
    notes: "Speciellt önskemål: Första dansen 'Can't Take My Eyes Off You'. Ville ha mix av 90-tal och modern EDM efter kl 23.",
    createdAt: "2025-02-10"
  },
  {
    id: "BOK-9422",
    name: "Nattklubb Berns / Marcus",
    email: "marcus@berns.se",
    phone: "073-987 65 43",
    eventType: "Nattklubb",
    date: "2025-05-23",
    location: "Berns Stora Salen, Stockholm",
    guests: "800 personer",
    packageType: "Premium Club",
    addons: ["Extra basar"],
    totalPrice: 22000,
    status: "Väntar på bekräftelse",
    notes: "Mainstage slot kl 01:00 - 03:00. Peak time EDM / Tech House set.",
    createdAt: "2025-02-18"
  },
  {
    id: "BOK-9423",
    name: "Spotify Sommarfest",
    email: "events@spotify.com",
    phone: "08-555 12 34",
    eventType: "Företagsevent",
    date: "2025-06-27",
    location: "Münchenbryggeriet, Stockholm",
    guests: "350 personer",
    packageType: "Gold VIP Sound & Light",
    addons: ["Rökmaskin", "Lasershow", "Live Saxofonist"],
    totalPrice: 28000,
    status: "Godkänd",
    notes: "Företagsfest med tema Future Disco & House. Leverera högtalare kl 16.",
    createdAt: "2025-02-20"
  }
]

const INITIAL_GIGS = [
  { id: 1, title: "Club Neon Mainstage", location: "Stockholm", date: "2025-04-12", time: "23:00 - 03:00", type: "Nattklubb", status: "Bekräftad" },
  { id: 2, title: "Valborg Midnight Rave", location: "Uppsala", date: "2025-04-30", time: "22:00 - 04:00", type: "Festival/Rave", status: "Bekräftad" },
  { id: 3, title: "Berns Club Night", location: "Stockholm", date: "2025-05-23", time: "01:00 - 03:00", type: "Nattklubb", status: "Preliminär" },
  { id: 4, title: "Bröllop Lindqvist", location: "Djursholm", date: "2025-06-14", time: "17:00 - 02:00", type: "Bröllop", status: "Bekräftad" },
  { id: 5, title: "Spotify Summer Bash", location: "Stockholm", date: "2025-06-27", time: "18:00 - 01:00", type: "Företagsevent", status: "Bekräftad" }
]

const INITIAL_SONG_REQUESTS = [
  { id: 1, song: "Fred again.. - Marea (We've Lost Dancing)", requestedBy: "Bord 4", time: "23:15", status: "Spelad" },
  { id: 2, song: "Peggy Gou - (It Goes Like) Nanana", requestedBy: "Anna N", time: "23:22", status: "Köad" },
  { id: 3, song: "Swedish House Mafia - Don't You Worry Child", requestedBy: "Brudgummen", time: "23:40", status: "Köad" },
  { id: 4, song: "Avicii - Levels", requestedBy: "VIP Lounge", time: "23:45", status: "Väntar" }
]

const INITIAL_SYSTEM_LOGS = [
  { id: "LOG-101", timestamp: new Date().toISOString().substring(0, 19).replace("T", " "), level: "INFO", module: "AUTH", message: "IT Admin session initiated securely." },
  { id: "LOG-102", timestamp: new Date(Date.now() - 3600000).toISOString().substring(0, 19).replace("T", " "), level: "SUCCESS", module: "BOOKING_API", message: "New booking request #BOK-9423 received and saved to database." },
  { id: "LOG-103", timestamp: new Date(Date.now() - 7200000).toISOString().substring(0, 19).replace("T", " "), level: "INFO", module: "AUDIO_SERVER", message: "SoundCloud API stream proxy cache updated. Latency: 12ms." },
  { id: "LOG-104", timestamp: new Date(Date.now() - 14400000).toISOString().substring(0, 19).replace("T", " "), level: "WARN", module: "SSL_CERT", message: "SSL certificate auto-renew scheduled for 2025-05-01." }
]

export const BookingProvider = ({ children }) => {
  const [bookings, setBookings] = useState(() => {
    const saved = localStorage.getItem("dj_valmel_bookings")
    return saved ? JSON.parse(saved) : INITIAL_BOOKINGS
  })

  const [gigs, setGigs] = useState(() => {
    const saved = localStorage.getItem("dj_valmel_gigs")
    return saved ? JSON.parse(saved) : INITIAL_GIGS
  })

  const [songRequests, setSongRequests] = useState(() => {
    const saved = localStorage.getItem("dj_valmel_song_requests")
    return saved ? JSON.parse(saved) : INITIAL_SONG_REQUESTS
  })

  const [systemLogs, setSystemLogs] = useState(() => {
    const saved = localStorage.getItem("dj_valmel_logs")
    return saved ? JSON.parse(saved) : INITIAL_SYSTEM_LOGS
  })

  const [systemFlags, setSystemFlags] = useState(() => {
    const saved = localStorage.getItem("dj_valmel_flags")
    return saved ? JSON.parse(saved) : {
      bookingEnabled: true,
      audioAutoPlay: false,
      maintenanceMode: false,
      highBitrateAudio: true,
      smsNotifications: true
    }
  })

  // Supabase Fetch on Load if connected
  useEffect(() => {
    if (!supabase) return

    const fetchSupabaseData = async () => {
      try {
        const { data: bData, error: bErr } = await supabase.from("bookings").select("*")
        if (!bErr && bData && bData.length > 0) setBookings(bData)

        const { data: gData, error: gErr } = await supabase.from("gigs").select("*")
        if (!gErr && gData && gData.length > 0) setGigs(gData)

        const { data: srData, error: srErr } = await supabase.from("song_requests").select("*")
        if (!srErr && srData && srData.length > 0) setSongRequests(srData)
      } catch (err) {
        console.warn("Supabase fetch fallback to local storage:", err)
      }
    }

    fetchSupabaseData()
  }, [])

  useEffect(() => {
    localStorage.setItem("dj_valmel_bookings", JSON.stringify(bookings))
  }, [bookings])

  useEffect(() => {
    localStorage.setItem("dj_valmel_gigs", JSON.stringify(gigs))
  }, [gigs])

  useEffect(() => {
    localStorage.setItem("dj_valmel_song_requests", JSON.stringify(songRequests))
  }, [songRequests])

  useEffect(() => {
    localStorage.setItem("dj_valmel_logs", JSON.stringify(systemLogs))
  }, [systemLogs])

  useEffect(() => {
    localStorage.setItem("dj_valmel_flags", JSON.stringify(systemFlags))
  }, [systemFlags])

  const addBooking = async (newBookingData) => {
    const newId = `BOK-${Math.floor(1000 + Math.random() * 9000)}`
    const booking = {
      id: newId,
      ...newBookingData,
      status: "Väntar på bekräftelse",
      createdAt: new Date().toISOString().split("T")[0]
    }

    setBookings((prev) => [booking, ...prev])
    addLog("SUCCESS", "BOOKING_ENGINE", `Bokningsförfrågan ${newId} skapad av ${newBookingData.name}`)

    if (supabase) {
      try {
        await supabase.from("bookings").insert([booking])
      } catch (err) {
        console.error("Supabase insert booking error:", err)
      }
    }

    return booking
  }

  const updateBookingStatus = async (id, newStatus) => {
    setBookings((prev) =>
      prev.map((b) => (b.id === id ? { ...b, status: newStatus } : b))
    )
    addLog("INFO", "DJ_ADMIN", `Bokningsstatus för ${id} ändrad till '${newStatus}'`)

    if (supabase) {
      try {
        await supabase.from("bookings").update({ status: newStatus }).eq("id", id)
      } catch (err) {
        console.error("Supabase update booking status error:", err)
      }
    }
  }

  const addGig = async (gigData) => {
    const newGig = { id: Date.now(), ...gigData }
    setGigs((prev) => [newGig, ...prev])
    addLog("INFO", "CALENDAR", `Ny spelning tillagd: ${gigData.title}`)

    if (supabase) {
      try {
        await supabase.from("gigs").insert([newGig])
      } catch (err) {
        console.error("Supabase insert gig error:", err)
      }
    }
  }

  const addSongRequest = async (song, requestedBy) => {
    const newRequest = {
      id: Date.now(),
      song,
      requestedBy: requestedBy || "Gäst",
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      status: "Väntar"
    }
    setSongRequests((prev) => [newRequest, ...prev])

    if (supabase) {
      try {
        await supabase.from("song_requests").insert([newRequest])
      } catch (err) {
        console.error("Supabase insert song request error:", err)
      }
    }
  }

  const updateSongRequestStatus = async (id, status) => {
    setSongRequests((prev) =>
      prev.map((sr) => (sr.id === id ? { ...sr, status } : sr))
    )

    if (supabase) {
      try {
        await supabase.from("song_requests").update({ status }).eq("id", id)
      } catch (err) {
        console.error("Supabase update song request error:", err)
      }
    }
  }

  const addLog = (level, module, message) => {
    const logEntry = {
      id: `LOG-${Math.floor(100 + Math.random() * 900)}`,
      timestamp: new Date().toISOString().substring(0, 19).replace("T", " "),
      level,
      module,
      message
    }
    setSystemLogs((prev) => [logEntry, ...prev.slice(0, 49)])
  }

  const toggleFlag = (flagName) => {
    setSystemFlags((prev) => {
      const updated = { ...prev, [flagName]: !prev[flagName] }
      addLog("WARN", "IT_CONFIG", `Systemflagga '${flagName}' ändrad till ${updated[flagName]}`)
      return updated
    })
  }

  const resetAllData = () => {
    setBookings(INITIAL_BOOKINGS)
    setGigs(INITIAL_GIGS)
    setSongRequests(INITIAL_SONG_REQUESTS)
    setSystemLogs(INITIAL_SYSTEM_LOGS)
    addLog("WARN", "SYSTEM_RESET", "IT Admin har återställt all databas-demo-data.")
  }

  return (
    <BookingContext.Provider
      value={{
        bookings,
        gigs,
        songRequests,
        systemLogs,
        systemFlags,
        addBooking,
        updateBookingStatus,
        addGig,
        addSongRequest,
        updateSongRequestStatus,
        addLog,
        toggleFlag,
        resetAllData
      }}
    >
      {children}
    </BookingContext.Provider>
  )
}

export default BookingContext

export const useBooking = () => {
  const context = useContext(BookingContext)
  if (!context) {
    throw new Error("useBooking must be used within a BookingProvider")
  }
  return context
}
