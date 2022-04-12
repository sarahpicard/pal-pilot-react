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
      <div 
        className={isActive ? styles.whole : styles.flipped}
        onClick={handleToggle}
      >
        <div className={styles.card}>
          <div className={styles.front}>
            <h2>{props.pet.name}</h2>
            <img src="https://i.imgur.com/11OvKIB.jpg" alt="puppy" style={{ "width": "100px", "height": "100px"}}/>
          </div>
          <div className={styles.back}>
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