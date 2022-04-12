import { Link } from 'react-router-dom'
import { useState } from 'react'

import styles from './PetCard.module.css'

const PetCard = (props) => {
  const [isActive, setActive] = useState("false")

  const handleToggle = () => {
    setActive(!isActive);
  }

  return (
    <>
      <div className={styles.whole}>
        <div className={styles.card}>
          <div className={`${styles.front} ${styles.cardFace}`}>
            <h2>{props.pet.name}</h2>
            <img src="https://i.imgur.com/sflSwK0.png" alt="puppy" style={{ "width": "100px", "height": "100px"}}/>
          </div>
          <div className={`${styles.back} ${styles.cardFace}`}>
            <p>{props.pet.animal_type}</p>
            <p>{props.pet.breed}</p>
            <p>Age: {props.pet.age}</p>
            <p>Weight: {props.pet.weight}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default PetCard