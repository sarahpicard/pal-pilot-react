import { useState } from 'react'

import PetCard from '../../components/PetCard/PetCard'

import styles from './MyPets.module.css'

const MyPets = (props) => {
  return (
    <div>
      <h1>These are all of my pets</h1>
        {props.user.id === props.pets.profile_id ?
          <section>
            {props.pets.map((pet) => (
              <PetCard pet={pet} key={pet.id} />
            ))}
          </section>
        :
          <p>You don't have any pets yet</p>
        } 
    </div>
  )
}

export default MyPets