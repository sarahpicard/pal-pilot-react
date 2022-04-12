import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { getOne } from '../../services/petService'

import styles from './Pet.module.css'

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
      <div className={styles.div}>
        <div className={styles.whole}>
          <h1>{pet.name ? pet.name : 'no name'}</h1>
          <img src="https://i.imgur.com/sflSwK0.png" alt="puppy_picture" style={{ "width": "300px", "height": "300px"}}/>
          <h5>Breed: {pet.breed ? pet.breed : 'no breed'}</h5>
          <p>Age: {pet.age ? pet.age : 'no age'}</p>
          <p>Weight: {pet.weight ? pet.weight : 'no weight'}</p>
          {/* <p>{pet.medications.length ? pet.medications : 'no medications'}</p>
          <p>{pet.vaccines.length ? pet.vaccines : 'no vaccines'}</p>
          <p>{pet.allergies.length ? pet.allergies : 'no allergies'}</p> */}
        </div>
      </div>
    </>
  )
}

export default Pet