import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { getOne } from '../../services/petService'

import styles from './Pet.module.css'

import Information from '../../components/InformationForm/Information'

const Pet = (props) => {
  const { id } = useParams()
  const [pet, setPet] = useState(null)
  const navigate = useNavigate()

  const idx = Math.floor(Math.random() * (props.images.length))

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
          <img src={props.images[idx]} alt="puppy_picture" style={{ "width": "300px", "height": "300px"}}/>
          <h5>Breed: {pet.breed ? pet.breed : 'no breed'}</h5>
          <p>Age: {pet.age ? pet.age : 'no age'} years old</p>
          <p>Weight: {pet.weight ? pet.weight : 'no weight'}</p>
          <Information pet={pet} user={props.user} setPet={setPet}/>
          <button className={styles.btn} type='submit' onClick={() => navigate(`/pets/${pet.id}/edit`, { state: pet })}>Update</button>
        </div>
      </div>
    </>
  )
}

export default Pet