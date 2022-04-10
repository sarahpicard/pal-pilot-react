import { Link } from 'react-router-dom'

const PetCard = (props) => {
  return (
    <h2>{props.pet.name}</h2>
  )
}

export default PetCard