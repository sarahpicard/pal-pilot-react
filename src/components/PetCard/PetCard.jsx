import { Link } from 'react-router-dom'

const PetCard = (props) => {
  return (
    <>
      <h2>{props.pet.name}</h2>
      <p>{props.pet.animal_type}</p>
      <p>{props.pet.breed}</p>
      <p>Age: {props.pet.age}</p>
      <p>Weight: {props.pet.weight}</p>
    </>
  )
}

export default PetCard