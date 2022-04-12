import styles from './Landing.module.css'

const Landing = ({ user }) => {
  return (
    <>
      <main className={styles.container}>
        <h1>Welcome to Pal Pilot! 🐾</h1>
        <img src="https://i.imgur.com/TCYgCAC.png" alt="people walking dog" className={styles.img}/>
      </main>
    </>
  )
}

export default Landing
