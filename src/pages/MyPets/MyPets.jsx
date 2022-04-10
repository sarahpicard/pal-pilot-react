import { useState } from 'react'

import PetCard from '../../components/PetCard/PetCard'

const MyPets = (props) => {
  return (
    <>
      <h1>These are all of my pets</h1>
      <section>
        {props.pets.map((pet) => (
          <PetCard pet={pet} key={pet.id} />
        ))}
      </section>
    </>
  )
}

export default MyPets