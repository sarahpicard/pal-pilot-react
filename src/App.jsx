import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import Header from './components/NavBar/Header/Header'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import MyPets from './pages/MyPets/MyPets'
import AddPetForm from './pages/AddPet/AddPetForm'
import MyProfile from './pages/MyProfile/MyProfile'
import Appointments from './pages/Appointments/Appointments'
import Pet from './pages/Pet/Pet'

import * as authService from './services/authService'
import * as profileService from './services/profileService'
import * as petService from './services/petService'
import * as appointmentService from './services/appointmentService'

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const [profiles, setProfiles] = useState([])
  const navigate = useNavigate()
  const [pets, setPets] = useState([])
  const [appointments, setAppointments] = useState([])

  // use effect to get all profiles
  // useEffect(() => {
  //   if (user) {
  //     profileService.getAllProfiles()
  //       .then(allProfiles => setProfiles(allProfiles))
  //   }
  // }, [user])

  // use effect to get all pets
  useEffect(() => {
    const fetchData = async () => {
      const data = await petService.getAll()
      setPets(data)
    }
    fetchData()
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      const data = await appointmentService.getAll()
      setAppointments(data)
    }
    fetchData()
  }, [])

  // use effect to handle logout
  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  // use effect to handle signup or login
  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  // handle add new pet
  const addPet = async (petData) => {
    const pet = await petService.create(petData)
    setPets([...pets, pet])
  }

  // handle update pet
  const updatePet = async (petData) => {
    const updatedPet = await petService.update(petData)
    setPets(pets.map((pet) => (
      pet.id === updatedPet.id ? updatedPet : pet
    )))
  }

  // handle add appointment 
  const addAppointment = async (appointmentData) => {
    const appointment = await appointmentService.create(appointmentData)
    setAppointments([...appointments, appointment])
  }

  // handle delete appointment 
  const deleteAppointment = async (id) => {
    await appointmentService.deleteOne(id)
    setAppointments(appointments.filter(appointment => appointment.id !== parseInt(id)))
  }

  return (
    <>
      <Header user={user} handleLogout={handleLogout} />
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
          path="/pets"
          element={user ? <MyPets user={user} pets={pets} /> : <Navigate to="/login" />}
        />
        <Route
          path='/pets/:id' 
          element={user ? <Pet user={user} /> : <Navigate to='/login' /> } 
        />
        <Route 
          path='/pets/:id/edit'
          element={user ? <AddPetForm user={user} pets={pets} updatePet={updatePet} /> : <Navigate to='/login' />}
        />
        <Route
          path="/addpet"
          element={user ? <AddPetForm addPet={addPet} user={user} /> : <Navigate to="/login" />}
        />
        <Route
          path="/appointments"
          element={user ? <Appointments user={user} pets={pets} appointments={appointments} addAppointment={addAppointment} deleteAppointment={deleteAppointment} /> : <Navigate to="/login" />}
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
