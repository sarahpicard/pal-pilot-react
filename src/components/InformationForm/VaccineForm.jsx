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
        </label><br />
        <label htmlFor="vaccine last">
          <input 
            type="datetime-local" 
            onChange={handleChange}
            value={form.last_shot ? form.last_shot: ''}
            className={styles.input}
            name='last_shot'
          />
        </label><br />
        <label htmlFor="vaccine next">
          <input 
            type="datetime-local" 
            onChange={handleChange}
            value={form.next_shot ? form.next_shot: ''}
            className={styles.input}
            name='next_shot'
          />
        </label><br />
        <button type='submit' className={styles.btn}>Submit</button>
      </form>
    </>
  )
}

export default VaccineForm