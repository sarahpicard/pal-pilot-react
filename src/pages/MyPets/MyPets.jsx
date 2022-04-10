import { useState } from 'react'

import PetCard from '../../components/PetCard/PetCard'

import styles from './MyPets.module.css'

const MyPets = (props) => {
  return (
    <div className={styles.container}>
      <h1>These are all of my pets</h1>
      <section>
        {props.pets.map((pet) => (
          <PetCard pet={pet} key={pet.id} />
        ))}
      </section>
    </div>
  )
}

export default MyPets