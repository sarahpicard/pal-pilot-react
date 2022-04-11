import { useState } from 'react'

import AddAppointmentForm from '../../components/Appointment/AddAppointmentForm'

const Appointments = (props) => {
  return (
    <>
      <h1>this is the appointments page</h1>
      <AddAppointmentForm />
      {props.appointments.map((appointment) => {
        <h3>I'm an appointment</h3>
      })}
    </>
  )
}

export default Appointments