import { useState } from 'react'

// import service here
import { addMedication } from '../../services/petService'

import styles from './Information.module.css'

const MedicationForm = (props) => {
  const [form, setForm] = useState({})

  const addToMedication = async (e) => {
    e.preventDefault()
    const petMed = await addMedication(props.pet.id, form)
    props.setPet(petMed)
    setForm(petMed)
  }

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value })
  }

  return (
    <>
      <h6>Add a Medication:</h6>
      <form onSubmit={addToMedication}>
        <label htmlFor="medication">
          <input 
            type="text"
            placeholder='add medication'
            name='medication'
            value={form.medication ? form.medication : ''}
            onChange={handleChange}
            className={styles.input}
          />
        </label><br />
        <label htmlFor="dosage">
          <input 
            type="text" 
            placeholder='add medication dose'
            name='dosage'
            value={form.dosage ? form.dosage : ''}
            onChange={handleChange}
            className={styles.input}
          />
        </label><br />
        <label htmlFor="frequency">
          <input 
            type="text" 
            placeholder='add medication frequency'
            name='frequency'
            value={form.frequency ? form.frequency : ''}
            onChange={handleChange}
            className={styles.input}
          />
        </label><br />
        <button type='submit' className={styles.btn}>Submit</button>
      </form>
    </>
  )
}

export default MedicationForm