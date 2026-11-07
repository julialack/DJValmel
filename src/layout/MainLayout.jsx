import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import AudioPlayerBar from "../components/AudioPlayerBar"

const MainLayout = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />
      <main style={{ flex: 1, paddingBottom: "90px" }}>
        <Outlet />
      </main>
      <Footer />
      <AudioPlayerBar />
    </div>
  )
}

export default MainLayout
