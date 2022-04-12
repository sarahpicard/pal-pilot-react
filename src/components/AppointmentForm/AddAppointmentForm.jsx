import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { getOne } from '../../services/appointmentService'

import AddAppointmentInput from './AddAppointmentInput'

import styles from './AddAppointmentInput.module.css'

const AddAppointmentForm = (props) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [form, setForm] = useState({})

  // handle submitting new appointment form 
  const handleSubmit = async (e) => {
    e.preventDefault()
    id ? props.addAppointment(form) : props.addAppointment(form)
    navigate('/appointments')
  }

  // add form data to state
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  // useEffect for form
  useEffect(() => {
    const fetchOne = async () => {
      const appData = await getOne(id)
      setForm({
        id: appData.id,
        name: appData.name,
        description: appData.description,
        address: appData.address
      })
    }
    id && fetchOne()
    return () => setForm({})
  }, [id])

  return (
    <>
      <h4>Add A New Appointment:</h4>
      <form onSubmit={handleSubmit}>
        <AddAppointmentInput form={form} handleChange={handleChange} />
        <button type='submit' className={styles.btn}>
            Submit
        </button>
      </form>
    </>
  )
}

export default AddAppointmentForm