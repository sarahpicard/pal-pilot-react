import { useState } from 'react'

const MyPets = (props) => {
  return (
    <>
      <h1>These are all of my pets</h1>
      <section>
        {props.pets.map((pet) => (
          <h2>I'm a pet</h2>
        ))}
      </section>
    </>
  )
}

export default MyPets