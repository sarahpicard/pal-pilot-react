import { Link } from 'react-router-dom'
import { FaArrowCircleDown } from 'react-icons/fa'

import styles from './PetCard.module.css'

const PetCard = (props) => {

  const idx = Math.floor(Math.random() * (props.images.length))

  return (
    <>
    <Link to={`/pets/${props.pet.id}`} className={styles.link}>
      <div className={styles.whole}>
        <div className={styles.card}>
          <div className={`${styles.front} ${styles.cardFace}`}>
            <h1 className={styles.h1}>{props.pet.name}</h1>
            <img src={props.images[idx]} alt="pet" style={{ "width": "150px", "height": "150px"}}/><br />
            <FaArrowCircleDown className={styles.arrow}/>
          </div>
          <div className={`${styles.back} ${styles.cardFace}`}>
            <p>{props.pet.animal_type}</p>
            <p>{props.pet.breed}</p>
            <p>Age: {props.pet.age}</p>
            <p>Weight: {props.pet.weight}</p>
          </div>
        </div>
      </div>
    </Link>
    </>
  )
}

export default PetCard