import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { getOne } from '../../services/petService'

import AddPetInput from './AddPetInput'

import styles from './AddPetInput.module.css'

const AddPetForm = (props) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [form, setForm] = useState({})

  // handle submitting new pet form
  const handleSubmit = async (e) => {
    e.preventDefault()
    id ? props.updatePet(form) : props.addPet(form)
    navigate('/pets')
  }

  // add form data to state
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  // use effect for form
  useEffect(() => {
    const fetchOne = async () => {
      const data = await getOne(id)
      setForm({
        id: data.pet.id,
        name: data.pet.name,
        breed: data.pet.breed,
        animal_type: data.pet.animal_type,
        age: data.pet.age,
        weight: data.pet.weight,
        // allergies: data.pet.allergies,
        // medications: data.pet.medications,
        // vaccines: data.pet.vaccines
      })
    }
    id && fetchOne()
    return () => setForm({})
  }, [id])

  return(
    <>
      <div className={styles.whole}>
        <h1>Add A New Pet</h1>
      </div>
      <div className={styles.form}> 
        <form onSubmit={handleSubmit}>
          <AddPetInput form={form} handleChange={handleChange} />
          <button className={styles.btn} type='submit'>Submit</button>
        </form>
      </div>
    </>
  )
}

export default AddPetForm