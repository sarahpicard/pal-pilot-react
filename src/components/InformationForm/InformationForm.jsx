import { useState } from 'react'

// import service here
import { addMedication } from '../../services/petService'

const InformationForm = (props) => {
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
          <button type='submit'>Submit</button>
        </label>
      </form>
    </>
  )
}

export default InformationForm