import { useState } from "react"

const PLAYLIST = [
  { id: 1, title: "Valmel - Live at Club Neon (Peak Time EDM)", duration: "48:15", genre: "EDM / Electro" },
  { id: 2, title: "Valmel - Sunset Vibes & Deep House Session", duration: "62:40", genre: "Deep House" },
  { id: 3, title: "Valmel - Swedish Festival Anthem Remix 2025", duration: "03:45", genre: "Festival Mainstage" }
]

const AudioPlayerBar = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0)
  const [isMuted, setIsMuted] = useState(false)

  const currentTrack = PLAYLIST[currentTrackIndex]

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  const nextTrack = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % PLAYLIST.length)
  }

  const prevTrack = () => {
    setCurrentTrackIndex((prev) => (prev - 1 + PLAYLIST.length) % PLAYLIST.length)
  }

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        background: "rgba(10, 12, 20, 0.95)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderTop: "1px solid rgba(0, 242, 254, 0.2)",
        padding: "10px 24px",
        zIndex: 999,
        boxShadow: "0 -10px 30px rgba(0,0,0,0.5)"
      }}
    >
      <div className="container audio-player-container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px" }}>
        {/* Track info & Equalizer */}
        <div className="audio-player-info" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div style={{
            width: "38px",
            height: "38px",
            borderRadius: "8px",
            background: "linear-gradient(135deg, #7209b7, #00f2fe)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.1rem",
            boxShadow: isPlaying ? "0 0 12px rgba(0, 242, 254, 0.5)" : "none",
            flexShrink: 0
          }}>
            🎛️
          </div>

          <div style={{ overflow: "hidden" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ fontSize: "0.85rem", fontWeight: "600", color: "#fff", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                {currentTrack.title}
              </span>
              {isPlaying && (
                <div style={{ display: "flex", gap: "2px", alignItems: "flex-end", height: "12px", flexShrink: 0 }}>
                  <div className="eq-bar"></div>
                  <div className="eq-bar"></div>
                  <div className="eq-bar"></div>
                  <div className="eq-bar"></div>
                </div>
              )}
            </div>
            <div style={{ display: "flex", gap: "8px", fontSize: "0.72rem", color: "var(--text-muted)" }}>
              <span>{currentTrack.genre}</span>
              <span>•</span>
              <span>{currentTrack.duration}</span>
            </div>
          </div>
        </div>

        {/* Player Controls */}
        <div style={{ display: "flex", alignItems: "center", gap: "14px", flexShrink: 0 }}>
          <button onClick={prevTrack} style={{ background: "none", color: "var(--text-muted)", fontSize: "1.1rem" }}>
            ⏮
          </button>
          <button
            onClick={togglePlay}
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #00f2fe, #4facfe)",
              color: "#050b14",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.1rem",
              boxShadow: "0 0 15px rgba(0, 242, 254, 0.4)"
            }}
          >
            {isPlaying ? "⏸" : "▶"}
          </button>
          <button onClick={nextTrack} style={{ background: "none", color: "var(--text-muted)", fontSize: "1.1rem" }}>
            ⏭
          </button>
        </div>

        {/* Waveform & Mute */}
        <div className="audio-player-waveform" style={{ display: "flex", alignItems: "center", gap: "16px", minWidth: "180px" }}>
          <div style={{ flex: 1, display: "flex", alignItems: "center", gap: "3px", height: "20px" }}>
            {[40, 70, 30, 90, 60, 100, 45, 80, 55, 95, 35, 75, 50, 85, 65, 40, 90, 60, 30, 80].map((height, i) => (
              <div
                key={i}
                style={{
                  flex: 1,
                  height: `${height}%`,
                  background: isPlaying && i % 3 === 0 ? "var(--primary)" : "rgba(255,255,255,0.15)",
                  borderRadius: "2px",
                  transition: "all 0.3s"
                }}
              />
            ))}
          </div>

          <button
            onClick={() => setIsMuted(!isMuted)}
            style={{ background: "none", color: "var(--text-muted)", fontSize: "1rem" }}
          >
            {isMuted ? "🔇" : "🔊"}
          </button>
        </div>
      </div>
    </div>
  )
}

export default AudioPlayerBar
