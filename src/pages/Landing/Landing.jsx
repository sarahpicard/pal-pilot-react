import styles from './Landing.module.css'

import { Navigator, useNavigate } from 'react-router-dom'

const Landing = ({ user, pets }) => {
  const navigate = useNavigate()

  return (
    <>
      <main className={styles.container}>
        <div className={styles.words}>
          <h1 className={styles.h1}>Welcome to Pal Pilot! 🐾</h1>
          <p className={styles.p}>Pal Pilot helps pet parents keep track of important information about their pets!</p><br />
          <p className={styles.p}>Pal parents can manage basic pet information, including weight, age, vaccinations, medications, allergies, and appointments for their pets!</p>
          {user ? 
          <div>
            <button className={styles.btn} onClick={() => navigate(`/addpet`)}>Add a New Pet!</button><br />
          </div>
          :
          <p></p>
          }
        </div>
        <img src="https://i.imgur.com/AeOZOiU.png" alt="people walking dog" className={styles.img}/>
      </main>
    </>
  )
}

export default Landing
