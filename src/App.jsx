import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AuthProvider } from "./context/AuthContext"
import { BookingProvider } from "./context/BookingContext"
import MainLayout from "./layout/MainLayout"
import Home from "./pages/Home"
import About from "./pages/About"
import Music from "./pages/Music"
import Booking from "./pages/Booking"
import Contact from "./pages/Contact"
import Login from "./pages/Login"
import AdminDashboard from "./pages/admin/AdminDashboard"

function App() {
  return (
    <AuthProvider>
      <BookingProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="music" element={<Music />} />
              <Route path="booking" element={<Booking />} />
              <Route path="contact" element={<Contact />} />
              <Route path="login" element={<Login />} />
              <Route path="admin" element={<AdminDashboard />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </BookingProvider>
    </AuthProvider>
  )
}

export default App
