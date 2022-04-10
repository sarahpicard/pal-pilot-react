import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import MyPets from './pages/MyPets/MyPets'
import AddPet from './pages/AddPet/AddPet'
import MyProfile from './pages/MyProfile/MyProfile'
import Appointments from './pages/Appointments/Appointments'
import * as authService from './services/authService'
import * as profileService from './services/profileService'

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const [profiles, setProfiles] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    if (user) {
      profileService.getAllProfiles()
        .then(allProfiles => setProfiles(allProfiles))
    }
  }, [user])

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/changePassword"
          element={user ? <ChangePassword handleSignupOrLogin={handleSignupOrLogin} /> : <Navigate to="/login" />}
        />
        <Route
          path="/mypets"
          element={user ? <MyPets user={user} /> : <Navigate to="/login" />}
        />
        <Route
          path="/addpet"
          element={user ? <AddPet user={user} /> : <Navigate to="/login" />}
        />
        <Route
          path="/appointments"
          element={user ? <Appointments user={user} /> : <Navigate to="/login" />}
        />
        <Route
          path="/myprofile"
          element={user ? <MyProfile user={user} /> : <Navigate to="/login" />}
        />
      </Routes>
    </>
  )
}

export default App
