import { useState } from 'react'

// import service here
import { addAllergy } from '../../services/petService'

import styles from './Information.module.css'

const AllergyForm = (props) => {
  const [form, setForm] = useState({})

  const addToAllergies = async (e) => {
    e.preventDefault()
    const petAllergy = await addAllergy(props.pet.id, form)
    props.setPet(petAllergy)
    setForm(petAllergy)
  }

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value })
  }

  return (
    <>
      <p className={styles.formhead}>Add an Allergy:</p>
      <form onSubmit={addToAllergies}>
        <label htmlFor="allergy">
          <input 
            type="text"
            placeholder='add an allergy'
            name='allergy'
            value={form.allergy ? form.allergy : ''}
            onChange={handleChange}
            className={styles.input}
          />
          <button type='submit' className={styles.btn}>Submit</button>
        </label>
      </form>
    </>
  )
}

export default AllergyForm