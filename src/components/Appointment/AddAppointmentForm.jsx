import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { getOne } from '../../services/appointmentService'

import AddAppointmentInput from './AddAppointmentInput'

const AddAppointmentForm = (props) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [form, setForm] = useState({})

  // handle submitting new appointment form 
  const handleSubmit = async (e) => {
    e.preventDefault()
    id ? props.updateAppointment(form) : props.addAppointment(form)
    navigate('/appointments')
  }

  // add form data to state
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  // useEffect for form
  useEffect(() => {
    const fetchOne = async () => {
      const data = await getOne(id)
      setForm({
        id: data.appointment.id,
        name: data.appointment.name,
        description: data.appointment.description,
        address: data.appointment.address
      })
    }
    id && fetchOne()
    return () => setForm({})
  })

  return (
    <>
      <h1>Appointment Form</h1>
      <form onSubmit={handleSubmit}>
        <AddAppointmentInput form={form} handleChange={handleChange} />
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default AddAppointmentForm