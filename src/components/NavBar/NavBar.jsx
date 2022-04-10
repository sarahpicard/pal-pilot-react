import { Link } from 'react-router-dom'
import { FaPaw } from 'react-icons/fa'
import styles from './NavBar.module.css'


const NavBar = (props) => {
  return (
    <>
      {props.user ?
        <nav>
          <ul>
            <li><Link to="/" style={{ textDecoration: 'none' }}><FaPaw />Pal Pilot</Link></li>
            <li><Link to="" onClick={props.handleLogout} style={{ textDecoration: 'none' }}>Log Out</Link></li>
            <li><Link to="/changePassword" style={{ textDecoration: 'none' }}>Change Password</Link></li>
            <li><Link to="/mypets" style={{ textDecoration: 'none' }}>My Pets</Link></li>
            <li><Link to="/addpet" style={{ textDecoration: 'none' }}>Add a New Pet</Link></li>
            <li><Link to="/appointments" style={{ textDecoration: 'none' }}>Appointments</Link></li>
            <li><Link to="/myprofile" style={{ textDecoration: 'none' }}>My Profile</Link></li>
          </ul>
        </nav>
      :
        <nav>
          <ul>
            <li><Link to="/" style={{ textDecoration: 'none' }}><FaPaw />Pal Pilot</Link></li>
            <li><Link to="/login" style={{ textDecoration: 'none' }}>Log In</Link></li>
            <li><Link to="/signup" style={{ textDecoration: 'none' }}>Sign Up</Link></li>
          </ul>
        </nav>
      }
    </>
  )
}

export default NavBar
