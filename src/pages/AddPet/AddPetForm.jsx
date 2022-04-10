import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import AddPetInput from './AddPetInput'

const AddPetForm = (props) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [form, setForm] = useState({})

  // handle submitting new pet form
  const handleSubmit = async (e) => {
    e.preventDefault()
    id ? props.updatePet(form) : props.addPet(form)
    navigate('/mypets')
  }

  // add form data to state
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  return(
    <>
      <h1>Add Pet Form</h1>
      <form onSubmit={handleSubmit}>
        <AddPetInput form={form} handleChange={handleChange}/>
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default AddPetForm