import { Link } from 'react-router-dom'

const NavBar = (props) => {
  return (
    <>
      {props.user ?
        <nav>
          <ul>
            <li>Welcome, {props.user.name}</li>
            <li><Link to="" onClick={props.handleLogout}>LOG OUT</Link></li>
            <li><Link to="/changePassword">Change Password</Link></li>
            <li><Link to="/mypets">My Pets</Link></li>
            <li><Link to="/addpet">Add a New Pet</Link></li>
            <li><Link to="/appointments">Appointments</Link></li>
            <li><Link to="/myprofile">My Profile</Link></li>
          </ul>
        </nav>
      :
        <nav>
          <ul>
            <li><Link to="/login">Log In</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
          </ul>
        </nav>
      }
    </>
  )
}

export default NavBar
