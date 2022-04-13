import styles from './Landing.module.css'

const Landing = ({ user }) => {
  return (
    <>
      <main className={styles.container}>
        <div className={styles.words}>
          <h1 className={styles.h1}>Welcome to Pal Pilot! 🐾</h1>
          <p className={styles.p}>Pal Pilot helps pet parents keep track of important information about their pets!</p><br />
          <p className={styles.p}>Pal parents can manage basic pet information, including weight, age, vaccinations, medications, allergies, and appointments for their pets!</p>
          {user ? 
          <div>
            <button className={styles.btn}>Add a New Pet!</button><br />
            <button className={styles.btn}>See All of My Pets!</button>
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
