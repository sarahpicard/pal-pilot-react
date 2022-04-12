import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { getOne } from '../../services/petService'

const Pet = (props) => {
  const { id } = useParams()
  const [pet, setPet] = useState(null)

  useEffect(() => {
    const fetchOne = async () => {
      const data = await getOne(id)
      setPet(data.pet)
    }
    fetchOne()
  }, [id])

  if (!pet) return <h1>Loading</h1>

  return (
    <>
      <h1>{pet.name}</h1>
      <h5>Breed: {pet.breed}</h5>
      <p>Age: {pet.age}</p>
      <p>Weight: {pet.weight}</p>
      <p>{pet.medications.length ? pet.medications : 'no medications'}</p>
      <p>{pet.vaccines.length ? pet.vaccines : 'no vaccines'}</p>
      <p>{pet.allergies.length ? pet.allergies : 'no allergies'}</p>
    </>
  )
}

export default Pet