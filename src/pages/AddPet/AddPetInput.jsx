import { useState } from 'react'

const AddPetInput = (props) => {
  return (
    <>
        <label htmlFor="name">Name:
          <input 
            type="text"  
            placeholder='pet name'
            autoComplete='off'
          />
        </label>
        <label htmlFor="breed">Breed:
          <input 
            type="text" 
            placeholder='pet breed'
            autoComplete='off'
            />
        </label>
        <label htmlFor="animal_type">Animal Type:
          <input 
            type="text" 
            placeholder='animal type'
            autoComplete='off'
            />
        </label>
        <label htmlFor="age">Pet Age:
          <input 
            type="text" 
            placeholder='pet age'
            autoComplete='off'
            />
        </label>
        <label htmlFor="weight">Weight:
          <input 
            type="text" 
            placeholder='pet weight'
            autoComplete='off'
            />
        </label>
    </>
  )
}

export default AddPetInput