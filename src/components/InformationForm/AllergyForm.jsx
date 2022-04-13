import { useState } from 'react'

// import service here
import { addAllergy } from '../../services/petService'

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
      <h6>Add an Allergy:</h6>
      <form onSubmit={addToAllergies}>
        <label htmlFor="allergy">
          <input 
            type="text"
            placeholder='allergy'
            name='allergy'
            value={form.allergy ? form.allergy : ''}
            onChange={handleChange}
          />
          <button type='submit'>Submit</button>
        </label>
      </form>
    </>
  )
}

export default AllergyForm