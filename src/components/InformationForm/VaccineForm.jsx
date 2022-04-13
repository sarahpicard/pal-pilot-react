import { useState } from 'react'

// import service here
import { addVaccine } from '../../services/petService'

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
      <h6>Add a Vaccine:</h6>
      <form onSubmit={addToVaccines}>
        <label htmlFor="vaccine">
          <input 
            type="text"
            placeholder='vaccine'
            name='vaccine'
            value={form.vaccine ? form.vaccine : ''}
            onChange={handleChange}
          />
          <button type='submit'>Submit</button>
        </label>
      </form>
    </>
  )
}

export default VaccineForm