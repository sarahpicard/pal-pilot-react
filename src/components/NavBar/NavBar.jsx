import { Link } from 'react-router-dom'
import { FaPaw } from 'react-icons/fa'

import styles from './NavBar.module.css'


const NavBar = (props) => {
  return (
    <div className={styles.nav}>
      {props.user ?
        <div>
          <ul>
            <li className={`${styles.li} ${styles.name}`}><Link to="/" className={styles.a}><FaPaw />Pal Pilot</Link></li>
            <li className={styles.li}><Link to="/pets" className={styles.a}>My Pets</Link></li>
            <li className={styles.li}><Link to="/addpet" className={styles.a}>Add a New Pet</Link></li>
            <li className={styles.li}><Link to="/appointments" className={styles.a}>Appointments</Link></li>
          </ul>
        </div>
      :
        <div className={styles.nav}>
          <ul>
            <li className={styles.li}><Link to="/" className={styles.a}><FaPaw />Pal Pilot</Link></li>
            <li className={styles.li}><Link to="/login" className={styles.a}>Log In</Link></li>
            <li className={styles.li}><Link to="/signup" className={styles.a}>Sign Up</Link></li>
          </ul>
        </div>
      }
    </div>
  )
}

export default NavBar
