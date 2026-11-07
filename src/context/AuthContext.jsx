import { createContext, useContext, useState, useEffect } from "react"

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  // role can be: null (Guest), 'it_admin' (IT Admin), 'dj_admin' (DJ Valmel Admin)
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("dj_valmel_auth")
    return savedUser ? JSON.parse(savedUser) : null
  })

  useEffect(() => {
    if (user) {
      localStorage.setItem("dj_valmel_auth", JSON.stringify(user))
    } else {
      localStorage.removeItem("dj_valmel_auth")
    }
  }, [user])

  const loginAsITAdmin = () => {
    const authData = {
      role: "it_admin",
      username: "it_support",
      name: "IT Infrastructure Lead",
      email: "it@djvalmel.se",
      avatar: "⚙️"
    }
    setUser(authData)
    return authData
  }

  const loginAsDJAdmin = () => {
    const authData = {
      role: "dj_admin",
      username: "valmel",
      name: "Valmel (DJ)",
      email: "boka@djvalmel.se",
      avatar: "🎧"
    }
    setUser(authData)
    return authData
  }

  const logout = () => {
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, loginAsITAdmin, loginAsDJAdmin, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
