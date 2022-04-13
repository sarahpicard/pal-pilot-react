import { useState } from 'react'

// import service here
import { addVaccine } from '../../services/petService'

import styles from './Information.module.css'

const VaccineForm = (props) => {
  const [form, setForm] = useState({})

  const addToVaccines = async (e) => {
    e.preventDefault()
    const petVaccine = await addVaccine(props.pet.id, form)
    props.setPet(petVaccine)
    setForm(petVaccine)
  }

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value })
  }

  return (
    <>
      <form onSubmit={addToVaccines}>
        <label htmlFor="vaccine">
          <input 
            type="text"
            placeholder='add a vaccine'
            name='vaccine'
            value={form.vaccine ? form.vaccine : ''}
            onChange={handleChange}
            className={styles.input}
          />
          <button type='submit' className={styles.btn}>Submit</button>
        </label>
      </form>
    </>
  )
}

export default VaccineForm