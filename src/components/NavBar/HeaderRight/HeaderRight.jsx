import { Link } from "react-router-dom";

import styles from './HeaderRight.module.css'

const HeaderRight = (props) => {
  return (
    <div>
      <div>
        {props.user ?
          <div className={styles.whole}>
            <ul className={styles.ul}>
              <div className={styles.word_li}>
                <li className={styles.li}>
                  <Link to="" onClick={props.handleLogout} style={{ textDecoration: 'none' }}>
                    <span className={styles.span}>Log Out</span>
                  </Link>
                </li>
                <li className={styles.li}>
                  <Link to="/changePassword" style={{ textDecoration: 'none' }}>
                    <span className={styles.span}>Change Password</span>
                  </Link>
                </li>
                <li className={styles.li}>
                  <Link to="/myprofile" style={{ textDecoration: 'none' }}>
                    <span className={styles.span}>My Profile</span>
                  </Link>
                </li>
              </div>
              <li className={styles.li}>
                <img src="https://i.imgur.com/Y5qHYjd.png" alt="avatar_image" className={styles.avatar}/>
              </li>
            </ul>
          </div>
        : 
        <p></p> 
        }
      </div>
    </div>
  )
}

export default HeaderRight