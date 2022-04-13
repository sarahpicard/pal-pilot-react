import { useState } from 'react'

// import service here
import { addMedication } from '../../services/petService'

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
            placeholder='medication'
            name='medication'
            value={form.medication ? form.medication : ''}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="dosage">
          <input 
            type="text" 
            placeholder='medication dose'
            name='dosage'
            value={form.dosage ? form.dosage : ''}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="frequency">
          <input 
            type="text" 
            placeholder='medication frequency'
            name='frequency'
            value={form.frequency ? form.frequency : ''}
            onChange={handleChange}
          />
        </label>
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default MedicationForm