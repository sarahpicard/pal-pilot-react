import { Link } from 'react-router-dom'
import { FaPaw } from 'react-icons/fa'
import { FaSignInAlt } from 'react-icons/fa'
import { FaUserPlus } from 'react-icons/fa'
import { FaDog } from 'react-icons/fa'
import { FaPlus } from 'react-icons/fa'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { FaSignOutAlt } from 'react-icons/fa'

import styles from './NavBar.module.css'


const NavBar = (props) => {
  return (
    <div className={styles.entire}>
      {props.user ?
        <div className={styles.nav}>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <div className={styles.div}>
                <Link to="/" className={styles.a}>
                  <FaPaw className={styles.icon}/>
                  <span className={styles.span}>Pal Pilot</span>
                </Link>
              </div>
            </li>
            <li className={styles.li}>
              <div className={styles.div}>
                <Link to="/pets" className={styles.a}>
                    <FaDog className={styles.icon}/>
                    <span className={styles.span}>My Pets</span>
                </Link>
              </div>
            </li>
            <li className={styles.li}>
              <div className={styles.div}>
                <Link to="/addpet" className={styles.a}>
                  <FaPlus className={styles.icon}/>
                  <span className={styles.span}>Add Pet</span>
                </Link>
              </div>
            </li>
            <li className={styles.li}>
              <div className={styles.div}>
                <Link to="/appointments" className={styles.a}>
                  <FaRegCalendarAlt className={styles.icon}/>
                  <span className={`${styles.span} ${styles.appointment}`}>Appointments</span>
                </Link>
              </div>
            </li>
            <li className={styles.li}>
              <div className={styles.div}>
                <Link to="" onClick={props.handleLogout} className={styles.a}>
                  <FaSignOutAlt className={styles.icon}/>
                  <span className={styles.span}>Log Out</span>
                </Link>
              </div>
            </li>
          </ul>
        </div>
      :
        <div className={styles.nav}>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <div className={styles.div}>
                <Link to="/" className={styles.a}>
                  <FaPaw className={styles.icon}/>
                  <span className={styles.span}>Pal Pilot</span>
                </Link>
              </div>
            </li>
            <li className={styles.li}>
              <div className={styles.div}>
                <Link to="/login" className={styles.a}>
                  <FaSignInAlt className={styles.icon}/>
                  <span className={styles.span}>Log In</span>
                </Link>
              </div>
            </li>
            <li className={styles.li}>
              <div className={styles.div}>
                <Link to="/signup" className={styles.a}>
                  <FaUserPlus className={styles.icon}/>
                  <span className={styles.span}>Sign Up</span>
                </Link>
              </div>
            </li>
          </ul>
        </div>
      }
    </div>
  )
}

export default NavBar
