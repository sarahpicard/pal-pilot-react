import { Navigate } from 'react-router-dom'
const ProtectedRoute = ({ user, children }) => {
  if (user.id === user.pets.profile_id) { 
    return <Navigate to="/" /> 
  }
  return children
}

export default ProtectedRoute